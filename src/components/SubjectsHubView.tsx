import React, { useState } from 'react';
import {
  BookOpen,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Award,
  Sparkles,
  CheckCircle2,
  Circle,
  BrainCircuit,
  Code2,
  Cpu,
  Sigma,
  BarChart3,
  HelpCircle
} from 'lucide-react';
import { useWorkspace } from '../context/WorkspaceContext';
import { CSIT_SUBJECTS } from '../data/csitSyllabusData';
import { SubjectCode } from '../types';

interface SubjectsHubViewProps {
  selectedSubject: SubjectCode;
  setSelectedSubject: (code: SubjectCode) => void;
}

export const SubjectsHubView: React.FC<SubjectsHubViewProps> = ({
  selectedSubject,
  setSelectedSubject,
}) => {
  const { state, toggleTopic, togglePyq } = useWorkspace();
  const [expandedUnit, setExpandedUnit] = useState<number | null>(1);

  const currentSubject =
    CSIT_SUBJECTS.find((s) => s.code === selectedSubject) || CSIT_SUBJECTS[0];

  const getSubjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-blue-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-amber-400" />;
      case 'Sigma':
        return <Sigma className="w-5 h-5 text-purple-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-pink-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      {/* 5-Subject Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 p-1.5 rounded-xl bg-[#202020] border border-[#2e2e2e]">
        {CSIT_SUBJECTS.map((subj) => {
          const isSelected = subj.code === selectedSubject;
          return (
            <button
              key={subj.code}
              onClick={() => {
                setSelectedSubject(subj.code);
                setExpandedUnit(1);
              }}
              className={`p-3 rounded-lg text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#2b2b2b] text-white shadow-md border-b-2'
                  : 'text-neutral-400 hover:bg-[#252525] hover:text-neutral-200'
              }`}
              style={{
                borderBottomColor: isSelected ? subj.color : 'transparent',
              }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-xs font-bold">{subj.code}</span>
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: subj.color }}
                />
              </div>
              <div className="text-xs font-semibold truncate text-neutral-200">{subj.alias}</div>
            </button>
          );
        })}
      </div>

      {/* Selected Subject Hero Header */}
      <div className="p-6 rounded-xl bg-[#202020] border border-[#2e2e2e] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${currentSubject.color}15` }}
            >
              {getSubjectIcon(currentSubject.icon)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span
                  className="px-2 py-0.5 rounded text-xs font-mono font-bold"
                  style={{
                    backgroundColor: `${currentSubject.color}20`,
                    color: currentSubject.color,
                  }}
                >
                  {currentSubject.code}
                </span>
                <span className="text-xs text-neutral-400 font-mono">
                  {currentSubject.credits} Credit Hours (45 Lecture Hours)
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {currentSubject.name}
              </h2>
            </div>
          </div>

          {/* External Links to Hamro CSIT & Easy CSIT */}
          <div className="flex items-center gap-2">
            <a
              href={currentSubject.hamroCsitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#272727] hover:bg-[#303030] text-blue-300 text-xs font-medium border border-blue-500/20 transition-colors shadow-xs"
            >
              <span>Hamro CSIT</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={currentSubject.easyCsitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#272727] hover:bg-[#303030] text-emerald-300 text-xs font-medium border border-emerald-500/20 transition-colors shadow-xs"
            >
              <span>Easy CSIT</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <p className="text-xs text-neutral-300 leading-relaxed max-w-3xl">
          {currentSubject.description}
        </p>

        {/* TU Marks Distribution Pills */}
        <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="px-2.5 py-1 rounded bg-[#272727] text-neutral-300 border border-[#333333]">
            Full Marks: <strong className="text-white">{currentSubject.fullMarks}</strong>
          </span>
          <span className="px-2.5 py-1 rounded bg-[#272727] text-neutral-300 border border-[#333333]">
            Theory: <strong className="text-cyan-400">{currentSubject.theoryMarks}</strong>
          </span>
          {currentSubject.practicalMarks > 0 && (
            <span className="px-2.5 py-1 rounded bg-[#272727] text-neutral-300 border border-[#333333]">
              Practical: <strong className="text-emerald-400">{currentSubject.practicalMarks}</strong>
            </span>
          )}
          <span className="px-2.5 py-1 rounded bg-[#272727] text-neutral-300 border border-[#333333]">
            Internal: <strong className="text-purple-400">{currentSubject.internalMarks}</strong>
          </span>
          <span className="px-2.5 py-1 rounded bg-[#272727] text-neutral-300 border border-[#333333]">
            Pass Marks: <strong className="text-amber-400">{currentSubject.passMarks}</strong>
          </span>
        </div>

        {/* TU Exam Strategy Callout */}
        <div className="mt-3 p-3.5 rounded-lg bg-[#262626] border border-[#353535] space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            TU Exam Cracking Blueprint for {currentSubject.alias}
          </div>
          <ul className="text-xs text-neutral-300 space-y-1 pl-5 list-disc">
            {currentSubject.examStrategy.map((strat, i) => (
              <li key={i}>{strat}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Units Syllabus Accordion */}
      <div className="space-y-3">
        <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider flex items-center justify-between">
          <span>Syllabus Units & Checklists ({currentSubject.units.length} Units)</span>
          <span className="text-[11px] text-neutral-500">Click unit to expand details</span>
        </div>

        {currentSubject.units.map((unit) => {
          const isExpanded = expandedUnit === unit.unitNumber;

          return (
            <div
              key={unit.unitNumber}
              className="rounded-xl border border-[#2e2e2e] bg-[#202020] overflow-hidden transition-all"
            >
              {/* Unit Header */}
              <div
                onClick={() => setExpandedUnit(isExpanded ? null : unit.unitNumber)}
                className="p-4 flex items-center justify-between cursor-pointer select-none hover:bg-[#252525] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0"
                    style={{
                      backgroundColor: `${currentSubject.color}20`,
                      color: currentSubject.color,
                    }}
                  >
                    U{unit.unitNumber}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{unit.title}</h3>
                    <div className="flex items-center gap-3 text-[11px] text-neutral-400 font-mono mt-0.5">
                      <span>{unit.hours} Lecture Hours</span>
                      <span>•</span>
                      <span>~{unit.weightageMarks} TU Marks Weightage</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-400 font-mono hidden sm:inline">
                    {unit.topics.length} Sub-topics
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-neutral-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-neutral-400" />
                  )}
                </div>
              </div>

              {/* Unit Body */}
              {isExpanded && (
                <div className="px-5 pb-5 pt-2 border-t border-[#2a2a2a] space-y-4 text-xs">
                  {/* Key Formulas / Concept callout if present */}
                  {unit.keyFormulasOrConcepts && unit.keyFormulasOrConcepts.length > 0 && (
                    <div className="p-3 rounded-lg bg-[#272727] border border-[#353535] space-y-1.5">
                      <div className="text-[11px] font-semibold text-amber-300 font-mono flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-amber-400" />
                        Key Formulas & Identities
                      </div>
                      <div className="space-y-1 font-mono text-[11px] text-neutral-200">
                        {unit.keyFormulasOrConcepts.map((f, idx) => (
                          <div key={idx} className="bg-[#1e1e1e] px-2.5 py-1 rounded">
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Topics Checklist */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                      Topics Checklist (Track Your Reading)
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {unit.topics.map((topic, idx) => {
                        const topicKey = `${currentSubject.code}-u${unit.unitNumber}-t${idx}`;
                        const isDone = !!state.completedTopics[topicKey];

                        return (
                          <div
                            key={idx}
                            onClick={() => toggleTopic(topicKey)}
                            className={`p-2.5 rounded-lg border transition-all cursor-pointer flex items-start gap-2.5 select-none ${
                              isDone
                                ? 'bg-[#1b2b23] border-emerald-500/30 text-neutral-400 line-through'
                                : 'bg-[#242424] border-[#303030] text-neutral-200 hover:border-neutral-500'
                            }`}
                          >
                            <div className="mt-0.5">
                              {isDone ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                              ) : (
                                <Circle className="w-4 h-4 text-neutral-500 shrink-0" />
                              )}
                            </div>
                            <span className="text-xs leading-relaxed">{topic}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Past Year Questions (PYQs) for this Unit */}
                  {unit.importantPYQs.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-[#2a2a2a]">
                      <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider flex items-center justify-between">
                        <span>High-Yield TU Past Exam Questions (Hamro / Easy CSIT)</span>
                        <span className="text-cyan-400 font-mono text-[11px]">
                          {unit.importantPYQs.length} Solved PYQs
                        </span>
                      </div>

                      <div className="space-y-2.5">
                        {unit.importantPYQs.map((q) => {
                          const isSolved = !!state.solvedPyqs[q.id];

                          return (
                            <div
                              key={q.id}
                              className={`p-3.5 rounded-lg border space-y-2 ${
                                isSolved
                                  ? 'bg-[#1b241d] border-emerald-500/30'
                                  : 'bg-[#242424] border-[#303030]'
                              }`}
                            >
                              <div className="flex items-center justify-between text-[11px]">
                                <div className="flex items-center gap-2">
                                  <span className="font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                                    {q.year}
                                  </span>
                                  <span className="font-mono text-neutral-400">
                                    {q.marks} Marks
                                  </span>
                                  <span className="px-1.5 py-0.5 rounded bg-[#2e2e2e] text-neutral-300 font-mono text-[10px]">
                                    {q.frequency} Frequency
                                  </span>
                                </div>

                                <button
                                  onClick={() => togglePyq(q.id)}
                                  className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors flex items-center gap-1 ${
                                    isSolved
                                      ? 'bg-emerald-500/20 text-emerald-300'
                                      : 'bg-[#2e2e2e] hover:bg-[#383838] text-neutral-300'
                                  }`}
                                >
                                  {isSolved ? 'Solved ✓' : 'Mark Solved'}
                                </button>
                              </div>

                              <p className="text-neutral-200 font-medium leading-relaxed">
                                {q.question}
                              </p>

                              {q.solutionHint && (
                                <div className="p-2.5 rounded bg-[#1c1c1c] border border-[#2b2b2b] text-[11px] text-neutral-300">
                                  <span className="text-cyan-400 font-semibold">TU Solution Guide: </span>
                                  <span>{q.solutionHint}</span>
                                </div>
                              )}

                              <div className="flex items-center justify-between text-[10px] text-neutral-400 pt-1">
                                <span>Source: {q.source}</span>
                                {q.sourceUrl && (
                                  <a
                                    href={q.sourceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-400 hover:underline flex items-center gap-0.5"
                                  >
                                    Open Paper on Portal <ExternalLink className="w-2.5 h-2.5" />
                                  </a>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
