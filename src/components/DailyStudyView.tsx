import React, { useState } from 'react';
import {
  BookOpen,
  BrainCircuit,
  HelpCircle,
  Code2,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  ChevronRight,
  AlertTriangle,
  Lightbulb,
  FileQuestion,
  RotateCcw,
  Target,
  Send
} from 'lucide-react';
import { useWorkspace } from '../context/WorkspaceContext';
import { CSIT_SUBJECTS } from '../data/csitSyllabusData';
import { DailySubjectPlan, SubjectCode } from '../types';

export const DailyStudyView: React.FC = () => {
  const {
    state,
    currentDay,
    setCurrentDay,
    toggleDayCompletion,
    setEnergyMode,
    logStudyMinutes,
    addMistake,
    addNote
  } = useWorkspace();

  const currentPlan = state.dayPlans.find((p) => p.day === currentDay) || state.dayPlans[0];
  const [activeSubjectIdx, setActiveSubjectIdx] = useState<number>(0);
  const [activeBlock, setActiveBlock] = useState<'block1' | 'block2' | 'block3' | 'coding' | 'review'>('block1');

  // Closed notes toggle for Block 2
  const [revealActiveRecallAnswers, setRevealActiveRecallAnswers] = useState(false);

  // End-of-day review state
  const [eodLearned, setEodLearned] = useState('');
  const [eodConfused, setEodConfused] = useState('');
  const [eodExplainWithoutNotes, setEodExplainWithoutNotes] = useState<'Yes' | 'Partially' | 'No'>('Yes');
  const [eodStudyMins, setEodStudyMins] = useState(180);
  const [eodCodingMins, setEodCodingMins] = useState(45);
  const [eodSaved, setEodSaved] = useState(false);

  // Quick mistake logger modal state
  const [showMistakeModal, setShowMistakeModal] = useState(false);
  const [mistakeQuestion, setMistakeQuestion] = useState('');
  const [mistakeCode, setMistakeCode] = useState<'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K'>('A');
  const [mistakeWhy, setMistakeWhy] = useState('');
  const [mistakeAction, setMistakeAction] = useState('');

  const activeSubjectPlan: DailySubjectPlan = currentPlan.subjects[activeSubjectIdx] || currentPlan.subjects[0];
  const activeSubjectData = CSIT_SUBJECTS.find((s) => s.code === activeSubjectPlan?.subjectCode);

  const targetHoursForMode = currentPlan.targetHours[state.energyMode];

  const handleSaveEodReview = () => {
    logStudyMinutes(Number(eodStudyMins) + Number(eodCodingMins));
    addNote({
      title: `Day ${currentDay} End-of-Day Review · ${currentPlan.theme}`,
      subjectCode: activeSubjectPlan.subjectCode,
      content: `### End-of-Day Review (Day ${currentDay})\n\n- **Learned:** ${eodLearned || 'Covered scheduled topics.'}\n- **Confused / Hard:** ${eodConfused || 'None flagged.'}\n- **Could explain without notes:** ${eodExplainWithoutNotes}\n- **Study Time:** ${eodStudyMins} mins | **Coding:** ${eodCodingMins} mins`,
      tags: ['DailyReview', 'EOD']
    });
    setEodSaved(true);
    setTimeout(() => setEodSaved(false), 3000);
  };

  const handleLogMistake = () => {
    if (!mistakeQuestion.trim()) return;
    addMistake({
      questionText: mistakeQuestion,
      subjectCode: activeSubjectPlan.subjectCode,
      topic: activeSubjectPlan.topic,
      mistakeCode,
      whyIFailed: mistakeWhy || 'Conceptual or formula gap identified.',
      correctConcept: 'Review formal theorem and re-solve without notes.',
      correctionAction: mistakeAction || 'Re-solve in next study session.',
      nextRevisionDate: new Date(Date.now() + 24 * 3600 * 1000).toISOString(),
      revisionStage: 'R1',
      isFixed: false
    });
    setShowMistakeModal(false);
    setMistakeQuestion('');
    setMistakeWhy('');
    setMistakeAction('');
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16">
      {/* Top Banner & Energy Mode Setting */}
      <div className="p-5 rounded-xl bg-[#14161b] border border-[#22252e] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <span className="font-mono text-cyan-400 font-semibold tabular-nums">
                DAY {currentPlan.day} OF 45
              </span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>{currentPlan.phaseName}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white mt-1">
              {currentPlan.theme}
            </h2>
          </div>

          {/* Complete Day Toggle Button */}
          <button
            onClick={() => toggleDayCompletion(currentPlan.day)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold border transition-all flex items-center gap-2 shrink-0 ${
              currentPlan.completed
                ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300'
                : 'bg-[#1a1c22] border-[#2a2d38] text-neutral-200 hover:border-cyan-500 hover:text-white'
            }`}
          >
            <CheckCircle2
              className={`w-4 h-4 ${
                currentPlan.completed ? 'text-emerald-400' : 'text-neutral-500'
              }`}
            />
            <span>{currentPlan.completed ? 'Day Completed ✓' : 'Mark Day Completed'}</span>
          </button>
        </div>

        {/* Energy Mode Selector bar */}
        <div className="p-3 rounded-lg bg-[#181a20] border border-[#252832] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span className="text-neutral-300 font-medium">Daily Energy Target:</span>
            <span className="font-mono text-cyan-400 font-semibold tabular-nums">
              {targetHoursForMode} Focused Hours
            </span>
          </div>

          <div className="flex items-center gap-1 bg-[#121317] border border-[#20222a] p-0.5 rounded-lg">
            <button
              onClick={() => setEnergyMode('minimum')}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                state.energyMode === 'minimum'
                  ? 'bg-[#282b35] text-amber-300 font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Minimum (2–3h)
            </button>
            <button
              onClick={() => setEnergyMode('normal')}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                state.energyMode === 'normal'
                  ? 'bg-[#282b35] text-cyan-300 font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Normal (4–6h)
            </button>
            <button
              onClick={() => setEnergyMode('high')}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                state.energyMode === 'high'
                  ? 'bg-[#282b35] text-purple-300 font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              High Energy (6–8h)
            </button>
          </div>
        </div>

        {/* Spaced Revision Banner */}
        {currentPlan.spacedRevisionDue && currentPlan.spacedRevisionDue.length > 0 && (
          <div className="p-3 rounded-lg bg-[#181a20] border border-[#252832] flex items-start gap-2.5 text-xs text-neutral-300">
            <RotateCcw className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-cyan-300">Spaced Revision Due Today: </span>
              <span>{currentPlan.spacedRevisionDue.join(' · ')}</span>
            </div>
          </div>
        )}
      </div>

      {/* Multi-Subject Selector for Today */}
      {currentPlan.subjects.length > 1 && (
        <div className="flex items-center gap-2">
          <span className="text-xs text-neutral-400 font-mono">Today's Subjects:</span>
          <div className="flex items-center gap-1.5 overflow-x-auto">
            {currentPlan.subjects.map((s, idx) => {
              const fullSubj = CSIT_SUBJECTS.find((sub) => sub.code === s.subjectCode);
              const isActive = activeSubjectIdx === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveSubjectIdx(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#2b2b2b] text-white border-b-2'
                      : 'bg-[#202020] text-neutral-400 hover:text-white'
                  }`}
                  style={{
                    borderBottomColor: isActive ? fullSubj?.color || '#3b82f6' : 'transparent'
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: fullSubj?.color || '#3b82f6' }}
                  />
                  <span>{s.subjectCode} Unit {s.unit}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 4-Block Study Navigation Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 p-1 rounded-xl bg-[#202020] border border-[#2e2e2e] text-xs">
        <button
          onClick={() => setActiveBlock('block1')}
          className={`py-2 px-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-1.5 ${
            activeBlock === 'block1'
              ? 'bg-cyan-500 text-black font-bold'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Block 1: Theory</span>
        </button>

        <button
          onClick={() => setActiveBlock('block2')}
          className={`py-2 px-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-1.5 ${
            activeBlock === 'block2'
              ? 'bg-cyan-500 text-black font-bold'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <BrainCircuit className="w-3.5 h-3.5" />
          <span>Block 2: Active Recall</span>
        </button>

        <button
          onClick={() => setActiveBlock('block3')}
          className={`py-2 px-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-1.5 ${
            activeBlock === 'block3'
              ? 'bg-cyan-500 text-black font-bold'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Target className="w-3.5 h-3.5" />
          <span>Block 3: Questions</span>
        </button>

        <button
          onClick={() => setActiveBlock('coding')}
          className={`py-2 px-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-1.5 ${
            activeBlock === 'coding'
              ? 'bg-cyan-500 text-black font-bold'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Code2 className="w-3.5 h-3.5" />
          <span>Daily Coding</span>
        </button>

        <button
          onClick={() => setActiveBlock('review')}
          className={`py-2 px-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-1.5 ${
            activeBlock === 'review'
              ? 'bg-cyan-500 text-black font-bold'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>End-of-Day Review</span>
        </button>
      </div>

      {/* BLOCK 1: MAIN THEORY */}
      {activeBlock === 'block1' && activeSubjectPlan && (
        <div className="space-y-4">
          <div className="p-6 rounded-xl bg-[#202020] border border-[#2e2e2e] space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#2d2d2d]">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                  BLOCK 1: MAIN THEORY
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  {activeSubjectPlan.theory.topicTitle}
                </h3>
              </div>
              <span className="text-xs font-mono text-neutral-400">
                {activeSubjectPlan.subjectCode} • Unit {activeSubjectPlan.unit}
              </span>
            </div>

            {/* What is it & Why does it exist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[#252525] border border-[#303030] space-y-1.5">
                <div className="text-xs font-bold text-cyan-300 flex items-center gap-1.5 font-mono">
                  <Lightbulb className="w-3.5 h-3.5 text-cyan-400" />
                  What is it?
                </div>
                <p className="text-xs text-neutral-200 leading-relaxed">
                  {activeSubjectPlan.theory.whatIsIt}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#252525] border border-[#303030] space-y-1.5">
                <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5 font-mono">
                  <Target className="w-3.5 h-3.5 text-amber-400" />
                  Why does it exist?
                </div>
                <p className="text-xs text-neutral-200 leading-relaxed">
                  {activeSubjectPlan.theory.whyDoesItExist}
                </p>
              </div>
            </div>

            {/* How does it work & Where is it used in CS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[#252525] border border-[#303030] space-y-1.5">
                <div className="text-xs font-bold text-purple-300 flex items-center gap-1.5 font-mono">
                  <BrainCircuit className="w-3.5 h-3.5 text-purple-400" />
                  How does it work?
                </div>
                <p className="text-xs text-neutral-200 leading-relaxed">
                  {activeSubjectPlan.theory.howDoesItWork}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#252525] border border-[#303030] space-y-1.5">
                <div className="text-xs font-bold text-emerald-300 flex items-center gap-1.5 font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  Where is it used in Computer Science?
                </div>
                <p className="text-xs text-neutral-200 leading-relaxed">
                  {activeSubjectPlan.theory.whereIsItUsedInCS}
                </p>
              </div>
            </div>

            {/* Important Definitions & Formulas */}
            <div className="p-4 rounded-lg bg-[#252525] border border-[#303030] space-y-3">
              <div className="text-xs font-bold text-neutral-200 uppercase tracking-wider font-mono">
                Key Definitions & Theoretical Formulas
              </div>
              <div className="space-y-1.5 font-mono text-xs">
                {activeSubjectPlan.theory.keyDefinitions.map((def, i) => (
                  <div key={i} className="p-2 rounded bg-[#1c1c1c] text-neutral-200 border border-[#2b2b2b]">
                    {def}
                  </div>
                ))}
                {activeSubjectPlan.theory.importantFormulasOrDiagrams.map((formula, i) => (
                  <div key={i} className="p-2 rounded bg-[#1c1c1c] text-cyan-300 border border-[#2b2b2b]">
                    {formula}
                  </div>
                ))}
              </div>
            </div>

            {/* Common Mistakes Callout */}
            <div className="p-4 rounded-lg bg-red-950/20 border border-red-900/30 space-y-1.5">
              <div className="text-xs font-bold text-red-300 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                Common Traps & TU Exam Mistakes
              </div>
              <ul className="text-xs text-neutral-300 space-y-1 list-disc pl-5">
                {activeSubjectPlan.theory.commonMistakes.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </div>

            {/* Concrete Examples */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[#1e1e1e] border border-[#2b2b2b] space-y-1">
                <div className="text-[11px] font-mono text-neutral-400">Simple Walkthrough Example:</div>
                <div className="text-xs font-mono text-neutral-200 leading-relaxed">
                  {activeSubjectPlan.theory.simpleExample}
                </div>
              </div>
              <div className="p-4 rounded-lg bg-[#1e1e1e] border border-[#2b2b2b] space-y-1">
                <div className="text-[11px] font-mono text-neutral-400">Production CS Application:</div>
                <div className="text-xs font-mono text-neutral-200 leading-relaxed">
                  {activeSubjectPlan.theory.csApplicationExample}
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveBlock('block2')}
                className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs flex items-center gap-1.5 transition-colors"
              >
                <span>Proceed to Block 2: Active Recall</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BLOCK 2: ACTIVE RECALL */}
      {activeBlock === 'block2' && activeSubjectPlan && (
        <div className="p-6 rounded-xl bg-[#202020] border border-[#2e2e2e] space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#2d2d2d] gap-2">
            <div>
              <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                BLOCK 2: ACTIVE RECALL DRILL
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                Closed-Notes Retrieval Practice
              </h3>
              <p className="text-xs text-neutral-400">
                Close your notes! Answer these questions in your head or on scratch paper.
              </p>
            </div>

            <button
              onClick={() => setRevealActiveRecallAnswers(!revealActiveRecallAnswers)}
              className="px-3 py-1.5 rounded-lg bg-[#272727] hover:bg-[#333333] text-neutral-200 text-xs font-medium border border-[#383838] transition-colors shrink-0"
            >
              {revealActiveRecallAnswers ? 'Hide Answers' : 'Reveal Answers / Check'}
            </button>
          </div>

          <div className="space-y-4">
            {/* Definition Questions */}
            <div className="p-4 rounded-lg bg-[#252525] border border-[#303030] space-y-2">
              <div className="text-xs font-bold text-cyan-300 font-mono">
                1. Definition Questions:
              </div>
              <ul className="text-xs text-neutral-200 space-y-1.5 list-disc pl-5">
                {activeSubjectPlan.activeRecall.definitionQuestions.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>

            {/* Explain Questions */}
            <div className="p-4 rounded-lg bg-[#252525] border border-[#303030] space-y-2">
              <div className="text-xs font-bold text-purple-300 font-mono">
                2. Explain Questions:
              </div>
              <ul className="text-xs text-neutral-200 space-y-1.5 list-disc pl-5">
                {activeSubjectPlan.activeRecall.explainQuestions.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>

            {/* Why Questions */}
            <div className="p-4 rounded-lg bg-[#252525] border border-[#303030] space-y-2">
              <div className="text-xs font-bold text-amber-300 font-mono">
                3. Why Questions:
              </div>
              <ul className="text-xs text-neutral-200 space-y-1.5 list-disc pl-5">
                {activeSubjectPlan.activeRecall.whyQuestions.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>

            {/* Difference Questions */}
            <div className="p-4 rounded-lg bg-[#252525] border border-[#303030] space-y-2">
              <div className="text-xs font-bold text-emerald-300 font-mono">
                4. Difference & Compare Questions:
              </div>
              <ul className="text-xs text-neutral-200 space-y-1.5 list-disc pl-5">
                {activeSubjectPlan.activeRecall.differenceQuestions.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>

            {/* Numerical / Code Questions */}
            <div className="p-4 rounded-lg bg-[#252525] border border-[#303030] space-y-2">
              <div className="text-xs font-bold text-pink-300 font-mono">
                5. Numerical / Code Prompt:
              </div>
              <ul className="text-xs text-neutral-200 space-y-1.5 list-disc pl-5">
                {activeSubjectPlan.activeRecall.numericalOrCodeQuestions.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Log Mistake Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#2d2d2d]">
            <button
              onClick={() => setShowMistakeModal(true)}
              className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1.5 font-medium"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              Failed to recall something? Log to Mistake Notebook
            </button>

            <button
              onClick={() => setActiveBlock('block3')}
              className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <span>Proceed to Block 3: Practice Questions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* BLOCK 3: QUESTION PRACTICE (LEVELS 1 - 4) */}
      {activeBlock === 'block3' && activeSubjectPlan && (
        <div className="p-6 rounded-xl bg-[#202020] border border-[#2e2e2e] space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-[#2d2d2d]">
            <div>
              <span className="text-xs font-mono font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
                BLOCK 3: QUESTION PRACTICE (LADDER)
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                4-Tier Difficulty Progression
              </h3>
              <p className="text-xs text-neutral-400">
                Connected directly to today's topic. From foundation to TU board exam challenge.
              </p>
            </div>
          </div>

          <div className="space-y-3.5">
            {/* Level 1: Foundation */}
            <div className="p-4 rounded-xl bg-[#252525] border border-emerald-500/30 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  LEVEL 1 — Foundation (Easy)
                </span>
                <span className="text-[10px] text-neutral-400 font-mono">Concept Check</span>
              </div>
              <p className="text-xs text-neutral-200 leading-relaxed">
                {activeSubjectPlan.practiceQuestions.level1Easy}
              </p>
            </div>

            {/* Level 2: Understanding */}
            <div className="p-4 rounded-xl bg-[#252525] border border-yellow-500/30 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-yellow-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  LEVEL 2 — Understanding (Medium)
                </span>
                <span className="text-[10px] text-neutral-400 font-mono">Problem Solving</span>
              </div>
              <p className="text-xs text-neutral-200 leading-relaxed">
                {activeSubjectPlan.practiceQuestions.level2Medium}
              </p>
            </div>

            {/* Level 3: Exam */}
            <div className="p-4 rounded-xl bg-[#252525] border border-orange-500/30 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-orange-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-400" />
                  LEVEL 3 — TU Exam Style
                </span>
                <span className="text-[10px] text-neutral-400 font-mono">Past Paper Weightage</span>
              </div>
              <p className="text-xs text-neutral-200 leading-relaxed font-semibold">
                {activeSubjectPlan.practiceQuestions.level3Exam}
              </p>
            </div>

            {/* Level 4: Challenge */}
            <div className="p-4 rounded-xl bg-[#252525] border border-red-500/30 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-red-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  LEVEL 4 — Challenge (Distinction)
                </span>
                <span className="text-[10px] text-neutral-400 font-mono">Unfamiliar Synthesis</span>
              </div>
              <p className="text-xs text-neutral-200 leading-relaxed">
                {activeSubjectPlan.practiceQuestions.level4Challenge}
              </p>
            </div>
          </div>

          <div className="pt-2 flex justify-between items-center border-t border-[#2d2d2d]">
            <button
              onClick={() => setShowMistakeModal(true)}
              className="text-xs text-red-400 hover:text-red-300 font-medium flex items-center gap-1"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              Log Incorrect Question
            </button>

            <button
              onClick={() => setActiveBlock('coding')}
              className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <span>Proceed to Daily Coding Habit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* DAILY CODING HABIT (30 - 60 MINS) */}
      {activeBlock === 'coding' && (
        <div className="p-6 rounded-xl bg-[#202020] border border-[#2e2e2e] space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-[#2d2d2d]">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                DAILY PROGRAMMING DISCIPLINE
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                30–60 Minutes Daily Coding Sprint
              </h3>
              <p className="text-xs text-neutral-400">
                Rule: Attempt the code yourself first. Do NOT prompt AI to generate the entire program.
              </p>
            </div>
            <span className="font-mono text-xs px-2 py-1 rounded bg-[#272727] text-neutral-300 border border-[#333333]">
              {currentPlan.codingHabit.durationMinutes} Mins Target
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#252525] border border-[#303030] space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-white">Today's Programming Assignment:</span>
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                {currentPlan.codingHabit.difficulty}
              </span>
            </div>
            <div className="p-3 rounded-lg bg-[#1c1c1c] text-xs font-mono text-neutral-200 border border-[#2b2b2b] leading-relaxed">
              {currentPlan.codingHabit.task}
            </div>
          </div>

          {/* AI Dependency Control Reminder */}
          <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-900/30 space-y-2 text-xs">
            <div className="font-bold text-purple-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              AI Dependency Control Checklist:
            </div>
            <ol className="text-neutral-300 space-y-1 list-decimal pl-5">
              <li>Understand the problem without AI.</li>
              <li>Write your own logic/pseudocode approach on paper.</li>
              <li>Attempt the C++ code in your editor.</li>
              <li>Debug compilation errors yourself.</li>
              <li>If stuck for &gt;15 minutes, ask AI for a small HINT only (not full code).</li>
              <li>Close AI, finish the code, and verify it runs independently.</li>
            </ol>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={() => setActiveBlock('review')}
              className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <span>Proceed to End-of-Day Review</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* END-OF-DAY REVIEW */}
      {activeBlock === 'review' && (
        <div className="p-6 rounded-xl bg-[#202020] border border-[#2e2e2e] space-y-5">
          <div className="pb-3 border-b border-[#2d2d2d]">
            <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
              END-OF-DAY AUDIT
            </span>
            <h3 className="text-lg font-bold text-white mt-1">
              Day {currentPlan.day} Accountability Review
            </h3>
            <p className="text-xs text-neutral-400">
              Audit your cognitive output before sleeping. Earn +20 XP.
            </p>
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <label className="block text-neutral-300 font-semibold mb-1">
                What did I learn today?
              </label>
              <textarea
                rows={2}
                value={eodLearned}
                onChange={(e) => setEodLearned(e.target.value)}
                placeholder="e.g. Mastered 8085 Demultiplexing circuit and Extended Euclidean linear combinations..."
                className="w-full bg-[#272727] border border-[#333333] rounded-lg p-2.5 text-xs text-white focus:outline-hidden focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-neutral-300 font-semibold mb-1">
                What confused me or gave me trouble?
              </label>
              <textarea
                rows={2}
                value={eodConfused}
                onChange={(e) => setEodConfused(e.target.value)}
                placeholder="e.g. Back-substitution in Extended Euclidean took longer than expected..."
                className="w-full bg-[#272727] border border-[#333333] rounded-lg p-2.5 text-xs text-white focus:outline-hidden focus:border-cyan-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-neutral-300 font-semibold mb-1">
                  Could I explain topic without notes?
                </label>
                <select
                  value={eodExplainWithoutNotes}
                  onChange={(e) => setEodExplainWithoutNotes(e.target.value as 'Yes' | 'Partially' | 'No')}
                  className="w-full bg-[#272727] border border-[#333333] rounded-lg p-2 text-xs text-white focus:outline-hidden"
                >
                  <option value="Yes">Yes, clearly (Feynman test passed)</option>
                  <option value="Partially">Partially, needed small peek</option>
                  <option value="No">No, need revision tomorrow</option>
                </select>
              </div>

              <div>
                <label className="block text-neutral-300 font-semibold mb-1">
                  Total Study Time (Mins)
                </label>
                <input
                  type="number"
                  value={eodStudyMins}
                  onChange={(e) => setEodStudyMins(Number(e.target.value))}
                  className="w-full bg-[#272727] border border-[#333333] rounded-lg p-2 text-xs text-white focus:outline-hidden font-mono"
                />
              </div>

              <div>
                <label className="block text-neutral-300 font-semibold mb-1">
                  Coding Time (Mins)
                </label>
                <input
                  type="number"
                  value={eodCodingMins}
                  onChange={(e) => setEodCodingMins(Number(e.target.value))}
                  className="w-full bg-[#272727] border border-[#333333] rounded-lg p-2 text-xs text-white focus:outline-hidden font-mono"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[#2d2d2d]">
              {eodSaved ? (
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Logged to Scratchpad & Study Time!
                </span>
              ) : (
                <span className="text-neutral-500 font-mono text-[11px]">
                  Daily reflection prevents cognitive drift.
                </span>
              )}

              <button
                onClick={handleSaveEodReview}
                className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs transition-colors shadow-xs"
              >
                Save Review & Log Time
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quick Mistake Logger Modal */}
      {showMistakeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-[#202020] border border-[#2f2f2f] rounded-2xl w-full max-w-lg shadow-2xl p-5 space-y-4 text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-[#2e2e2e]">
              <h3 className="font-bold text-white flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                Log Mistake to Revision System (Codes A - K)
              </h3>
              <button
                onClick={() => setShowMistakeModal(false)}
                className="text-neutral-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div>
              <label className="block text-neutral-300 font-semibold mb-1">
                Question / Problem Text
              </label>
              <input
                type="text"
                value={mistakeQuestion}
                onChange={(e) => setMistakeQuestion(e.target.value)}
                placeholder="e.g. Extended Euclidean linear combination for gcd(428, 164)"
                className="w-full bg-[#272727] border border-[#333333] rounded-lg p-2 text-xs text-white focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-neutral-300 font-semibold mb-1">
                Mistake Code Classification
              </label>
              <select
                value={mistakeCode}
                onChange={(e) => setMistakeCode(e.target.value as any)}
                className="w-full bg-[#272727] border border-[#333333] rounded-lg p-2 text-xs text-white focus:outline-hidden"
              >
                <option value="A">Code A — Didn't understand concept</option>
                <option value="B">Code B — Forgot formula</option>
                <option value="C">Code C — Forgot definition</option>
                <option value="D">Code D — Calculation / arithmetic mistake</option>
                <option value="E">Code E — Logic mistake</option>
                <option value="F">Code F — Programming syntax mistake</option>
                <option value="G">Code G — Programming logic mistake</option>
                <option value="H">Code H — Misread question</option>
                <option value="I">Code I — Time-management problem</option>
                <option value="J">Code J — Careless mistake</option>
                <option value="K">Code K — Could explain verbally but couldn't write</option>
              </select>
            </div>

            <div>
              <label className="block text-neutral-300 font-semibold mb-1">
                Why did you fail? (Honest root cause)
              </label>
              <input
                type="text"
                value={mistakeWhy}
                onChange={(e) => setMistakeWhy(e.target.value)}
                placeholder="e.g. Expanded brackets with negative sign incorrectly."
                className="w-full bg-[#272727] border border-[#333333] rounded-lg p-2 text-xs text-white focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-neutral-300 font-semibold mb-1">
                Future Correction Action (Spaced Revision)
              </label>
              <input
                type="text"
                value={mistakeAction}
                onChange={(e) => setMistakeAction(e.target.value)}
                placeholder="e.g. Keep parentheses intact at each line and verify sum equals gcd."
                className="w-full bg-[#272727] border border-[#333333] rounded-lg p-2 text-xs text-white focus:outline-hidden"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setShowMistakeModal(false)}
                className="px-3 py-1.5 rounded-lg bg-[#272727] text-neutral-300"
              >
                Cancel
              </button>
              <button
                onClick={handleLogMistake}
                className="px-4 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold"
              >
                Save Mistake (+ R1 Task)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
