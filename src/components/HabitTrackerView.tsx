import React, { useState } from 'react';
import {
  CheckSquare,
  Flame,
  Award,
  Calendar,
  Sparkles,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { useWorkspace } from '../context/WorkspaceContext';
import { WINTER_ARC_HABITS } from '../data/habitsData';

export const HabitTrackerView: React.FC = () => {
  const { state, currentDay, setCurrentDay, toggleHabit } = useWorkspace();
  const [viewMode, setViewMode] = useState<'matrix' | 'cards' | 'heatmap'>('matrix');

  // Calculate statistics
  let totalHabitChecks = 0;
  const maxPossibleChecks = 40 * WINTER_ARC_HABITS.length;

  for (let d = 1; d <= 40; d++) {
    const dayLogs = state.habitLogs[d] || {};
    WINTER_ARC_HABITS.forEach((h) => {
      if (dayLogs[h.id]) totalHabitChecks++;
    });
  }

  const overallHabitPercent = Math.round((totalHabitChecks / maxPossibleChecks) * 100);

  // Compute habit streaks
  const habitStats = WINTER_ARC_HABITS.map((h) => {
    let completedCount = 0;
    for (let d = 1; d <= 40; d++) {
      if (state.habitLogs[d]?.[h.id]) completedCount++;
    }
    return {
      ...h,
      completedDays: completedCount,
      percent: Math.round((completedCount / 40) * 100),
    };
  });

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      {/* Header Banner */}
      <div className="p-5 rounded-xl bg-[#202020] border border-[#2e2e2e] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
              WINTER ARC DISCIPLINE MATRIX
            </span>
            <span className="text-xs text-neutral-400">• 7 Core Non-Negotiables</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1">40-Day Habit & Routine Tracker</h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            Consistency is the only bridge between the syllabus and top exam distinction.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-3 rounded-lg bg-[#272727] border border-[#333333] text-right">
            <div className="text-[11px] text-neutral-400">Total Checks</div>
            <div className="text-sm font-mono font-bold text-amber-400">
              {totalHabitChecks} / {maxPossibleChecks} ({overallHabitPercent}%)
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#272727] border border-[#333333] text-right">
            <div className="text-[11px] text-neutral-400">Current Day</div>
            <div className="text-sm font-mono font-bold text-cyan-400">Day {currentDay}</div>
          </div>
        </div>
      </div>

      {/* View Switcher */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 p-1 rounded-lg bg-[#202020] border border-[#2e2e2e] text-xs">
          <button
            onClick={() => setViewMode('matrix')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              viewMode === 'matrix'
                ? 'bg-amber-500 text-black font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            📋 Notion Matrix Table
          </button>
          <button
            onClick={() => setViewMode('cards')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              viewMode === 'cards'
                ? 'bg-amber-500 text-black font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            ⚡ Daily Habit Cards
          </button>
          <button
            onClick={() => setViewMode('heatmap')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              viewMode === 'heatmap'
                ? 'bg-amber-500 text-black font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            🔥 40-Day Heatmap
          </button>
        </div>

        <div className="text-xs text-neutral-400 font-mono hidden sm:inline">
          Tip: Click any checkbox to log habit for that day
        </div>
      </div>

      {/* VIEW 1: NOTION MATRIX TABLE */}
      {viewMode === 'matrix' && (
        <div className="rounded-xl border border-[#2e2e2e] bg-[#202020] overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#262626] border-b border-[#303030] text-neutral-300 font-mono">
                  <th className="p-3 sticky left-0 z-10 bg-[#262626] min-w-[220px] border-r border-[#333333]">
                    Winter Arc Habit
                  </th>
                  <th className="p-3 text-center min-w-[80px] border-r border-[#333333]">Target</th>
                  <th className="p-3 text-center min-w-[80px] border-r border-[#333333]">Done</th>
                  {Array.from({ length: 40 }, (_, i) => i + 1).map((day) => {
                    const isToday = day === currentDay;
                    return (
                      <th
                        key={day}
                        onClick={() => setCurrentDay(day)}
                        className={`p-2 text-center min-w-[38px] cursor-pointer transition-colors ${
                          isToday
                            ? 'bg-cyan-500/20 text-cyan-300 font-bold'
                            : 'hover:bg-[#2e2e2e] text-neutral-400'
                        }`}
                      >
                        <div className="text-[10px]">D</div>
                        <div>{day}</div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2a2a2a]">
                {habitStats.map((habit) => (
                  <tr key={habit.id} className="hover:bg-[#242424] transition-colors">
                    {/* Habit Name Column (Sticky left) */}
                    <td className="p-3 sticky left-0 z-10 bg-[#202020] border-r border-[#2e2e2e]">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{habit.emoji}</span>
                        <div className="truncate">
                          <div className="font-semibold text-neutral-200 truncate">{habit.name}</div>
                          <div className="text-[10px] text-neutral-400 capitalize">
                            {habit.category}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Target */}
                    <td className="p-2 text-center font-mono text-[11px] text-neutral-400 border-r border-[#2e2e2e]">
                      {habit.target}
                    </td>

                    {/* Completed rate */}
                    <td className="p-2 text-center font-mono text-xs font-semibold text-amber-400 border-r border-[#2e2e2e]">
                      {habit.completedDays}/40
                    </td>

                    {/* 40 Days Checkboxes */}
                    {Array.from({ length: 40 }, (_, i) => i + 1).map((day) => {
                      const isChecked = !!state.habitLogs[day]?.[habit.id];
                      const isToday = day === currentDay;

                      return (
                        <td
                          key={day}
                          className={`p-1.5 text-center ${
                            isToday ? 'bg-cyan-500/5' : ''
                          }`}
                        >
                          <button
                            onClick={() => toggleHabit(day, habit.id)}
                            className={`w-6 h-6 rounded flex items-center justify-center transition-all mx-auto ${
                              isChecked
                                ? 'bg-emerald-500 text-black font-bold shadow-xs'
                                : 'bg-[#2a2a2a] text-transparent hover:border-neutral-500 border border-[#383838]'
                            }`}
                            title={`Day ${day}: ${habit.name} (${isChecked ? 'Done' : 'Not done'})`}
                          >
                            ✓
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                ))}

                {/* Daily Total Summary Row */}
                <tr className="bg-[#242424] font-semibold text-neutral-300 font-mono">
                  <td className="p-3 sticky left-0 z-10 bg-[#242424] border-r border-[#2e2e2e]">
                    Daily Completion
                  </td>
                  <td className="p-2 text-center border-r border-[#2e2e2e]">-</td>
                  <td className="p-2 text-center text-amber-400 border-r border-[#2e2e2e]">
                    {overallHabitPercent}%
                  </td>
                  {Array.from({ length: 40 }, (_, i) => i + 1).map((day) => {
                    const count = Object.values(state.habitLogs[day] || {}).filter(Boolean).length;
                    const pct = Math.round((count / 7) * 100);
                    const isToday = day === currentDay;

                    return (
                      <td
                        key={day}
                        className={`p-1.5 text-center text-[10px] ${
                          isToday ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-neutral-400'
                        }`}
                      >
                        {count}/7
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* VIEW 2: DAILY HABIT CARDS */}
      {viewMode === 'cards' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-[#202020] border border-[#2e2e2e]">
            <span className="text-xs text-neutral-300">
              Showing active habits for <strong className="text-cyan-400 font-mono">Day {currentDay}</strong>
            </span>
            <div className="flex items-center gap-1.5">
              <button
                disabled={currentDay <= 1}
                onClick={() => setCurrentDay(Math.max(1, currentDay - 1))}
                className="px-2.5 py-1 rounded bg-[#292929] hover:bg-[#333333] text-xs text-neutral-300 disabled:opacity-40"
              >
                ← Prev
              </button>
              <button
                disabled={currentDay >= 40}
                onClick={() => setCurrentDay(Math.min(40, currentDay + 1))}
                className="px-2.5 py-1 rounded bg-[#292929] hover:bg-[#333333] text-xs text-neutral-300 disabled:opacity-40"
              >
                Next →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {WINTER_ARC_HABITS.map((habit) => {
              const isChecked = !!state.habitLogs[currentDay]?.[habit.id];

              return (
                <div
                  key={habit.id}
                  onClick={() => toggleHabit(currentDay, habit.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer select-none flex items-start gap-3.5 ${
                    isChecked
                      ? 'bg-[#1b2b23] border-emerald-500/40 shadow-xs'
                      : 'bg-[#202020] border-[#2e2e2e] hover:border-neutral-500'
                  }`}
                >
                  <div className="pt-0.5">
                    <div
                      className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                        isChecked
                          ? 'bg-emerald-500 border-emerald-400 text-black font-bold'
                          : 'border-neutral-500 bg-[#282828]'
                      }`}
                    >
                      {isChecked && '✓'}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3
                        className={`text-sm font-semibold ${
                          isChecked ? 'line-through text-neutral-400' : 'text-white'
                        }`}
                      >
                        {habit.emoji} {habit.name}
                      </h3>
                      <span className="text-xs font-mono font-medium text-cyan-400 bg-[#282828] px-2 py-0.5 rounded">
                        {habit.target}
                      </span>
                    </div>

                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                      {habit.description}
                    </p>

                    <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-400 border-t border-[#2e2e2e] pt-2">
                      <span className="capitalize">Category: {habit.category}</span>
                      <span className="text-amber-400 font-mono">
                        {habitStats.find((s) => s.id === habit.id)?.completedDays || 0}/40 Days
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW 3: 40-DAY HEATMAP */}
      {viewMode === 'heatmap' && (
        <div className="p-6 rounded-xl bg-[#202020] border border-[#2e2e2e] space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-white">40-Day Winter Arc Consistency Heatmap</h3>
              <p className="text-xs text-neutral-400 mt-0.5">
                Darker cyan indicates higher discipline adherence (up to 7/7 habits per day).
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-neutral-400">
              <span>0/7</span>
              <div className="w-3 h-3 rounded-xs bg-[#2a2a2a]" />
              <div className="w-3 h-3 rounded-xs bg-cyan-900" />
              <div className="w-3 h-3 rounded-xs bg-cyan-700" />
              <div className="w-3 h-3 rounded-xs bg-cyan-500" />
              <div className="w-3 h-3 rounded-xs bg-cyan-300" />
              <span>7/7</span>
            </div>
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2.5 pt-2">
            {Array.from({ length: 40 }, (_, i) => i + 1).map((day) => {
              const logs = state.habitLogs[day] || {};
              const count = Object.values(logs).filter(Boolean).length;
              const isToday = day === currentDay;

              // Color mapping
              let bg = 'bg-[#2a2a2a] text-neutral-400';
              if (count >= 7) bg = 'bg-cyan-400 text-black font-bold';
              else if (count >= 5) bg = 'bg-cyan-600 text-white font-medium';
              else if (count >= 3) bg = 'bg-cyan-800 text-neutral-200';
              else if (count >= 1) bg = 'bg-cyan-950 text-neutral-400';

              return (
                <div
                  key={day}
                  onClick={() => setCurrentDay(day)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all flex flex-col justify-between h-20 ${bg} ${
                    isToday ? 'ring-2 ring-amber-400 border-transparent shadow-lg' : 'border-[#333333]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span>Day {day}</span>
                    {isToday && <span>★</span>}
                  </div>
                  <div className="text-base font-bold text-center font-mono">{count}/7</div>
                  <div className="text-[10px] text-right opacity-80 font-mono">
                    {Math.round((count / 7) * 100)}%
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
