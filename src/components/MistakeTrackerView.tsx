import React, { useState } from 'react';
import {
  AlertOctagon,
  CheckCircle2,
  Trash2,
  Plus,
  Filter,
  RotateCcw,
  Sparkles,
  AlertTriangle,
  BrainCircuit,
  Search
} from 'lucide-react';
import { useWorkspace } from '../context/WorkspaceContext';
import { MistakeCode, SubjectCode } from '../types';
import { CSIT_SUBJECTS } from '../data/csitSyllabusData';

export const MistakeTrackerView: React.FC = () => {
  const { state, addMistake, toggleMistakeFixed, deleteMistake } = useWorkspace();
  const [filterSubject, setFilterSubject] = useState<SubjectCode | 'ALL'>('ALL');
  const [filterCode, setFilterCode] = useState<MistakeCode | 'ALL'>('ALL');
  const [showAddModal, setShowAddModal] = useState(false);

  // New mistake state
  const [questionText, setQuestionText] = useState('');
  const [subjectCode, setSubjectCode] = useState<SubjectCode>('CSC165');
  const [topic, setTopic] = useState('');
  const [mistakeCode, setMistakeCode] = useState<MistakeCode>('A');
  const [whyIFailed, setWhyIFailed] = useState('');
  const [correctConcept, setCorrectConcept] = useState('');
  const [correctionAction, setCorrectionAction] = useState('');

  const mistakeCodeDescriptions: Record<MistakeCode, string> = {
    A: "Didn't understand concept",
    B: 'Forgot formula',
    C: 'Forgot definition',
    D: 'Calculation / arithmetic mistake',
    E: 'Logic mistake',
    F: 'Programming syntax mistake',
    G: 'Programming logic mistake',
    H: 'Misread question',
    I: 'Time-management problem',
    J: 'Careless mistake',
    K: "Could explain verbally but couldn't write"
  };

  const filteredMistakes = state.mistakeLogs.filter((m) => {
    if (filterSubject !== 'ALL' && m.subjectCode !== filterSubject) return false;
    if (filterCode !== 'ALL' && m.mistakeCode !== filterCode) return false;
    return true;
  });

  const handleCreateMistake = () => {
    if (!questionText.trim()) return;
    addMistake({
      questionText,
      subjectCode,
      topic: topic || 'General Topic',
      mistakeCode,
      whyIFailed: whyIFailed || 'Identified during question practice.',
      correctConcept: correctConcept || 'Review textbook reference.',
      correctionAction: correctionAction || 'Re-solve without looking at solution.',
      nextRevisionDate: new Date(Date.now() + 24 * 3600 * 1000).toISOString(),
      revisionStage: 'R1',
      isFixed: false
    });
    setShowAddModal(false);
    setQuestionText('');
    setTopic('');
    setWhyIFailed('');
    setCorrectConcept('');
    setCorrectionAction('');
  };

  const fixedCount = state.mistakeLogs.filter((m) => m.isFixed).length;

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16">
      {/* Header */}
      <div className="p-5 rounded-xl bg-[#202020] border border-[#2e2e2e] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded">
              ERROR ANALYSIS ENGINE
            </span>
            <span className="text-xs text-neutral-400">• Spaced Revision System (R0–R5)</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1">Mistake Notebook (Codes A to K)</h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            Every mistake you log and correct is 4 to 8 marks saved on your final TU board exam.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-colors shadow-xs shrink-0"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>Log New Mistake</span>
        </button>
      </div>

      {/* Stats and 11 Mistake Codes Guide */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-lg bg-[#242424] border border-[#303030]">
          <div className="text-[11px] text-neutral-400">Total Mistakes Logged</div>
          <div className="text-xl font-bold font-mono text-white mt-1">
            {state.mistakeLogs.length}
          </div>
        </div>

        <div className="p-3.5 rounded-lg bg-[#242424] border border-[#303030]">
          <div className="text-[11px] text-neutral-400">Fixed & Mastered</div>
          <div className="text-xl font-bold font-mono text-emerald-400 mt-1">
            {fixedCount} / {state.mistakeLogs.length}
          </div>
        </div>

        <div className="p-3.5 rounded-lg bg-[#242424] border border-[#303030]">
          <div className="text-[11px] text-neutral-400">Spaced Revision Stages</div>
          <div className="text-xs font-mono text-cyan-400 mt-1.5 font-bold">
            R0 → R1 → R2 → R3 → R4 → R5
          </div>
        </div>

        <div className="p-3.5 rounded-lg bg-[#242424] border border-[#303030]">
          <div className="text-[11px] text-neutral-400">XP Earned from Fixes</div>
          <div className="text-xl font-bold font-mono text-amber-400 mt-1">
            +{fixedCount * 20} XP
          </div>
        </div>
      </div>

      {/* 11 Codes Legend Pill Bar */}
      <div className="p-4 rounded-xl bg-[#202020] border border-[#2e2e2e] space-y-2">
        <div className="text-xs font-bold text-neutral-300 font-mono flex items-center gap-1.5">
          <AlertOctagon className="w-3.5 h-3.5 text-red-400" />
          The 11 CSIT Mistake Classifications:
        </div>
        <div className="flex flex-wrap gap-1.5 text-[11px]">
          {(Object.keys(mistakeCodeDescriptions) as MistakeCode[]).map((code) => (
            <span
              key={code}
              className="px-2 py-0.5 rounded bg-[#272727] text-neutral-300 border border-[#333333] font-mono"
            >
              <strong className="text-red-400">{code}:</strong> {mistakeCodeDescriptions[code]}
            </span>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 text-xs">
        <span className="text-neutral-400">Filter by Subject:</span>
        <select
          value={filterSubject}
          onChange={(e) => setFilterSubject(e.target.value as any)}
          className="bg-[#242424] border border-[#333333] text-neutral-200 rounded-md px-2 py-1 focus:outline-hidden"
        >
          <option value="ALL">All Subjects</option>
          {CSIT_SUBJECTS.map((s) => (
            <option key={s.code} value={s.code}>
              {s.code}: {s.alias}
            </option>
          ))}
        </select>

        <span className="text-neutral-400 ml-2">Filter by Code:</span>
        <select
          value={filterCode}
          onChange={(e) => setFilterCode(e.target.value as any)}
          className="bg-[#242424] border border-[#333333] text-neutral-200 rounded-md px-2 py-1 focus:outline-hidden"
        >
          <option value="ALL">All Codes</option>
          {(Object.keys(mistakeCodeDescriptions) as MistakeCode[]).map((code) => (
            <option key={code} value={code}>
              Code {code} — {mistakeCodeDescriptions[code]}
            </option>
          ))}
        </select>
      </div>

      {/* Mistake Entries List */}
      <div className="space-y-3">
        {filteredMistakes.length === 0 ? (
          <div className="p-8 text-center rounded-xl bg-[#202020] border border-[#2e2e2e] text-neutral-400 text-xs">
            No mistakes match your filter. Keep solving problems and log any stumbling blocks here!
          </div>
        ) : (
          filteredMistakes.map((m) => {
            const subject = CSIT_SUBJECTS.find((s) => s.code === m.subjectCode);

            return (
              <div
                key={m.id}
                className={`p-4 rounded-xl border transition-all space-y-3 ${
                  m.isFixed
                    ? 'bg-[#1b221d] border-emerald-500/30'
                    : 'bg-[#202020] border-[#2e2e2e] hover:border-neutral-500'
                }`}
              >
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span
                      className="px-2 py-0.5 rounded font-mono font-bold text-[11px]"
                      style={{
                        backgroundColor: `${subject?.color || '#3b82f6'}20`,
                        color: subject?.color || '#3b82f6'
                      }}
                    >
                      {m.subjectCode} • {m.topic}
                    </span>

                    <span className="px-2 py-0.5 rounded font-mono font-bold text-red-300 bg-red-950/40 border border-red-900/40 text-[11px]">
                      Code {m.mistakeCode}: {mistakeCodeDescriptions[m.mistakeCode]}
                    </span>

                    <span className="text-[10px] text-neutral-400 font-mono">
                      Stage: {m.revisionStage}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleMistakeFixed(m.id)}
                      className={`px-2.5 py-1 rounded text-xs font-semibold transition-all flex items-center gap-1 ${
                        m.isFixed
                          ? 'bg-emerald-500 text-black shadow-xs'
                          : 'bg-[#292929] hover:bg-[#333333] text-neutral-300 border border-[#383838]'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{m.isFixed ? 'Fixed & Mastered ✓' : 'Mark Fixed (+20 XP)'}</span>
                    </button>

                    <button
                      onClick={() => deleteMistake(m.id)}
                      className="p-1 rounded text-neutral-500 hover:text-red-400 transition-colors"
                      title="Delete entry"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="text-sm font-semibold text-white leading-relaxed">
                  {m.questionText}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-[#262626] border border-[#333333] space-y-1">
                    <div className="text-amber-300 font-bold font-mono text-[11px]">
                      Why I Failed:
                    </div>
                    <p className="text-neutral-200">{m.whyIFailed}</p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#262626] border border-[#333333] space-y-1">
                    <div className="text-emerald-300 font-bold font-mono text-[11px]">
                      Correction & Spaced Action:
                    </div>
                    <p className="text-neutral-200">{m.correctionAction}</p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Add Mistake Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-[#202020] border border-[#2f2f2f] rounded-2xl w-full max-w-lg shadow-2xl p-5 space-y-4 text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-[#2e2e2e]">
              <h3 className="font-bold text-white flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                Log Error to Mistake Tracker
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-neutral-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div>
              <label className="block text-neutral-300 font-semibold mb-1">
                Question / Problem
              </label>
              <input
                type="text"
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                placeholder="e.g. Prove that 3^n < n! for n >= 7 using mathematical induction"
                className="w-full bg-[#272727] border border-[#333333] rounded-lg p-2 text-xs text-white focus:outline-hidden"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-neutral-300 font-semibold mb-1">Subject</label>
                <select
                  value={subjectCode}
                  onChange={(e) => setSubjectCode(e.target.value as SubjectCode)}
                  className="w-full bg-[#272727] border border-[#333333] rounded-lg p-2 text-xs text-white focus:outline-hidden"
                >
                  {CSIT_SUBJECTS.map((s) => (
                    <option key={s.code} value={s.code}>
                      {s.code}: {s.alias}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-neutral-300 font-semibold mb-1">Topic</label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g. Unit 4 Induction"
                  className="w-full bg-[#272727] border border-[#333333] rounded-lg p-2 text-xs text-white focus:outline-hidden"
                />
              </div>
            </div>

            <div>
              <label className="block text-neutral-300 font-semibold mb-1">
                Mistake Code (A to K)
              </label>
              <select
                value={mistakeCode}
                onChange={(e) => setMistakeCode(e.target.value as MistakeCode)}
                className="w-full bg-[#272727] border border-[#333333] rounded-lg p-2 text-xs text-white focus:outline-hidden"
              >
                {(Object.keys(mistakeCodeDescriptions) as MistakeCode[]).map((code) => (
                  <option key={code} value={code}>
                    Code {code} — {mistakeCodeDescriptions[code]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-neutral-300 font-semibold mb-1">
                Why Did You Fail?
              </label>
              <textarea
                rows={2}
                value={whyIFailed}
                onChange={(e) => setWhyIFailed(e.target.value)}
                placeholder="e.g. Multiplied by 3 but forgot that 3 < k+1 for k >= 7."
                className="w-full bg-[#272727] border border-[#333333] rounded-lg p-2 text-xs text-white focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-neutral-300 font-semibold mb-1">
                Correction & Action Plan
              </label>
              <textarea
                rows={2}
                value={correctionAction}
                onChange={(e) => setCorrectionAction(e.target.value)}
                placeholder="e.g. Re-write the inductive step inequality on paper tomorrow morning."
                className="w-full bg-[#272727] border border-[#333333] rounded-lg p-2 text-xs text-white focus:outline-hidden"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-3 py-1.5 rounded-lg bg-[#272727] text-neutral-300"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateMistake}
                className="px-4 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold"
              >
                Save to Notebook
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
