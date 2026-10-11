import React, { useState } from 'react';
import {
  FileQuestion,
  Search,
  Filter,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Award,
  BookOpen,
  ChevronDown,
  ChevronUp,
  AlertCircle
} from 'lucide-react';
import { useWorkspace } from '../context/WorkspaceContext';
import {
  FIVE_YEAR_QUESTION_BANK,
  SUBJECT_PAST_PAPER_ANALYSES
} from '../data/pastPapersData';
import { CSIT_SUBJECTS } from '../data/csitSyllabusData';
import { SubjectCode } from '../types';

export const FiveYearPyqView: React.FC = () => {
  const { state, togglePyq } = useWorkspace();
  const [selectedSubject, setSelectedSubject] = useState<SubjectCode>('CSC165');
  const [selectedYear, setSelectedYear] = useState<string>('2082');
  const [showAnalysis, setShowAnalysis] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const subjectData = CSIT_SUBJECTS.find((s) => s.code === selectedSubject);
  const subjectAnalysis = SUBJECT_PAST_PAPER_ANALYSES[selectedSubject];

  const matchingPapers = FIVE_YEAR_QUESTION_BANK.filter(
    (p) => p.subjectCode === selectedSubject && p.year === selectedYear
  );

  const currentPaper = matchingPapers[0] || FIVE_YEAR_QUESTION_BANK[0];

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16">
      {/* Header */}
      <div className="p-5 rounded-xl bg-[#202020] border border-[#2e2e2e] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
              TU IOST FIVE-YEAR BOARD ARCHIVE
            </span>
            <span className="text-xs text-neutral-400">• Hamro CSIT & EasyCSIT</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1">
            5-Year Board Question Bank (2078–2082)
          </h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            Full papers categorized by Subject → Year → Section → Unit → Topic.
          </p>
        </div>

        {/* External direct links */}
        <div className="flex items-center gap-2">
          <a
            href={subjectData?.hamroCsitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#272727] hover:bg-[#303030] text-blue-300 text-xs font-medium border border-blue-500/20 transition-colors shadow-xs"
          >
            <span>Hamro CSIT Sets</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href={subjectData?.easyCsitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#272727] hover:bg-[#303030] text-emerald-300 text-xs font-medium border border-emerald-500/20 transition-colors shadow-xs"
          >
            <span>EasyCSIT Bank</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Subject and Year Selectors */}
      <div className="p-4 rounded-xl bg-[#202020] border border-[#2e2e2e] space-y-3">
        {/* Subject Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {CSIT_SUBJECTS.map((subj) => {
            const isSelected = subj.code === selectedSubject;
            return (
              <button
                key={subj.code}
                onClick={() => setSelectedSubject(subj.code)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all shrink-0 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#2b2b2b] text-white border-b-2'
                    : 'bg-[#252525] text-neutral-400 hover:text-white'
                }`}
                style={{
                  borderBottomColor: isSelected ? subj.color : 'transparent'
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: subj.color }}
                />
                <span>{subj.code}: {subj.alias}</span>
              </button>
            );
          })}
        </div>

        {/* Year Pills */}
        <div className="flex items-center justify-between pt-2 border-t border-[#2c2c2c] text-xs">
          <div className="flex items-center gap-1.5">
            <span className="text-neutral-400 font-mono">Exam Year:</span>
            {['2082', '2081', '2080', '2079', '2078'].map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                  selectedYear === year
                    ? 'bg-emerald-500 text-black font-bold'
                    : 'bg-[#272727] text-neutral-300 hover:text-white'
                }`}
              >
                {year} TU
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowAnalysis(!showAnalysis)}
            className="text-cyan-400 hover:underline flex items-center gap-1 font-medium text-xs"
          >
            {showAnalysis ? 'Hide Frequency Analysis' : 'Show 5-Year Frequency Analysis'}
          </button>
        </div>
      </div>

      {/* 5-Year Past Paper Descriptive Frequency Analysis */}
      {showAnalysis && subjectAnalysis && (
        <div className="p-5 rounded-xl bg-[#202020] border border-[#2e2e2e] space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#2d2d2d]">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Historical Pattern Analysis for {selectedSubject} ({subjectAnalysis.yearsAnalyzed.join(', ')} TU)
            </h3>
            <span className="text-[10px] text-neutral-400 font-mono">
              Descriptive Historical Data
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {/* Repeatedly Observed */}
            <div className="p-3.5 rounded-lg bg-[#252525] border border-emerald-500/30 space-y-2">
              <div className="font-mono font-bold text-emerald-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Observed Frequently in Collected Papers:
              </div>
              <ul className="text-neutral-200 space-y-1 list-disc pl-5">
                {subjectAnalysis.repeatedlyObservedTopics.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>

            {/* Occasionally Observed */}
            <div className="p-3.5 rounded-lg bg-[#252525] border border-yellow-500/30 space-y-2">
              <div className="font-mono font-bold text-yellow-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                Observed Occasionally in Collected Papers:
              </div>
              <ul className="text-neutral-200 space-y-1 list-disc pl-5">
                {subjectAnalysis.occasionallyObservedTopics.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>

            {/* Observed Once */}
            <div className="p-3.5 rounded-lg bg-[#252525] border border-[#303030] space-y-1.5">
              <div className="font-mono font-bold text-neutral-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-neutral-400" />
                Observed Once:
              </div>
              <ul className="text-neutral-400 space-y-1 list-disc pl-5">
                {subjectAnalysis.observedOnceTopics.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>

            {/* Not Observed */}
            <div className="p-3.5 rounded-lg bg-[#252525] border border-[#303030] space-y-1.5">
              <div className="font-mono font-bold text-neutral-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-neutral-600" />
                Topics Not Observed in Collected 5-Year Papers:
              </div>
              <ul className="text-neutral-400 space-y-1 list-disc pl-5">
                {subjectAnalysis.unobservedTopicsInCollectedPapers.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#252525] border border-[#333333] flex items-start gap-2.5 text-xs text-neutral-300">
            <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white">TU Examiner Pattern Advice: </span>
              <span>{subjectAnalysis.keyAdvice}</span>
            </div>
          </div>
        </div>
      )}

      {/* Full Paper Structure Display */}
      {currentPaper && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-[#242424] border border-[#303030] flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2">
            <div>
              <span className="font-mono font-bold text-white text-sm">
                Tribhuvan University • Institute of Science and Technology (IOST)
              </span>
              <div className="text-neutral-400 mt-0.5">
                BSc CSIT Second Semester Examination — Year {currentPaper.year}
              </div>
            </div>
            <div className="flex items-center gap-2 font-mono">
              <span className="px-2.5 py-1 rounded bg-[#1e1e1e] text-neutral-300">
                Full Marks: {currentPaper.fullMarks}
              </span>
              <span className="px-2.5 py-1 rounded bg-[#1e1e1e] text-neutral-300">
                Pass Marks: {currentPaper.passMarks}
              </span>
              <span className="px-2.5 py-1 rounded bg-[#1e1e1e] text-neutral-300">
                Time: {currentPaper.timeHours} Hours
              </span>
            </div>
          </div>

          {/* Sections */}
          {currentPaper.sections.map((section, sIdx) => (
            <div
              key={sIdx}
              className="p-5 rounded-xl bg-[#202020] border border-[#2e2e2e] space-y-4"
            >
              <div className="pb-2 border-b border-[#2d2d2d] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h4 className="text-sm font-bold text-white">{section.sectionName}</h4>
                  <p className="text-xs text-neutral-400">{section.instructions}</p>
                </div>
                <span className="font-mono text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                  Section Marks: {section.totalMarks}
                </span>
              </div>

              {/* Questions in Section */}
              <div className="space-y-3">
                {section.questions.map((q, qIdx) => {
                  const isSolved = !!state.solvedPyqs[q.id];

                  return (
                    <div
                      key={q.id}
                      className={`p-4 rounded-xl border transition-all space-y-3 ${
                        isSolved
                          ? 'bg-[#1b241d] border-emerald-500/30'
                          : 'bg-[#252525] border-[#303030] hover:border-neutral-500'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-mono font-bold text-neutral-400">
                            Q{qIdx + 1}.
                          </span>
                          <span className="font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded text-[11px]">
                            Unit {q.unit} • {q.topic}
                          </span>
                          <span className="font-mono text-amber-300 font-bold bg-[#1e1e1e] px-2 py-0.5 rounded text-[11px]">
                            {q.marks} Marks
                          </span>
                          <span className="font-mono text-neutral-400 bg-[#1e1e1e] px-1.5 py-0.5 rounded text-[10px]">
                            {q.questionType}
                          </span>
                        </div>

                        <button
                          onClick={() => togglePyq(q.id)}
                          className={`px-3 py-1 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 ${
                            isSolved
                              ? 'bg-emerald-500 text-black shadow-xs'
                              : 'bg-[#2e2e2e] hover:bg-[#383838] text-neutral-300 border border-[#383838]'
                          }`}
                        >
                          {isSolved ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Solved ✓ (+25 XP)</span>
                            </>
                          ) : (
                            <span>Mark as Solved</span>
                          )}
                        </button>
                      </div>

                      <div className="text-sm font-medium text-white leading-relaxed whitespace-pre-wrap">
                        {q.question}
                      </div>

                      {q.solutionHint && (
                        <div className="p-3 rounded-lg bg-[#1c1c1c] border border-[#2b2b2b] text-xs space-y-1">
                          <div className="text-cyan-400 font-bold font-mono text-[11px] flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5" />
                            TU Exam Solution Guideline & Rubric:
                          </div>
                          <p className="text-neutral-200 leading-relaxed font-sans">
                            {q.solutionHint}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
