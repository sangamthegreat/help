import React from 'react';
import {
  CheckCircle2,
  Calendar,
  Flame,
  ArrowRight,
  Target,
  BookOpenCheck,
  Zap,
  BookOpen,
  Check,
  ChevronRight
} from 'lucide-react';
import { useWorkspace } from '../context/WorkspaceContext';
import { WINTER_ARC_HABITS } from '../data/habitsData';
import { CSIT_SUBJECTS } from '../data/csitSyllabusData';
import { ALL_PYQS } from '../data/pyqDatabase';
import { SubjectCode } from '../types';
import { ActiveTab } from './Sidebar';
import { SubjectStudyConfidenceVisualizer } from './SubjectStudyConfidenceVisualizer';

interface DashboardViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  setSelectedSubject: (subj: SubjectCode) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  setActiveTab,
  setSelectedSubject,
}) => {
  const {
    state,
    currentDay,
    setCurrentDay,
    toggleDayCompletion,
    toggleHabit,
    overallProgressPercent,
  } = useWorkspace();

  const todayPlan = state.dayPlans.find((p) => p.day === currentDay) || state.dayPlans[0];
  const todayHabits = state.habitLogs[currentDay] || {};

  const completedDaysCount = state.dayPlans.filter((p) => p.completed).length;
  const solvedPyqCount = Object.values(state.solvedPyqs).filter(Boolean).length;
  const totalPyqsCount = ALL_PYQS.length;

  const habitsDoneToday = Object.values(todayHabits).filter(Boolean).length;
  const habitCompletionRateToday = Math.round((habitsDoneToday / WINTER_ARC_HABITS.length) * 100);

  // Group days into 5 official phases
  const phases = [
    { num: 1, name: 'Phase 1: Foundation & Mapping', days: '1 - 10', range: [1, 10] },
    { num: 2, name: 'Phase 2: Complete Major Syllabus', days: '11 - 25', range: [11, 25] },
    { num: 3, name: 'Phase 3: Advanced & Past Questions', days: '26 - 35', range: [26, 35] },
    { num: 4, name: 'Phase 4: Full Revision & Weak Repair', days: '36 - 40', range: [36, 40] },
    { num: 5, name: 'Phase 5: Mock Exams & Readiness', days: '41 - 45', range: [41, 45] },
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      {/* Workspace Overview Header */}
      <div className="p-6 rounded-xl bg-[#14161b] border border-[#22252e]">
        {/* Unboxed Metadata Header */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400 mb-2">
          <span className="text-cyan-400 font-medium">Tribhuvan University</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span>BSc CSIT Semester II</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span className="font-mono tabular-nums">15 Credit Hours</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span className="text-neutral-300 font-medium">45-Day Sprint Protocol</span>
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight text-balance">
          Semester II Academic Workspace & Revision Command
        </h1>

        <p className="mt-2 text-xs sm:text-sm text-neutral-400 max-w-3xl leading-relaxed">
          Daily structured study plan across Discrete Structure (CSC165), Object-Oriented Programming (CSC166),
          Microprocessor (CSC167), Mathematics II (MTH168), and Statistics I (STA169).
        </p>

        {/* Quiet Daily Objective Lead */}
        <div className="mt-4 pt-3.5 border-t border-[#22252e] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-neutral-400 gap-2">
          <div className="flex items-center gap-2">
            <span className="text-neutral-500 font-mono">Day {currentDay} Focus:</span>
            <span className="text-neutral-200 italic font-serif">"{todayPlan.quote}"</span>
          </div>
          <div className="font-mono text-[11px] text-cyan-400 tabular-nums shrink-0">
            {todayPlan.phaseName.split(':')[0]}
          </div>
        </div>
      </div>

      {/* 4 Core Vital Statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        {/* Metric 1 */}
        <div className="p-4 rounded-xl bg-[#14161b] border border-[#22252e]">
          <div className="flex items-center justify-between text-neutral-400 text-xs">
            <span>Roadmap Progress</span>
            <Calendar className="w-4 h-4 text-neutral-500" />
          </div>
          <div className="mt-2 flex items-baseline gap-1.5 font-mono">
            <span className="text-2xl font-bold text-white tabular-nums">{completedDaysCount}</span>
            <span className="text-xs text-neutral-500">/ 45 Days</span>
          </div>
          <div className="mt-3 w-full bg-[#1c1e26] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-cyan-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${overallProgressPercent}%` }}
            />
          </div>
          <div className="mt-1.5 text-[11px] text-neutral-400 text-right font-mono tabular-nums">
            {overallProgressPercent}% Completed
          </div>
        </div>

        {/* Metric 2 */}
        <div className="p-4 rounded-xl bg-[#14161b] border border-[#22252e]">
          <div className="flex items-center justify-between text-neutral-400 text-xs">
            <span>Today's Discipline</span>
            <Flame className="w-4 h-4 text-amber-500" />
          </div>
          <div className="mt-2 flex items-baseline gap-1.5 font-mono">
            <span className="text-2xl font-bold text-white tabular-nums">{habitsDoneToday}</span>
            <span className="text-xs text-neutral-500">/ 7 Habits</span>
          </div>
          <div className="mt-3 w-full bg-[#1c1e26] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-amber-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${habitCompletionRateToday}%` }}
            />
          </div>
          <div className="mt-1.5 text-[11px] text-neutral-400 text-right font-mono tabular-nums">
            {habitCompletionRateToday}% Rate Today
          </div>
        </div>

        {/* Metric 3 */}
        <div className="p-4 rounded-xl bg-[#14161b] border border-[#22252e]">
          <div className="flex items-center justify-between text-neutral-400 text-xs">
            <span>TU Past Papers Solved</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="mt-2 flex items-baseline gap-1.5 font-mono">
            <span className="text-2xl font-bold text-white tabular-nums">{solvedPyqCount}</span>
            <span className="text-xs text-neutral-500">/ {totalPyqsCount} Total</span>
          </div>
          <div className="mt-3 w-full bg-[#1c1e26] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-emerald-500 h-full rounded-full transition-all duration-300"
              style={{
                width: `${totalPyqsCount > 0 ? Math.round((solvedPyqCount / totalPyqsCount) * 100) : 0}%`,
              }}
            />
          </div>
          <div className="mt-1.5 text-[11px] text-neutral-400 text-right font-mono tabular-nums">
            {totalPyqsCount > 0 ? Math.round((solvedPyqCount / totalPyqsCount) * 100) : 0}% Mastered
          </div>
        </div>

        {/* Metric 4 */}
        <div className="p-4 rounded-xl bg-[#14161b] border border-[#22252e]">
          <div className="flex items-center justify-between text-neutral-400 text-xs">
            <span>Deep Work Logged</span>
            <Zap className="w-4 h-4 text-neutral-400" />
          </div>
          <div className="mt-2 flex items-baseline gap-1.5 font-mono">
            <span className="text-2xl font-bold text-white tabular-nums">
              {(state.totalStudyMinutes / 60).toFixed(1)}
            </span>
            <span className="text-xs text-neutral-500">Hours Focus</span>
          </div>
          <div className="mt-3 w-full bg-[#1c1e26] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-neutral-400 h-full rounded-full transition-all duration-300"
              style={{
                width: `${Math.min(100, Math.round((state.totalStudyMinutes / (45 * 4 * 60)) * 100))}%`,
              }}
            />
          </div>
          <div className="mt-1.5 text-[11px] text-neutral-400 text-right font-mono tabular-nums">
            Target: 4-6h Daily
          </div>
        </div>
      </div>

      {/* Main Focus: Today's Attack Plan & Disciplines */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2 Cols): Today's Syllabus Plan */}
        <div className="lg:col-span-2 space-y-4">
          <div className="p-5 rounded-xl bg-[#14161b] border border-[#22252e] space-y-4">
            {/* Header with Day Navigation */}
            <div className="flex items-center justify-between border-b border-[#22252e] pb-3.5">
              <div>
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <span className="font-mono text-cyan-400 font-semibold tabular-nums">DAY {currentDay}</span>
                  <span aria-hidden="true">·</span>
                  <span>{todayPlan.phaseName.split(':')[0]}</span>
                </div>
                <h2 className="text-sm sm:text-base font-semibold text-white mt-0.5">{todayPlan.theme}</h2>
              </div>

              {/* Day Selector Navigation */}
              <div className="flex items-center gap-1.5">
                <button
                  disabled={currentDay <= 1}
                  onClick={() => setCurrentDay(Math.max(1, currentDay - 1))}
                  className="px-2.5 py-1 text-xs rounded-md bg-[#1a1c22] hover:bg-[#22252e] text-neutral-300 border border-[#2a2d38] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  ← Prev
                </button>
                <span className="text-xs font-mono text-neutral-400 px-1.5 tabular-nums">
                  {currentDay} / 45
                </span>
                <button
                  disabled={currentDay >= 45}
                  onClick={() => setCurrentDay(Math.min(45, currentDay + 1))}
                  className="px-2.5 py-1 text-xs rounded-md bg-[#1a1c22] hover:bg-[#22252e] text-neutral-300 border border-[#2a2d38] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  Next →
                </button>
              </div>
            </div>

            {/* Daily Mission Callout */}
            <div className="p-3.5 rounded-lg bg-[#181a20] border border-[#262832] flex items-start gap-3">
              <Target className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-semibold text-neutral-200">Daily Mission</div>
                <div className="text-xs text-neutral-400 mt-0.5 leading-relaxed">{todayPlan.dailyChallenge}</div>
              </div>
            </div>

            {/* Subjects to study today */}
            <div className="space-y-3">
              <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider flex items-center justify-between">
                <span>Today's Syllabus Targets</span>
                <span className="text-[11px] text-neutral-400 font-mono tabular-nums">
                  Target: {todayPlan.targetHours[state.energyMode]}h ({state.energyMode.toUpperCase()})
                </span>
              </div>

              {todayPlan.subjects.map((subj, idx) => {
                const fullSubj = CSIT_SUBJECTS.find((s) => s.code === subj.subjectCode);
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-[#181a20] border border-[#252832] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: fullSubj?.color || '#3b82f6' }}
                        />
                        <span className="font-mono text-xs font-semibold text-neutral-200">
                          {subj.subjectCode}
                        </span>
                        <span className="text-xs text-neutral-400">
                          Unit {subj.unit}: {fullSubj?.units.find((u) => u.unitNumber === subj.unit)?.title || fullSubj?.alias}
                        </span>
                      </div>
                      <button
                        onClick={() => setActiveTab('daily-study')}
                        className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors font-medium"
                      >
                        <BookOpenCheck className="w-3.5 h-3.5" />
                        <span>Daily 3-Block Study →</span>
                      </button>
                    </div>

                    <div className="text-xs font-medium text-white mb-1">
                      {subj.topic}
                    </div>

                    <p className="text-xs text-neutral-400 mb-2.5 line-clamp-2 leading-relaxed">
                      {subj.theory.whatIsIt}
                    </p>

                    <div className="p-2.5 rounded bg-[#121317] border border-[#20222a] flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-neutral-400 truncate">
                        <span className="text-amber-400 font-semibold font-mono text-[11px]">TU PYQ:</span>
                        <span className="truncate text-neutral-300">{subj.tuPyqTarget}</span>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedSubject(subj.subjectCode);
                          setActiveTab('pyq-bank');
                        }}
                        className="text-cyan-400 hover:underline text-[11px] shrink-0 font-medium flex items-center gap-1 ml-2"
                      >
                        Past Papers
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Complete Day Checkbox Button */}
            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => toggleDayCompletion(currentDay)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${
                  todayPlan.completed
                    ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                    : 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-xs font-bold'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  {todayPlan.completed
                    ? 'Day Completed (Click to Undo)'
                    : 'Mark Day Complete & Claim 150 XP'}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('daily-study')}
                className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>Full 3-Block Study View</span>
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column (1 Col): Today's 7 Habits Quick Check */}
        <div className="space-y-4">
          <div className="p-5 rounded-xl bg-[#14161b] border border-[#22252e] space-y-4">
            <div className="flex items-center justify-between border-b border-[#22252e] pb-3">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-500" />
                <h3 className="text-sm font-semibold text-white">Daily Disciplines</h3>
              </div>
              <span className="text-xs font-mono text-cyan-400 tabular-nums">
                {habitsDoneToday} / {WINTER_ARC_HABITS.length}
              </span>
            </div>

            <div className="space-y-1.5">
              {WINTER_ARC_HABITS.map((habit) => {
                const isChecked = !!todayHabits[habit.id];
                return (
                  <div
                    key={habit.id}
                    onClick={() => toggleHabit(currentDay, habit.id)}
                    className={`p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between text-xs ${
                      isChecked
                        ? 'bg-emerald-950/20 border-emerald-500/30 text-neutral-300'
                        : 'bg-[#181a20] border-[#252832] text-neutral-400 hover:text-neutral-200 hover:border-[#30333f]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-sm">{habit.emoji}</span>
                      <span className={`truncate ${isChecked ? 'line-through text-neutral-500' : 'font-medium'}`}>
                        {habit.name}
                      </span>
                    </div>

                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                        isChecked
                          ? 'bg-emerald-500 border-emerald-500 text-black'
                          : 'border-[#3a3d49]'
                      }`}
                    >
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => setActiveTab('habits')}
              className="w-full text-center py-2 rounded-lg bg-[#1a1c22] hover:bg-[#22252e] text-xs text-neutral-300 font-medium transition-colors border border-[#2a2d38]"
            >
              View 45-Day Habit Matrix →
            </button>
          </div>

          {/* Quick Focus Study Session Starter */}
          <div className="p-4 rounded-xl bg-[#14161b] border border-[#22252e] flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-white">Deep Work Block</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">
                90-Minute focused study with ambient synthesizer
              </div>
            </div>
            <button
              onClick={() => setActiveTab('timer')}
              className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs transition-colors shadow-xs"
            >
              Start Timer
            </button>
          </div>
        </div>
      </div>

      {/* Recharts Data Visualization: Study Hours vs Learning Confidence (Last 7 Days) */}
      <SubjectStudyConfidenceVisualizer />

      {/* 5 CSIT 2nd Sem Subjects Syllabus Quick Access */}
      <div className="p-5 rounded-xl bg-[#14161b] border border-[#22252e] space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white">BSc CSIT Semester II Syllabus Modules</h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              5 Courses (15 Total Credit Hours) · Comprehensive TU Examination Curriculum
            </p>
          </div>
          <button
            onClick={() => setActiveTab('subjects')}
            className="text-xs text-cyan-400 hover:underline flex items-center gap-1 font-medium"
          >
            Open Full Subject Syllabus Hub
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
          {CSIT_SUBJECTS.map((subj) => (
            <div
              key={subj.code}
              onClick={() => {
                setSelectedSubject(subj.code);
                setActiveTab('subjects');
              }}
              className="p-3.5 rounded-lg bg-[#181a20] border border-[#252832] hover:border-[#383c4a] transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: subj.color }}
                    />
                    <span className="text-xs font-mono font-semibold text-neutral-200">
                      {subj.code}
                    </span>
                  </div>
                  <span className="text-[10px] text-neutral-500 font-mono">3 Cr</span>
                </div>
                <h4 className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {subj.alias}
                </h4>
                <div className="text-[11px] text-neutral-400 mt-1 line-clamp-2 leading-relaxed">
                  {subj.name}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#22252e] flex items-center justify-between text-[11px] text-neutral-400">
                <span className="font-mono tabular-nums">{subj.units.length} Units</span>
                <span className="group-hover:translate-x-0.5 transition-transform text-cyan-400 font-medium flex items-center gap-0.5">
                  Explore →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 45-Day 5-Phase Roadmap Summary Cards */}
      <div className="p-5 rounded-xl bg-[#14161b] border border-[#22252e] space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white">45-Day Sprint Roadmap Phases</h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              Five structured phases from initial theory to board exam readiness
            </p>
          </div>
          <button
            onClick={() => setActiveTab('roadmap')}
            className="text-xs text-cyan-400 hover:underline flex items-center gap-1 font-medium"
          >
            View Complete 45-Day List
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {phases.map((ph) => {
            const phaseDays = state.dayPlans.filter(
              (p) => p.day >= ph.range[0] && p.day <= ph.range[1]
            );
            const doneInPhase = phaseDays.filter((p) => p.completed).length;
            const pct = phaseDays.length > 0 ? Math.round((doneInPhase / phaseDays.length) * 100) : 0;

            return (
              <div
                key={ph.num}
                onClick={() => setActiveTab('roadmap')}
                className="p-3.5 rounded-lg bg-[#181a20] border border-[#252832] hover:border-[#383c4a] transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-medium text-neutral-300">Phase {ph.num}</span>
                  <span className="font-mono text-cyan-400 text-[11px] tabular-nums">Days {ph.days}</span>
                </div>
                <div className="text-xs font-semibold text-white mb-2 line-clamp-1">{ph.name}</div>
                <div className="w-full bg-[#101115] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-cyan-500 h-full rounded-full transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <div className="mt-1.5 text-[10px] text-neutral-400 flex items-center justify-between font-mono tabular-nums">
                  <span>{doneInPhase}/{phaseDays.length} Days</span>
                  <span>{pct}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
