import React from 'react';
import {
  Menu,
  Timer,
  Calendar,
  Share2,
  ChevronDown
} from 'lucide-react';
import { useWorkspace } from '../context/WorkspaceContext';
import { ActiveTab } from './Sidebar';
import { EnergyMode } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onToggleSidebar: () => void;
  onOpenExport: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onToggleSidebar,
  onOpenExport,
}) => {
  const {
    state,
    setCurrentDay,
    setEnergyMode
  } = useWorkspace();

  const getPageTitle = () => {
    switch (activeTab) {
      case 'dashboard':
        return 'Overview Dashboard';
      case 'daily-study':
        return 'Daily 3-Block Study System';
      case 'roadmap':
        return '45-Day Master Plan';
      case 'habits':
        return 'Daily Habit Matrix';
      case 'subjects':
        return 'Semester II Course Syllabus';
      case 'pyq-bank':
        return '5-Year Past Examination Papers';
      case 'mistakes':
        return 'Mistake Tracker & Analysis';
      case 'ai-control':
        return 'AI Dependency Control Protocol';
      case 'projects-quests':
        return 'Practical Projects & Quests';
      case 'cs-exploration':
        return 'CS Career Exploration Trees';
      case 'timer':
        return 'Deep Work Focus Timer';
      case 'notion-arch':
        return 'Notion OS & Template Export';
    }
  };

  return (
    <header className="sticky top-0 z-20 h-13 bg-[#111215]/95 backdrop-blur-md border-b border-[#22242a] px-4 sm:px-6 flex items-center justify-between">
      {/* Zone 1: Mobile toggle & Breadcrumb */}
      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
        <button
          onClick={onToggleSidebar}
          className="p-1 rounded-md hover:bg-[#1c1e25] text-neutral-400 hover:text-white lg:hidden"
          title="Toggle Navigation"
        >
          <Menu className="w-5 h-5" />
        </button>

        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs">
          <span className="text-neutral-400 hidden sm:inline">Winter Arc</span>
          <span className="text-neutral-600 hidden sm:inline" aria-hidden="true">/</span>
          <span className="text-white font-medium truncate">
            {getPageTitle()}
          </span>
        </nav>
      </div>

      {/* Zone 2: Energy Mode Segmented Control */}
      <div className="hidden md:flex items-center gap-1 p-0.5 rounded-lg bg-[#181a20] border border-[#252832] text-xs">
        <span className="text-neutral-400 px-2 py-0.5 text-[11px] font-medium">Energy Mode:</span>
        {(['minimum', 'normal', 'high'] as EnergyMode[]).map((mode) => {
          const isActive = state.energyMode === mode;
          const label = mode === 'minimum' ? 'Min 2-3h' : mode === 'normal' ? 'Norm 4-6h' : 'High 6-8h';
          return (
            <button
              key={mode}
              onClick={() => setEnergyMode(mode)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-mono tabular-nums transition-colors whitespace-nowrap ${
                isActive
                  ? 'bg-[#282b35] text-white font-semibold shadow-xs'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Zone 3: Primary Actions (Day Selector, Timer, Export) */}
      <div className="flex items-center gap-2">
        {/* Quick Day Selector dropdown */}
        <div className="relative flex items-center bg-[#181a20] border border-[#252832] rounded-lg px-2.5 py-1 text-xs">
          <Calendar className="w-3.5 h-3.5 text-cyan-400 mr-1.5 shrink-0" />
          <select
            value={state.currentDay}
            onChange={(e) => setCurrentDay(Number(e.target.value))}
            className="bg-transparent text-white font-mono font-medium focus:outline-hidden cursor-pointer text-xs pr-4 appearance-none"
          >
            {Array.from({ length: 45 }, (_, i) => i + 1).map((d) => {
              const plan = state.dayPlans.find((p) => p.day === d);
              return (
                <option key={d} value={d} className="bg-[#181a20] text-white">
                  Day {d} {plan?.completed ? '✓' : ''}
                </option>
              );
            })}
          </select>
          <ChevronDown className="w-3 h-3 text-neutral-500 absolute right-2 pointer-events-none" />
        </div>

        {/* Focus Timer Launch Button */}
        <button
          onClick={() => setActiveTab('timer')}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#181a20] hover:bg-[#20232b] text-neutral-200 border border-[#252832] text-xs font-medium transition-colors"
        >
          <Timer className="w-3.5 h-3.5 text-cyan-400" />
          <span>Timer</span>
        </button>

        {/* Share / Export */}
        <button
          onClick={onOpenExport}
          className="p-1.5 sm:px-3 sm:py-1 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Export</span>
        </button>
      </div>
    </header>
  );
};
