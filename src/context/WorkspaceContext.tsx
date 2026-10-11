import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  AppState,
  EnergyMode,
  FortyFiveDayPlan,
  MistakeLogEntry,
  MistakeCode,
  RevisionStage,
  AiDependencyLog,
  PracticalProject,
  SideQuest,
  BossBattle,
  SubjectCode,
  UserNote
} from '../types';
import { getComplete45DayRoadmap } from '../data/fortyFiveDayRoadmap';
import { INITIAL_NOTES } from '../data/initialNotes';
import { WINTER_ARC_HABITS } from '../data/habitsData';
import { PRACTICAL_PROJECTS, SIDE_QUESTS, BOSS_BATTLES } from '../data/projectsAndQuests';

const STORAGE_KEY = 'winter_arc_bsc_csit_os_v2';

interface WorkspaceContextType {
  state: AppState;
  currentDay: number;
  setCurrentDay: (day: number) => void;
  setEnergyMode: (mode: EnergyMode) => void;
  toggleDayCompletion: (day: number) => void;
  toggleHabit: (day: number, habitId: string) => void;
  toggleTopic: (topicKey: string) => void;
  togglePyq: (pyqId: string) => void;
  addMistake: (mistake: Omit<MistakeLogEntry, 'id' | 'createdAt'>) => void;
  toggleMistakeFixed: (id: string) => void;
  deleteMistake: (id: string) => void;
  addAiDependencyLog: (log: Omit<AiDependencyLog, 'id' | 'date'>) => void;
  toggleProjectComplete: (id: string) => void;
  toggleQuestComplete: (id: string) => void;
  toggleBossBattleComplete: (week: number) => void;
  addNote: (note: Omit<UserNote, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateNote: (id: string, updates: Partial<UserNote>) => void;
  deleteNote: (id: string) => void;
  logStudyMinutes: (minutes: number) => void;
  resetAllProgress: () => void;
  exportToNotionMarkdown: () => string;
  exportStateJson: () => string;
  importStateJson: (json: string) => boolean;
  userLevel: {
    levelNumber: number;
    title: string;
    currentXp: number;
    nextLevelXp: number;
    progressPercent: number;
  };
  overallProgressPercent: number;
  activeHabitCountToday: number;
}

const WorkspaceContext = createContext<WorkspaceContextType | null>(null);

function getInitialState(): AppState {
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.dayPlans && parsed.dayPlans.length === 45) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to parse state from localStorage', e);
    }
  }

  // Pre-seed 45 days habit logs
  const initialHabitLogs: Record<number, Record<string, boolean>> = {};
  for (let d = 1; d <= 45; d++) {
    initialHabitLogs[d] = {};
    WINTER_ARC_HABITS.forEach((h) => {
      initialHabitLogs[d][h.id] = false;
    });
  }

  return {
    currentDay: 1,
    energyMode: 'normal',
    userXp: 120, // Start with starter XP
    dayPlans: getComplete45DayRoadmap(),
    habitLogs: initialHabitLogs,
    completedTopics: {},
    solvedPyqs: {},
    mistakeLogs: [
      {
        id: 'mistake-demo-1',
        questionText: 'Find gcd(428, 164) and express as linear combination s*a + t*b.',
        subjectCode: 'CSC165',
        topic: 'Extended Euclidean Algorithm',
        mistakeCode: 'D',
        whyIFailed: 'Sign error when expanding brackets in back-substitution step.',
        correctConcept: 'Keep Bézout coefficients grouped with parentheses and verify s*428 + t*164 equals gcd at each line.',
        correctionAction: 'Re-solve on physical paper without skipping intermediate expansion steps.',
        createdAt: new Date().toISOString(),
        nextRevisionDate: new Date(Date.now() + 24 * 3600 * 1000).toISOString(),
        revisionStage: 'R1',
        isFixed: false
      }
    ],
    aiDependencyLogs: [
      {
        id: 'ai-log-demo-1',
        date: new Date().toISOString().split('T')[0],
        problem: 'Implement a C++ copy constructor for a dynamic integer array.',
        myOwnAttempt: 'Wrote class with int* arr and pointer assignment arr = obj.arr (caused shallow copy pointer collision).',
        aiHintReceived: 'AI explained that dynamic memory requires `arr = new int[size]` and copying each element.',
        whatILearned: 'Shallow copy causes double-free crash upon destruction; Deep copy allocates independent heap memory.',
        canReproduceWithoutAi: true,
        status: 'Reproduced Independently'
      }
    ],
    projects: PRACTICAL_PROJECTS,
    sideQuests: SIDE_QUESTS,
    bossBattles: BOSS_BATTLES,
    notes: INITIAL_NOTES,
    totalStudyMinutes: 0,
    winterArcStartDate: new Date().toISOString(),
    currentStreak: 1,
    bestStreak: 1,
    hasRecoveryShield: true
  };
}

export const WorkspaceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>(getInitialState);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Failed to save state to localStorage', e);
    }
  }, [state]);

  const setCurrentDay = (day: number) => {
    setState((prev) => ({ ...prev, currentDay: day }));
  };

  const setEnergyMode = (mode: EnergyMode) => {
    setState((prev) => ({ ...prev, energyMode: mode }));
  };

  const awardXp = (amount: number) => {
    setState((prev) => ({
      ...prev,
      userXp: prev.userXp + amount
    }));
  };

  const toggleDayCompletion = (day: number) => {
    setState((prev) => {
      const nextPlans = prev.dayPlans.map((p) => {
        if (p.day === day) {
          const nextCompleted = !p.completed;
          if (nextCompleted) {
            try {
              confetti({ particleCount: 90, spread: 75, origin: { y: 0.6 } });
            } catch {
              // ignore
            }
          }
          return { ...p, completed: nextCompleted };
        }
        return p;
      });

      const dayIsCompleted = nextPlans.find((p) => p.day === day)?.completed;
      const xpChange = dayIsCompleted ? 50 : -50;

      // Recalculate streak
      let streak = 0;
      for (const p of nextPlans) {
        if (p.completed) streak++;
        else break;
      }

      return {
        ...prev,
        dayPlans: nextPlans,
        userXp: Math.max(0, prev.userXp + xpChange),
        currentStreak: Math.max(1, streak),
        bestStreak: Math.max(prev.bestStreak, streak)
      };
    });
  };

  const toggleHabit = (day: number, habitId: string) => {
    setState((prev) => {
      const currentDayLogs = prev.habitLogs[day] || {};
      const nextValue = !currentDayLogs[habitId];

      const newLogs = {
        ...prev.habitLogs,
        [day]: {
          ...currentDayLogs,
          [habitId]: nextValue
        }
      };

      const xpChange = nextValue ? 10 : -10;

      return {
        ...prev,
        userXp: Math.max(0, prev.userXp + xpChange),
        habitLogs: newLogs
      };
    });
  };

  const toggleTopic = (topicKey: string) => {
    setState((prev) => {
      const next = !prev.completedTopics[topicKey];
      return {
        ...prev,
        userXp: prev.userXp + (next ? 15 : -15),
        completedTopics: {
          ...prev.completedTopics,
          [topicKey]: next
        }
      };
    });
  };

  const togglePyq = (pyqId: string) => {
    setState((prev) => {
      const next = !prev.solvedPyqs[pyqId];
      if (next) {
        try {
          confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
        } catch {
          // ignore
        }
      }
      return {
        ...prev,
        userXp: prev.userXp + (next ? 25 : -25),
        solvedPyqs: {
          ...prev.solvedPyqs,
          [pyqId]: next
        }
      };
    });
  };

  const addMistake = (mistake: Omit<MistakeLogEntry, 'id' | 'createdAt'>) => {
    const newEntry: MistakeLogEntry = {
      ...mistake,
      id: `mistake-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    setState((prev) => ({
      ...prev,
      mistakeLogs: [newEntry, ...prev.mistakeLogs]
    }));
  };

  const toggleMistakeFixed = (id: string) => {
    setState((prev) => ({
      ...prev,
      userXp: prev.userXp + 20,
      mistakeLogs: prev.mistakeLogs.map((m) =>
        m.id === id ? { ...m, isFixed: !m.isFixed } : m
      )
    }));
  };

  const deleteMistake = (id: string) => {
    setState((prev) => ({
      ...prev,
      mistakeLogs: prev.mistakeLogs.filter((m) => m.id !== id)
    }));
  };

  const addAiDependencyLog = (log: Omit<AiDependencyLog, 'id' | 'date'>) => {
    const newLog: AiDependencyLog = {
      ...log,
      id: `ai-log-${Date.now()}`,
      date: new Date().toISOString().split('T')[0]
    };
    setState((prev) => ({
      ...prev,
      userXp: prev.userXp + 30, // reward independent problem solving
      aiDependencyLogs: [newLog, ...prev.aiDependencyLogs]
    }));
  };

  const toggleProjectComplete = (id: string) => {
    setState((prev) => {
      const nextProjects = prev.projects.map((p) =>
        p.id === id ? { ...p, completed: !p.completed } : p
      );
      const isCompletedNow = nextProjects.find((p) => p.id === id)?.completed;
      if (isCompletedNow) {
        try {
          confetti({ particleCount: 120, spread: 80, origin: { y: 0.5 } });
        } catch {
          // ignore
        }
      }
      return {
        ...prev,
        userXp: prev.userXp + (isCompletedNow ? 75 : -75),
        projects: nextProjects
      };
    });
  };

  const toggleQuestComplete = (id: string) => {
    setState((prev) => {
      const quest = prev.sideQuests.find((q) => q.id === id);
      const nextQuests = prev.sideQuests.map((q) =>
        q.id === id ? { ...q, completed: !q.completed } : q
      );
      const isNowCompleted = nextQuests.find((q) => q.id === id)?.completed;
      const xpReward = quest ? quest.xpReward : 25;

      return {
        ...prev,
        userXp: prev.userXp + (isNowCompleted ? xpReward : -xpReward),
        sideQuests: nextQuests
      };
    });
  };

  const toggleBossBattleComplete = (week: number) => {
    setState((prev) => {
      const battle = prev.bossBattles.find((b) => b.week === week);
      const nextBattles = prev.bossBattles.map((b) =>
        b.week === week ? { ...b, isCompleted: !b.isCompleted } : b
      );
      const isCompletedNow = nextBattles.find((b) => b.week === week)?.isCompleted;
      if (isCompletedNow) {
        try {
          confetti({ particleCount: 150, spread: 90, origin: { y: 0.5 } });
        } catch {
          // ignore
        }
      }
      return {
        ...prev,
        userXp: prev.userXp + (isCompletedNow ? (battle?.xpReward || 50) : -50),
        bossBattles: nextBattles
      };
    });
  };

  const addNote = (note: Omit<UserNote, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newNote: UserNote = {
      ...note,
      id: `note-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setState((prev) => ({
      ...prev,
      userXp: prev.userXp + 15,
      notes: [newNote, ...prev.notes]
    }));
  };

  const updateNote = (id: string, updates: Partial<UserNote>) => {
    setState((prev) => ({
      ...prev,
      notes: prev.notes.map((n) =>
        n.id === id ? { ...n, ...updates, updatedAt: new Date().toISOString() } : n
      )
    }));
  };

  const deleteNote = (id: string) => {
    setState((prev) => ({
      ...prev,
      notes: prev.notes.filter((n) => n.id !== id)
    }));
  };

  const logStudyMinutes = (minutes: number) => {
    setState((prev) => ({
      ...prev,
      totalStudyMinutes: prev.totalStudyMinutes + minutes,
      userXp: prev.userXp + Math.round(minutes / 3) // 1 XP per 3 study minutes
    }));
  };

  const resetAllProgress = () => {
    localStorage.removeItem(STORAGE_KEY);
    setState(getInitialState());
  };

  const exportStateJson = () => {
    return JSON.stringify(state, null, 2);
  };

  const importStateJson = (json: string): boolean => {
    try {
      const parsed = JSON.parse(json);
      if (parsed && parsed.dayPlans && parsed.habitLogs) {
        setState(parsed);
        return true;
      }
    } catch (e) {
      console.error('Invalid json import', e);
    }
    return false;
  };

  const exportToNotionMarkdown = (): string => {
    let md = `# ❄️ BSc CSIT Winter Arc OS // Semester II Master System\n\n`;
    md += `> **Academic Target**: Tribhuvan University BSc CSIT Semester II Examination\n`;
    md += `> **Status**: Day ${state.currentDay} / 45 | XP: ${state.userXp} | Level: ${calculateUserLevel(state.userXp).title}\n`;
    md += `> **Energy Mode**: ${state.energyMode.toUpperCase()} | Total Study Time: ${(state.totalStudyMinutes / 60).toFixed(1)} Hours\n\n`;

    md += `## 1. ❄️ Winter Arc Daily Disciplines Matrix\n\n`;
    WINTER_ARC_HABITS.forEach((h) => {
      md += `- [ ] **${h.emoji} ${h.name}** (Target: ${h.target})\n`;
    });

    md += `\n---\n\n## 2. ⚡ 45-Day Study Calendar (5 Phases)\n\n`;
    state.dayPlans.forEach((p) => {
      const check = p.completed ? '[x]' : '[ ]';
      md += `### ${check} Day ${p.day}: ${p.theme} (${p.phaseName})\n`;
      md += `> **Daily Challenge:** ${p.dailyChallenge}\n\n`;
      p.subjects.forEach((s) => {
        md += `- **${s.subjectCode} Unit ${s.unit}**: ${s.topic}\n`;
        md += `  - *Theory:* ${s.theory.whatIsIt}\n`;
        md += `  - *Practice:* Easy: ${s.practiceQuestions.level1Easy} | Exam: ${s.practiceQuestions.level3Exam}\n`;
        md += `  - *TU PYQ Target:* ${s.tuPyqTarget}\n`;
      });
      md += `\n`;
    });

    md += `\n---\n\n## 3. 🚨 Mistake Tracker Log (Codes A - K)\n\n`;
    state.mistakeLogs.forEach((m) => {
      const fixed = m.isFixed ? '[x]' : '[ ]';
      md += `- ${fixed} **[Code ${m.mistakeCode}] ${m.subjectCode} - ${m.topic}**: ${m.questionText}\n`;
      md += `  - *Why Failed:* ${m.whyIFailed}\n`;
      md += `  - *Correct Action:* ${m.correctionAction}\n`;
    });

    return md;
  };

  // Level progression formula
  const calculateUserLevel = (xp: number) => {
    const levels = [
      { num: 1, title: 'Level 1: CSIT Recruit', minXp: 0, nextXp: 300 },
      { num: 2, title: 'Level 2: Code Apprentice', minXp: 300, nextXp: 700 },
      { num: 3, title: 'Level 3: Problem Solver', minXp: 700, nextXp: 1300 },
      { num: 4, title: 'Level 4: OOP Builder', minXp: 1300, nextXp: 2100 },
      { num: 5, title: 'Level 5: System Thinker', minXp: 2100, nextXp: 3100 },
      { num: 6, title: 'Level 6: CS Explorer', minXp: 3100, nextXp: 4300 },
      { num: 7, title: 'Level 7: Project Builder', minXp: 4300, nextXp: 5800 },
      { num: 8, title: 'Level 8: Winter Arc Complete', minXp: 5800, nextXp: 10000 }
    ];

    let current = levels[0];
    for (let i = levels.length - 1; i >= 0; i--) {
      if (xp >= levels[i].minXp) {
        current = levels[i];
        break;
      }
    }

    const range = current.nextXp - current.minXp;
    const progressInLevel = Math.max(0, xp - current.minXp);
    const progressPercent = Math.min(100, Math.round((progressInLevel / range) * 100));

    return {
      levelNumber: current.num,
      title: current.title,
      currentXp: xp,
      nextLevelXp: current.nextXp,
      progressPercent
    };
  };

  const userLevel = calculateUserLevel(state.userXp);
  const completedDaysCount = state.dayPlans.filter((p) => p.completed).length;
  const overallProgressPercent = Math.round((completedDaysCount / 45) * 100);

  const todayLogs = state.habitLogs[state.currentDay] || {};
  const activeHabitCountToday = Object.values(todayLogs).filter(Boolean).length;

  return (
    <WorkspaceContext.Provider
      value={{
        state,
        currentDay: state.currentDay,
        setCurrentDay,
        setEnergyMode,
        toggleDayCompletion,
        toggleHabit,
        toggleTopic,
        togglePyq,
        addMistake,
        toggleMistakeFixed,
        deleteMistake,
        addAiDependencyLog,
        toggleProjectComplete,
        toggleQuestComplete,
        toggleBossBattleComplete,
        addNote,
        updateNote,
        deleteNote,
        logStudyMinutes,
        resetAllProgress,
        exportToNotionMarkdown,
        exportStateJson,
        importStateJson,
        userLevel,
        overallProgressPercent,
        activeHabitCountToday
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};

export const useWorkspace = () => {
  const context = useContext(WorkspaceContext);
  if (!context) {
    throw new Error('useWorkspace must be used within WorkspaceProvider');
  }
  return context;
};
