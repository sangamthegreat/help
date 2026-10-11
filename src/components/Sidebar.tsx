import React from 'react';
import {
  LayoutDashboard,
  CalendarDays,
  BookOpenCheck,
  CheckSquare,
  BookOpen,
  FileQuestion,
  AlertOctagon,
  Bot,
  Hammer,
  Compass,
  Timer,
  FileText,
  Flame,
  Download,
  ChevronRight,
  ShieldCheck,
  Layers
} from 'lucide-react';
import { useWorkspace } from '../context/WorkspaceContext';
import { CSIT_SUBJECTS } from '../data/csitSyllabusData';
import { SubjectCode } from '../types';

export type ActiveTab =
  | 'dashboard'
  | 'daily-study'
  | 'roadmap'
  | 'habits'
  | 'subjects'
  | 'pyq-bank'
  | 'mistakes'
  | 'ai-control'
  | 'projects-quests'
  | 'cs-exploration'
  | 'timer'
  | 'notion-arch';

interface SidebarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  selectedSubject: SubjectCode;
  setSelectedSubject: (subj: SubjectCode) => void;
  onOpenExport: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  selectedSubject,
  setSelectedSubject,
  onOpenExport,
  isOpen,
  setIsOpen,
}) => {
  const { state, userLevel, overallProgressPercent } = useWorkspace();

  const primaryNav = [
    { id: 'dashboard' as ActiveTab, label: 'Arc Dashboard', icon: LayoutDashboard },
    { id: 'daily-study' as ActiveTab, label: 'Daily 3-Block Study', icon: BookOpenCheck, badge: `Day ${state.currentDay}` },
    { id: 'roadmap' as ActiveTab, label: '45-Day Master Plan', icon: CalendarDays },
    { id: 'habits' as ActiveTab, label: 'Habit Matrix (7 Rules)', icon: CheckSquare },
  ];

  const academicNav = [
    { id: 'subjects' as ActiveTab, label: 'Semester II Hub', icon: BookOpen },
    { id: 'pyq-bank' as ActiveTab, label: '5-Year PYQ Bank', icon: FileQuestion },
    { id: 'mistakes' as ActiveTab, label: 'Mistake Repository', icon: AlertOctagon, badge: state.mistakeLogs.length > 0 ? String(state.mistakeLogs.length) : undefined },
  ];

  const skillNav = [
    { id: 'ai-control' as ActiveTab, label: 'AI Dependency Control', icon: Bot },
    { id: 'projects-quests' as ActiveTab, label: 'Projects & Quests', icon: Hammer, badge: `${state.sideQuests.filter(q => q.completed).length}/14` },
    { id: 'cs-exploration' as ActiveTab, label: 'CS Exploration Trees', icon: Compass },
    { id: 'timer' as ActiveTab, label: 'Deep Work Timer', icon: Timer },
    { id: 'notion-arch' as ActiveTab, label: 'Notion Workspace Export', icon: FileText },
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-xs z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-40 w-64 bg-[#111215] border-r border-[#22242a] flex flex-col transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Workspace Brand / Header */}
        <div className="p-4 border-b border-[#22242a]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#1a1c23] border border-[#2c303c] flex items-center justify-center text-cyan-400 font-semibold text-sm">
              <Layers className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-xs font-semibold text-white tracking-wide truncate">
                CSIT Winter Arc OS
              </h1>
              <div className="flex items-center gap-1.5 text-[11px] text-neutral-400">
                <span>TU Semester II</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">15 Cr</span>
              </div>
            </div>
          </div>

          {/* Student Status Card */}
          <div className="mt-3.5 p-2.5 rounded-lg bg-[#16181d] border border-[#252832] space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-neutral-200 truncate">
                {userLevel.title}
              </span>
              <span className="font-mono text-[11px] text-cyan-400 tabular-nums">
                {state.userXp} XP
              </span>
            </div>
            <div className="w-full bg-[#0d0e11] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-cyan-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${userLevel.progressPercent}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[10px] text-neutral-400 font-mono">
              <span className="tabular-nums">Sprint Progress: {overallProgressPercent}%</span>
              <span className="flex items-center gap-1 text-amber-400 tabular-nums">
                <Flame className="w-3 h-3 fill-amber-400" />
                {state.currentStreak}d Streak
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="flex-1 overflow-y-auto px-2 py-3 space-y-4 text-xs">
          {/* Core Daily */}
          <div className="space-y-0.5">
            <div className="px-2 pb-1 text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">
              Core Daily System
            </div>
            {primaryNav.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md transition-all text-left ${
                    isActive
                      ? 'bg-[#1e2027] text-white font-medium border-l-2 border-cyan-400 pl-2'
                      : 'text-neutral-400 hover:bg-[#181a20] hover:text-neutral-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-cyan-400' : 'text-neutral-500'}`} />
                    <span className="truncate">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="text-[10px] font-mono tabular-nums text-neutral-400">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Academics & Past Questions */}
          <div className="space-y-0.5">
            <div className="px-2 pb-1 text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">
              Academics & Papers
            </div>
            {academicNav.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md transition-all text-left ${
                    isActive
                      ? 'bg-[#1e2027] text-white font-medium border-l-2 border-cyan-400 pl-2'
                      : 'text-neutral-400 hover:bg-[#181a20] hover:text-neutral-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-cyan-400' : 'text-neutral-500'}`} />
                    <span className="truncate">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="text-[10px] font-mono tabular-nums text-amber-400">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Programming & Skills */}
          <div className="space-y-0.5">
            <div className="px-2 pb-1 text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">
              Engineering Lab
            </div>
            {skillNav.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md transition-all text-left ${
                    isActive
                      ? 'bg-[#1e2027] text-white font-medium border-l-2 border-cyan-400 pl-2'
                      : 'text-neutral-400 hover:bg-[#181a20] hover:text-neutral-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-cyan-400' : 'text-neutral-500'}`} />
                    <span className="truncate">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="text-[10px] font-mono tabular-nums text-neutral-400">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Subject Shortcuts */}
          <div className="space-y-0.5 pt-1">
            <div className="px-2 pb-1 text-[10px] font-semibold text-neutral-400 uppercase tracking-wider flex items-center justify-between">
              <span>TU Syllabus</span>
              <span className="text-neutral-500 font-mono">5 Courses</span>
            </div>
            {CSIT_SUBJECTS.map((subj) => (
              <button
                key={subj.code}
                onClick={() => {
                  setSelectedSubject(subj.code);
                  setActiveTab('subjects');
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-between px-2 py-1 rounded text-[11px] text-neutral-400 hover:bg-[#181a20] hover:text-neutral-200 transition-colors"
              >
                <div className="flex items-center gap-2 truncate">
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: subj.color }}
                  />
                  <span className="font-mono text-neutral-300">{subj.code}</span>
                  <span className="truncate text-neutral-400">{subj.alias}</span>
                </div>
                <ChevronRight className="w-3 h-3 text-neutral-600" />
              </button>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-3 border-t border-[#22242a] bg-[#111215] space-y-2">
          <button
            onClick={onOpenExport}
            className="w-full flex items-center justify-center gap-2 px-3 py-1.5 rounded-md bg-[#1a1c22] hover:bg-[#22252e] text-neutral-200 text-xs font-medium border border-[#2a2d38] transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>Export & Backup</span>
          </button>
          <div className="text-center text-[10px] text-neutral-400 flex items-center justify-center gap-1.5 font-mono">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>Tribhuvan University Curriculum</span>
          </div>
        </div>
      </aside>
    </>
  );
};
