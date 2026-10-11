import React, { useState } from 'react';
import {
  Hammer,
  Award,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Flame,
  Swords,
  Clock,
  Compass,
  Code2
} from 'lucide-react';
import { useWorkspace } from '../context/WorkspaceContext';

export const ProjectsAndQuestsView: React.FC = () => {
  const {
    state,
    toggleProjectComplete,
    toggleQuestComplete,
    toggleBossBattleComplete
  } = useWorkspace();

  const [activeTab, setActiveTab] = useState<'projects' | 'quests' | 'bosses'>('projects');

  const completedQuests = state.sideQuests.filter((q) => q.completed).length;
  const completedProjects = state.projects.filter((p) => p.completed).length;

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16">
      {/* Header */}
      <div className="p-5 rounded-xl bg-[#202020] border border-[#2e2e2e] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
              PRACTICAL MASTERY & SIDE QUESTS
            </span>
            <span className="text-xs text-neutral-400">• Anti-Memorization Track</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1">
            Project Ladder, 14 Side Quests & Boss Battles
          </h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            Build real software skills alongside your Semester II TU board exam preparations.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono">
          <div className="p-2.5 rounded-lg bg-[#272727] border border-[#333333] text-right">
            <div className="text-[10px] text-neutral-400">Projects Done</div>
            <div className="font-bold text-cyan-400">
              {completedProjects} / {state.projects.length}
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-[#272727] border border-[#333333] text-right">
            <div className="text-[10px] text-neutral-400">Quests Cleared</div>
            <div className="font-bold text-amber-400">
              {completedQuests} / {state.sideQuests.length}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#202020] border border-[#2e2e2e] text-xs">
        <button
          onClick={() => setActiveTab('projects')}
          className={`py-2 px-4 rounded-lg font-medium transition-colors flex items-center gap-2 ${
            activeTab === 'projects'
              ? 'bg-amber-500 text-black font-bold'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Hammer className="w-4 h-4" />
          <span>Practical Project Ladder (Levels 1–5)</span>
        </button>

        <button
          onClick={() => setActiveTab('quests')}
          className={`py-2 px-4 rounded-lg font-medium transition-colors flex items-center gap-2 ${
            activeTab === 'quests'
              ? 'bg-amber-500 text-black font-bold'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>14 Side Quests</span>
        </button>

        <button
          onClick={() => setActiveTab('bosses')}
          className={`py-2 px-4 rounded-lg font-medium transition-colors flex items-center gap-2 ${
            activeTab === 'bosses'
              ? 'bg-amber-500 text-black font-bold'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Swords className="w-4 h-4" />
          <span>Weekly Boss Battles & Final Boss</span>
        </button>
      </div>

      {/* TAB 1: PRACTICAL PROJECTS LADDER */}
      {activeTab === 'projects' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-[#202020] border border-[#2e2e2e] text-xs text-neutral-300 leading-relaxed">
            <strong className="text-white">The Project Ladder Rule:</strong> Projects are sized specifically
            into <strong>Micro (1–3h)</strong> and <strong>Mini (1–2d)</strong> so they enhance your C++ & CS skills
            without jeopardizing your 45-day exam preparation timetable.
          </div>

          <div className="space-y-3.5">
            {state.projects.map((proj) => (
              <div
                key={proj.id}
                className={`p-5 rounded-xl border transition-all space-y-4 ${
                  proj.completed
                    ? 'bg-[#1b231d] border-emerald-500/30'
                    : 'bg-[#202020] border-[#2e2e2e] hover:border-neutral-500'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300">
                      LEVEL {proj.level}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#282828] text-amber-300 border border-[#353535]">
                      {proj.tier} PROJECT • {proj.timeEstimate}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      Subject: {proj.subjectConnection}
                    </span>
                  </div>

                  <button
                    onClick={() => toggleProjectComplete(proj.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 self-start sm:self-auto ${
                      proj.completed
                        ? 'bg-emerald-500 text-black shadow-xs'
                        : 'bg-[#282828] hover:bg-[#333333] text-neutral-200 border border-[#383838]'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{proj.completed ? 'Project Completed ✓ (+75 XP)' : 'Mark as Completed'}</span>
                  </button>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white">{proj.title}</h3>
                  <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                {/* Features & Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-[#252525] border border-[#303030] space-y-1.5">
                    <div className="font-mono text-cyan-400 font-semibold text-[11px]">
                      Core Features to Build:
                    </div>
                    <ul className="text-neutral-300 space-y-1 list-disc pl-5">
                      {proj.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-lg bg-[#252525] border border-[#303030] space-y-1.5">
                    <div className="font-mono text-purple-400 font-semibold text-[11px]">
                      What You Learn & GitHub Template:
                    </div>
                    <p className="text-neutral-300 leading-relaxed">{proj.whatYouWillLearn}</p>
                    <div className="pt-1 font-mono text-[10px] text-neutral-400 truncate">
                      Repo: {proj.githubRepoTemplate}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: 14 SIDE QUESTS */}
      {activeTab === 'quests' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-[#202020] border border-[#2e2e2e] text-xs text-neutral-300 leading-relaxed">
            <strong className="text-white">Side Quests:</strong> Optional micro-challenges designed to expand your
            engineering curiosity without interfering with exam review. Complete them for bonus XP!
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {state.sideQuests.map((quest) => (
              <div
                key={quest.id}
                onClick={() => toggleQuestComplete(quest.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer select-none space-y-2.5 ${
                  quest.completed
                    ? 'bg-[#1b251e] border-emerald-500/30'
                    : 'bg-[#202020] border-[#2e2e2e] hover:border-neutral-500'
                }`}
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#272727] text-cyan-400 font-bold">
                    {quest.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-amber-400 text-xs font-bold">
                      +{quest.xpReward} XP
                    </span>
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center ${
                        quest.completed
                          ? 'bg-emerald-500 border-emerald-400 text-black font-bold'
                          : 'border-neutral-500 bg-[#252525]'
                      }`}
                    >
                      {quest.completed && '✓'}
                    </div>
                  </div>
                </div>

                <h4
                  className={`text-xs font-bold leading-relaxed ${
                    quest.completed ? 'line-through text-neutral-400' : 'text-white'
                  }`}
                >
                  {quest.title}
                </h4>

                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  {quest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: WEEKLY BOSS BATTLES */}
      {activeTab === 'bosses' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-[#202020] border border-[#2e2e2e] text-xs text-neutral-300 leading-relaxed">
            <strong className="text-white">Weekly Boss Battles:</strong> Major milestones testing your real-world
            exam readiness at the end of each study sprint. Complete all 6 to reach Level 8!
          </div>

          <div className="space-y-4">
            {state.bossBattles.map((boss) => (
              <div
                key={boss.week}
                className={`p-5 rounded-xl border transition-all space-y-4 ${
                  boss.isCompleted
                    ? 'bg-[#1b231d] border-emerald-500/30'
                    : 'bg-[#202020] border-[#2e2e2e]'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-amber-500/20 text-amber-300">
                      WEEK {boss.week} BOSS
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white">{boss.title}</h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-amber-400 text-xs font-bold">
                      +{boss.xpReward} XP
                    </span>
                    <button
                      onClick={() => toggleBossBattleComplete(boss.week)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                        boss.isCompleted
                          ? 'bg-emerald-500 text-black shadow-xs'
                          : 'bg-[#282828] hover:bg-[#333333] text-neutral-200 border border-[#383838]'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{boss.isCompleted ? 'Boss Defeated ✓' : 'Mark Defeated'}</span>
                    </button>
                  </div>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed">{boss.description}</p>

                <div className="p-3.5 rounded-lg bg-[#252525] border border-[#303030] space-y-2 text-xs">
                  <div className="font-mono text-cyan-400 font-bold text-[11px]">
                    Milestone Tasks Required:
                  </div>
                  <ul className="text-neutral-200 space-y-1.5 list-disc pl-5">
                    {boss.milestoneTasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
