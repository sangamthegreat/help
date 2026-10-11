import React, { useState } from 'react';
import {
  CheckCircle2,
  Circle,
  Search,
  Target,
  BookOpenCheck
} from 'lucide-react';
import { useWorkspace } from '../context/WorkspaceContext';
import { CSIT_SUBJECTS } from '../data/csitSyllabusData';
import { SubjectCode } from '../types';
import { ActiveTab } from './Sidebar';

interface RoadmapViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  setSelectedSubject: (subj: SubjectCode) => void;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({
  setActiveTab,
  setSelectedSubject,
}) => {
  const { state, currentDay, setCurrentDay, toggleDayCompletion } = useWorkspace();
  const [selectedPhase, setSelectedPhase] = useState<number | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedDay, setExpandedDay] = useState<number | null>(currentDay);

  const filteredPlans = state.dayPlans.filter((plan) => {
    if (selectedPhase !== 'ALL' && plan.phase !== selectedPhase) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTheme = plan.theme.toLowerCase().includes(q);
      const matchChallenge = plan.dailyChallenge.toLowerCase().includes(q);
      const matchSubject = plan.subjects.some(
        (s) =>
          s.subjectCode.toLowerCase().includes(q) ||
          s.topic.toLowerCase().includes(q) ||
          s.tuPyqTarget.toLowerCase().includes(q)
      );
      return matchTheme || matchChallenge || matchSubject;
    }
    return true;
  });

  const completedCount = state.dayPlans.filter((p) => p.completed).length;

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl bg-[#14161b] border border-[#22252e]">
        <div>
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span className="text-cyan-400 font-medium">45-Day Master Plan</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Complete 5-Phase TU Coverage</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white mt-1">Semester II Syllabus & Exam Roadmap</h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            Phased mastery from foundations to past paper drills, weak-topic repair, and final mock exams.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-xs text-neutral-400">Total Completion</div>
            <div className="text-base font-bold font-mono text-cyan-400 tabular-nums">
              {completedCount} / 45 Days
            </div>
          </div>
          <div className="w-12 h-12 rounded-lg border border-[#2a2d38] flex items-center justify-center font-mono font-bold text-xs text-white bg-[#101115] tabular-nums">
            {Math.round((completedCount / 45) * 100)}%
          </div>
        </div>
      </div>

      {/* Filters & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Phase Filter Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto p-1 rounded-lg bg-[#14161b] border border-[#22252e] text-xs">
          <button
            onClick={() => setSelectedPhase('ALL')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors shrink-0 ${
              selectedPhase === 'ALL'
                ? 'bg-[#282b35] text-white font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            All 45 Days
          </button>
          {[1, 2, 3, 4, 5].map((ph) => (
            <button
              key={ph}
              onClick={() => setSelectedPhase(ph)}
              className={`px-2.5 py-1.5 rounded-md font-medium transition-colors shrink-0 ${
                selectedPhase === ph
                  ? 'bg-[#282b35] text-white font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Phase {ph}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search topic, subject or day..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#14161b] border border-[#22252e] rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-cyan-500 transition-colors"
          />
        </div>
      </div>

      {/* Days List */}
      <div className="space-y-3">
        {filteredPlans.length === 0 ? (
          <div className="p-8 text-center rounded-xl bg-[#14161b] border border-[#22252e] text-neutral-400 text-xs">
            No days matched your search criteria.
          </div>
        ) : (
          filteredPlans.map((plan) => {
            const isCurrent = plan.day === currentDay;
            const isExpanded = expandedDay === plan.day;

            return (
              <div
                key={plan.day}
                className={`rounded-xl border transition-all ${
                  isCurrent
                    ? 'bg-[#181b22] border-cyan-500/40 shadow-xs'
                    : plan.completed
                    ? 'bg-[#141716] border-emerald-500/20'
                    : 'bg-[#14161b] border-[#22252e] hover:border-[#2f323e]'
                }`}
              >
                {/* Header Row */}
                <div
                  className="p-4 flex items-center justify-between cursor-pointer select-none"
                  onClick={() => setExpandedDay(isExpanded ? null : plan.day)}
                >
                  <div className="flex items-center gap-3">
                    {/* Completion Checkbox */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDayCompletion(plan.day);
                      }}
                      className="text-neutral-500 hover:text-white transition-colors"
                      title={plan.completed ? 'Mark incomplete' : 'Mark complete'}
                    >
                      {plan.completed ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <Circle className="w-5 h-5 text-neutral-600 hover:text-neutral-400" />
                      )}
                    </button>

                    <div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-mono font-semibold text-neutral-300 tabular-nums">
                          DAY {plan.day}
                        </span>
                        <span aria-hidden="true" className="text-neutral-600">·</span>
                        <span className="text-neutral-400 font-mono">
                          {plan.phaseName.split(':')[0]}
                        </span>
                        {isCurrent && (
                          <span className="text-[10px] text-cyan-400 font-mono font-semibold">
                            (CURRENT)
                          </span>
                        )}
                      </div>
                      <div
                        className={`text-sm font-semibold mt-0.5 ${
                          plan.completed
                            ? 'line-through text-neutral-500'
                            : 'text-neutral-100'
                        }`}
                      >
                        {plan.theme}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    {/* Subject indicators */}
                    <div className="hidden sm:flex items-center gap-2">
                      {plan.subjects.map((s, idx) => {
                        const fullSubj = CSIT_SUBJECTS.find((sub) => sub.code === s.subjectCode);
                        return (
                          <span
                            key={idx}
                            className="text-[11px] font-mono flex items-center gap-1 text-neutral-400"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: fullSubj?.color || '#3b82f6' }}
                            />
                            <span>{s.subjectCode}</span>
                          </span>
                        );
                      })}
                    </div>

                    <span className="text-xs text-neutral-400 font-mono hidden md:inline tabular-nums">
                      {plan.targetHours[state.energyMode]}h target
                    </span>

                    <span className="text-xs text-neutral-500">
                      {isExpanded ? '▲' : '▼'}
                    </span>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-2 border-t border-[#1f222a] space-y-3 text-xs">
                    {/* Daily Challenge */}
                    <div className="p-3 rounded-lg bg-[#181a20] border border-[#252832] flex items-start justify-between gap-3">
                      <div className="flex items-start gap-2.5">
                        <Target className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-white">Daily Target Mission: </span>
                          <span className="text-neutral-300">{plan.dailyChallenge}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setCurrentDay(plan.day);
                          setActiveTab('daily-study');
                        }}
                        className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs transition-colors shrink-0 flex items-center gap-1.5 shadow-xs"
                      >
                        <BookOpenCheck className="w-3.5 h-3.5" />
                        <span>Open 3-Block Study</span>
                      </button>
                    </div>

                    {/* Subjects breakdown */}
                    <div className="space-y-2">
                      <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                        Syllabus Units & Past Year Target
                      </div>
                      {plan.subjects.map((subj, idx) => {
                        const fullSubj = CSIT_SUBJECTS.find((s) => s.code === subj.subjectCode);
                        return (
                          <div
                            key={idx}
                            className="p-3 rounded-lg bg-[#181a20] border border-[#252832] space-y-1.5"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span
                                  className="w-2 h-2 rounded-full"
                                  style={{ backgroundColor: fullSubj?.color || '#3b82f6' }}
                                />
                                <span className="font-mono text-xs font-semibold text-neutral-200">
                                  {subj.subjectCode}
                                </span>
                                <span className="font-medium text-white text-xs">
                                  Unit {subj.unit}: {fullSubj?.units.find((u) => u.unitNumber === subj.unit)?.title || fullSubj?.alias}
                                </span>
                              </div>
                              <span className="font-mono text-cyan-400 text-[11px]">
                                {subj.topic}
                              </span>
                            </div>

                            <p className="text-neutral-400 leading-relaxed text-xs">
                              {subj.theory.whatIsIt}
                            </p>

                            <div className="pt-1 flex items-center justify-between text-[11px]">
                              <div className="flex items-center gap-1.5 text-neutral-300 truncate mr-2">
                                <span className="text-amber-400 font-semibold shrink-0 font-mono">TU Target:</span>
                                <span className="truncate">{subj.tuPyqTarget}</span>
                              </div>

                              <div className="flex items-center gap-2 shrink-0">
                                <button
                                  onClick={() => {
                                    setSelectedSubject(subj.subjectCode);
                                    setActiveTab('subjects');
                                  }}
                                  className="text-neutral-400 hover:text-white flex items-center gap-1 font-medium"
                                >
                                  Syllabus
                                </button>
                                <span className="text-neutral-600" aria-hidden="true">·</span>
                                <button
                                  onClick={() => {
                                    setSelectedSubject(subj.subjectCode);
                                    setActiveTab('pyq-bank');
                                  }}
                                  className="text-cyan-400 hover:underline flex items-center gap-1 font-medium"
                                >
                                  Past Papers →
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
