import React, { useState } from 'react';
import {
  Bot,
  BrainCircuit,
  CheckCircle2,
  Plus,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Code2,
  RotateCcw
} from 'lucide-react';
import { useWorkspace } from '../context/WorkspaceContext';

export const AiDependencyControlView: React.FC = () => {
  const { state, addAiDependencyLog } = useWorkspace();
  const [showLogModal, setShowLogModal] = useState(false);

  // Form states
  const [problem, setProblem] = useState('');
  const [myOwnAttempt, setMyOwnAttempt] = useState('');
  const [aiHintReceived, setAiHintReceived] = useState('');
  const [whatILearned, setWhatILearned] = useState('');
  const [canReproduceWithoutAi, setCanReproduceWithoutAi] = useState(true);

  const steps = [
    { step: 1, title: 'Understand the Problem', desc: 'Read problem statement twice. Write input/output constraints manually on paper.' },
    { step: 2, title: 'Write Your Own Approach', desc: 'Draft algorithm pseudocode or flow diagram before touching any code editor.' },
    { step: 3, title: 'Attempt Code First', desc: 'Write the C++ or 8085 assembly solution yourself. Zero copy-pasting.' },
    { step: 4, title: 'Debug Yourself (Min 15 Mins)', desc: 'Use print statements, GDB debugger, or dry-run tables to trace the bug.' },
    { step: 5, title: 'Ask AI for a Hint Only', desc: 'Prompt AI: "Give me a small algorithmic hint for X without writing code for me."' },
    { step: 6, title: 'Try Again Independently', desc: 'Close AI window. Apply the hint yourself to complete the code.' },
    { step: 7, title: 'Reproduce Without AI', desc: 'Delete the code or open blank file: re-write from scratch to prove genuine mastery.' }
  ];

  const handleSaveLog = () => {
    if (!problem.trim()) return;
    addAiDependencyLog({
      problem,
      myOwnAttempt,
      aiHintReceived,
      whatILearned,
      canReproduceWithoutAi,
      status: canReproduceWithoutAi ? 'Reproduced Independently' : 'Needs Review'
    });
    setShowLogModal(false);
    setProblem('');
    setMyOwnAttempt('');
    setAiHintReceived('');
    setWhatILearned('');
  };

  const independentCount = state.aiDependencyLogs.filter(
    (l) => l.canReproduceWithoutAi
  ).length;

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16">
      {/* Header */}
      <div className="p-5 rounded-xl bg-[#202020] border border-[#2e2e2e] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
              COGNITIVE SOVEREIGNTY PROTOCOL
            </span>
            <span className="text-xs text-neutral-400">• Anti-AI Dependency Engine</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1">AI Dependency Control Lab</h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            "AI as teacher and copilot, never as replacement for thinking." Gradually build independent mastery.
          </p>
        </div>

        <button
          onClick={() => setShowLogModal(true)}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-colors shadow-xs shrink-0"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>Log Problem Attempt</span>
        </button>
      </div>

      {/* 7-Step Protocol Banner */}
      <div className="p-5 rounded-xl bg-[#202020] border border-[#2e2e2e] space-y-3">
        <div className="text-xs font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          The 7-Step AI-Control Discipline Protocol:
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-1">
          {steps.slice(0, 4).map((s) => (
            <div key={s.step} className="p-3 rounded-lg bg-[#252525] border border-[#303030] space-y-1">
              <div className="text-[11px] font-mono font-bold text-cyan-400">Step {s.step}</div>
              <div className="text-xs font-bold text-white">{s.title}</div>
              <p className="text-[11px] text-neutral-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {steps.slice(4).map((s) => (
            <div key={s.step} className="p-3 rounded-lg bg-[#252525] border border-[#303030] space-y-1">
              <div className="text-[11px] font-mono font-bold text-purple-400">Step {s.step}</div>
              <div className="text-xs font-bold text-white">{s.title}</div>
              <p className="text-[11px] text-neutral-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 rounded-lg bg-[#242424] border border-[#303030]">
          <div className="text-xs text-neutral-400">Problems Logged</div>
          <div className="text-xl font-bold font-mono text-white mt-1">
            {state.aiDependencyLogs.length}
          </div>
        </div>

        <div className="p-4 rounded-lg bg-[#242424] border border-[#303030]">
          <div className="text-xs text-neutral-400">Reproduced Without AI</div>
          <div className="text-xl font-bold font-mono text-emerald-400 mt-1">
            {independentCount} / {state.aiDependencyLogs.length}
          </div>
        </div>

        <div className="p-4 rounded-lg bg-[#242424] border border-[#303030]">
          <div className="text-xs text-neutral-400">Cognitive Independence Rate</div>
          <div className="text-xl font-bold font-mono text-cyan-400 mt-1">
            {state.aiDependencyLogs.length > 0
              ? Math.round((independentCount / state.aiDependencyLogs.length) * 100)
              : 100}
            %
          </div>
        </div>
      </div>

      {/* Logged AI Attempts Table / Cards */}
      <div className="space-y-3">
        <div className="text-xs font-bold text-neutral-300 uppercase tracking-wider font-mono">
          Interactive AI Use & Independence Records
        </div>

        {state.aiDependencyLogs.length === 0 ? (
          <div className="p-8 text-center rounded-xl bg-[#202020] border border-[#2e2e2e] text-neutral-400 text-xs">
            No problem logs yet. Whenever you ask AI for assistance, document your attempt here!
          </div>
        ) : (
          state.aiDependencyLogs.map((log) => (
            <div
              key={log.id}
              className="p-4 rounded-xl bg-[#202020] border border-[#2e2e2e] space-y-3"
            >
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-cyan-400 text-[11px] font-bold">
                    {log.date}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded text-[11px] font-mono font-semibold ${
                      log.canReproduceWithoutAi
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    }`}
                  >
                    {log.status}
                  </span>
                </div>
              </div>

              <h4 className="text-sm font-semibold text-white leading-relaxed">
                Problem: {log.problem}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-[#252525] border border-[#303030] space-y-1">
                  <div className="text-neutral-400 font-mono text-[11px]">1. My Own Attempt:</div>
                  <p className="text-neutral-200">{log.myOwnAttempt}</p>
                </div>

                <div className="p-3 rounded-lg bg-[#252525] border border-[#303030] space-y-1">
                  <div className="text-purple-300 font-mono text-[11px]">2. AI Hint Received:</div>
                  <p className="text-neutral-200">{log.aiHintReceived}</p>
                </div>

                <div className="p-3 rounded-lg bg-[#252525] border border-[#303030] space-y-1">
                  <div className="text-emerald-300 font-mono text-[11px]">3. What I Learned:</div>
                  <p className="text-neutral-200">{log.whatILearned}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Log Modal */}
      {showLogModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-[#202020] border border-[#2f2f2f] rounded-2xl w-full max-w-lg shadow-2xl p-5 space-y-4 text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-[#2e2e2e]">
              <h3 className="font-bold text-white flex items-center gap-2">
                <Bot className="w-4 h-4 text-purple-400" />
                Log AI Assistance Attempt
              </h3>
              <button
                onClick={() => setShowLogModal(false)}
                className="text-neutral-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div>
              <label className="block text-neutral-300 font-semibold mb-1">
                Problem Statement
              </label>
              <input
                type="text"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="e.g. Overloading stream << operator for custom Vector class"
                className="w-full bg-[#272727] border border-[#333333] rounded-lg p-2 text-xs text-white focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-neutral-300 font-semibold mb-1">
                What Was Your Own Attempt First?
              </label>
              <textarea
                rows={2}
                value={myOwnAttempt}
                onChange={(e) => setMyOwnAttempt(e.target.value)}
                placeholder="e.g. Wrote member function operator<<, but compiler errored because left operand must be ostream."
                className="w-full bg-[#272727] border border-[#333333] rounded-lg p-2 text-xs text-white focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-neutral-300 font-semibold mb-1">
                What Hint Did AI Give You?
              </label>
              <textarea
                rows={2}
                value={aiHintReceived}
                onChange={(e) => setAiHintReceived(e.target.value)}
                placeholder="e.g. AI explained that operator<< must be a friend non-member function to allow `cout << v`."
                className="w-full bg-[#272727] border border-[#333333] rounded-lg p-2 text-xs text-white focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-neutral-300 font-semibold mb-1">
                What Did You Learn From This?
              </label>
              <textarea
                rows={2}
                value={whatILearned}
                onChange={(e) => setWhatILearned(e.target.value)}
                placeholder="e.g. If the left operand is not of my class type, the operator function cannot be a member function."
                className="w-full bg-[#272727] border border-[#333333] rounded-lg p-2 text-xs text-white focus:outline-hidden"
              />
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="reproduceCheck"
                checked={canReproduceWithoutAi}
                onChange={(e) => setCanReproduceWithoutAi(e.target.checked)}
                className="rounded accent-purple-500"
              />
              <label htmlFor="reproduceCheck" className="text-neutral-200">
                I can now re-write and solve this completely without AI.
              </label>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setShowLogModal(false)}
                className="px-3 py-1.5 rounded-lg bg-[#272727] text-neutral-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveLog}
                className="px-4 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold"
              >
                Save Log (+30 XP)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
