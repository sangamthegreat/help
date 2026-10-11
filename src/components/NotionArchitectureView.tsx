import React, { useState } from 'react';
import {
  FileText,
  Copy,
  Check,
  Database,
  Calendar,
  Sparkles,
  ArrowRight,
  BookOpen,
  Compass,
  Layers
} from 'lucide-react';
import { useWorkspace } from '../context/WorkspaceContext';

export const NotionArchitectureView: React.FC = () => {
  const { currentDay } = useWorkspace();
  const [copiedDaily, setCopiedDaily] = useState(false);
  const [copiedWeekly, setCopiedWeekly] = useState(false);
  const [copiedPostExam, setCopiedPostExam] = useState(false);

  const dailyPageTemplate = `DATE: 2026-10-05
DAY: Day ${currentDay} of 45
DAYS LEFT: ${45 - currentDay} Days

### TODAY'S MAIN TARGET
- Subject: [Select CSC165 / CSC166 / CSC167 / MTH168 / STA169]
- Unit: [Unit Number]
- Topic: [Topic Title]

---

### STUDY CHECKLIST
- [ ] Block 1: Learn Theory (What, Why, How, Where, Formulas, Mistakes)
- [ ] Make Short Notes (1-Page Summary)
- [ ] Block 2: Active Recall (Closed Notes Retrieval Drill)
- [ ] Block 3: Solve Practice Questions (Levels 1 to 4)

---

### QUESTIONS ATTEMPTED
- Level 1 Easy: [Question + Answered?]
- Level 2 Medium: [Question + Answered?]
- Level 3 Exam: [TU Board Past Question]
- Level 4 Challenge: [Unfamiliar problem]

---

### DAILY CODING HABIT (30–60 MINS)
- Task: [C++ OOP / 8085 Assembly Code]
- AI Dependency Check: [ ] Solved Independently without code generation

---

### SPACED REVISION
- Due today: [R0 / R1 / R2 / R3 / R4 / R5 Review]

---

### SIDE QUEST (OPTIONAL)
- Quest: [Side Quest title]

---

### END-OF-DAY REVIEW
- What did I learn today?
- What confused me or took too long?
- What mistakes did I make? (Classify Code A to K)
- Could I explain today's topic without notes? [Yes / Partially / No]
- What should I revise tomorrow morning?
- Study time: [X] hrs | Coding time: [X] mins | XP earned: +[X] XP`;

  const weeklyReviewTemplate = `## WEEKLY ACADEMIC & CSIT WINTER ARC REVIEW

### 1. Academic Performance:
- Topics completed this week: [Count]
- Questions attempted: [Count] | Questions correct: [Count]
- Weak chapters identified: [List]
- Past year TU questions solved: [Count]
- Weekly Boss Battle score: [Score / 100]

### 2. Programming & AI Dependency:
- Coding problems solved independently: [Count]
- Bugs fixed without AI: [Count]
- Mini-project status: [In Progress / Completed]
- AI Dependency self-rating: [1 to 10 - Lower is better]

### 3. Personal Habits & Discipline:
- Total focused study hours: [Hours]
- Average sleep duration: [Hours/night]
- Distraction audit: [Hours lost to social media / gaming]
- Consistency rating: [Excellent / Good / Needs Recovery]`;

  const postExamRoadmap = `# POST-EXAM LONG-TERM COMPUTER SCIENCE ROADMAP (SEMESTER III ONWARD)

### Stage 1: The Transition & Core Systems (Month 1 After Exams)
- **Data Structures and Algorithms (DSA) in C++**: Master pointers, Linked Lists, Binary Trees, Heaps, and Dynamic Programming.
- **Git & GitHub Discipline**: Branching, pull requests, merge conflict resolution, conventional commits.
- **Linux & Shell Mastery**: Bash scripting, process inspection, Vim/Neovim, systemd services.

### Stage 2: Applied Software Engineering & Specialization (Months 2–4)
- **Backend Engineering**: Build production REST and gRPC microservices in Go or Node.js.
- **Relational Databases (PostgreSQL)**: ACID transactions, indexing (B-Tree), query optimization, EXPLAIN ANALYZE.
- **Computer Networks & OS Deep Dive**: Socket programming in C++, TCP/IP packet tracing with Wireshark.

### Stage 3: Portfolio & Career Launch (Months 5–8)
- **Open Source Contributions**: Contribute documentation and bug fixes to real C++ or Go repositories.
- **Full-Stack Capstone Project**: Deploy a production-ready application with Docker, CI/CD, and cloud hosting.
- **Internship Preparation**: Resume building, LeetCode medium problem fluency, and technical interview simulations.`;

  const copyText = (text: string, type: 'daily' | 'weekly' | 'post') => {
    navigator.clipboard.writeText(text);
    if (type === 'daily') {
      setCopiedDaily(true);
      setTimeout(() => setCopiedDaily(false), 2000);
    } else if (type === 'weekly') {
      setCopiedWeekly(true);
      setTimeout(() => setCopiedWeekly(false), 2000);
    } else {
      setCopiedPostExam(true);
      setTimeout(() => setCopiedPostExam(false), 2000);
    }
  };

  const databases = [
    { name: '1. Dashboard', props: 'Tasks, Today\'s Subjects, XP, Current Level, Streak, Countdown, Weak Subject, Revision Due' },
    { name: '2. Subjects', props: 'Subject Name, Course Code (CSC165-STA169), Credits (3), Exam Marks (60/80), Progress %, Confidence, Priority' },
    { name: '3. Units', props: 'Unit Number, Subject, Hours, Topics List, Completion %, Confidence, Past Questions List' },
    { name: '4. Topics', props: 'Topic Title, Unit, Status (Not Started/Learning/Practicing/Exam Ready/Mastered), Difficulty, Revision Stage' },
    { name: '5. Question Bank', props: 'Question, Subject, Topic, Year, Source (Hamro/Easy), Marks, Difficulty (1-5), Type (15 types), Status' },
    { name: '6. Past Papers', props: 'Year (2078-2082), Subject, Section (A/B), Question Text, Marks, Solved Checkbox' },
    { name: '7. Mistake Log', props: 'Question, Topic, Mistake Code (A-K), Why Failed, Correction Action, Next Revision Date, Fixed?' },
    { name: '8. Study Sessions', props: 'Date, Subject, Duration, Focus Score (1-10), Understanding Score, Questions Solved, Notes' },
    { name: '9. Projects', props: 'Project Name, Level (1-5), Subject Connection, Skills, GitHub Repo, Demo, What I Learned' },
    { name: '10. Side Quests', props: 'Quest Title, Category, Difficulty, XP Reward, Status (Completed/Pending)' },
    { name: '11. CS Exploration', props: 'Field Name, What Is It, Prerequisites, Beginner Project, Tools, Resources, Career Roles' }
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16">
      {/* Header */}
      <div className="p-5 rounded-xl bg-[#202020] border border-[#2e2e2e] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
              NOTION OS SPECIFICATION & TEMPLATES
            </span>
            <span className="text-xs text-neutral-400">• Database Schemas</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1">Notion Architecture & Templates</h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            Interconnected Notion database architecture, daily page templates, and long-term post-exam CS roadmap.
          </p>
        </div>
      </div>

      {/* 11 Interconnected Notion Databases Schema */}
      <div className="p-5 rounded-xl bg-[#202020] border border-[#2e2e2e] space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[#2d2d2d]">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Database className="w-4 h-4 text-cyan-400" />
            The 11 Interconnected Notion Database Schemas:
          </h3>
          <span className="text-[11px] font-mono text-neutral-400">11 Relational Databases</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {databases.map((db, i) => (
            <div key={i} className="p-3.5 rounded-lg bg-[#252525] border border-[#303030] space-y-1">
              <div className="font-mono text-white font-bold">{db.name}</div>
              <div className="text-[11px] text-neutral-400 leading-relaxed">
                <strong className="text-neutral-300">Properties:</strong> {db.props}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Page Template Box */}
      <div className="p-5 rounded-xl bg-[#202020] border border-[#2e2e2e] space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-[#2d2d2d]">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <FileText className="w-4 h-4 text-amber-400" />
            Daily Notion Page Markdown Template:
          </h3>
          <button
            onClick={() => copyText(dailyPageTemplate, 'daily')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2b2b2b] hover:bg-[#353535] text-neutral-200 text-xs font-semibold border border-[#3a3a3a] transition-colors"
          >
            {copiedDaily ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedDaily ? 'Copied Template!' : 'Copy Daily Template'}</span>
          </button>
        </div>

        <pre className="p-4 rounded-lg bg-[#191919] border border-[#2b2b2b] text-[11px] font-mono text-neutral-200 overflow-x-auto whitespace-pre-wrap leading-relaxed">
          {dailyPageTemplate}
        </pre>
      </div>

      {/* Weekly Review Template Box */}
      <div className="p-5 rounded-xl bg-[#202020] border border-[#2e2e2e] space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-[#2d2d2d]">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Calendar className="w-4 h-4 text-purple-400" />
            7-Day Weekly Review Template:
          </h3>
          <button
            onClick={() => copyText(weeklyReviewTemplate, 'weekly')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2b2b2b] hover:bg-[#353535] text-neutral-200 text-xs font-semibold border border-[#3a3a3a] transition-colors"
          >
            {copiedWeekly ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedWeekly ? 'Copied Template!' : 'Copy Weekly Template'}</span>
          </button>
        </div>

        <pre className="p-4 rounded-lg bg-[#191919] border border-[#2b2b2b] text-[11px] font-mono text-neutral-200 overflow-x-auto whitespace-pre-wrap leading-relaxed">
          {weeklyReviewTemplate}
        </pre>
      </div>

      {/* Post-Exam Long-Term Roadmap Box */}
      <div className="p-5 rounded-xl bg-[#202020] border border-[#2e2e2e] space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-[#2d2d2d]">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Compass className="w-4 h-4 text-cyan-400" />
            Post-Exam CS Roadmap (Semester III to Graduation):
          </h3>
          <button
            onClick={() => copyText(postExamRoadmap, 'post')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2b2b2b] hover:bg-[#353535] text-neutral-200 text-xs font-semibold border border-[#3a3a3a] transition-colors"
          >
            {copiedPostExam ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedPostExam ? 'Copied Roadmap!' : 'Copy Post-Exam Roadmap'}</span>
          </button>
        </div>

        <pre className="p-4 rounded-lg bg-[#191919] border border-[#2b2b2b] text-[11px] font-mono text-neutral-200 overflow-x-auto whitespace-pre-wrap leading-relaxed">
          {postExamRoadmap}
        </pre>
      </div>
    </div>
  );
};
