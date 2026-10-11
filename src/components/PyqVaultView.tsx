import React, { useState } from 'react';
import {
  FileQuestion,
  Search,
  Filter,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  BookOpen,
  Award
} from 'lucide-react';
import { useWorkspace } from '../context/WorkspaceContext';
import { ALL_PYQS } from '../data/pyqDatabase';
import { CSIT_SUBJECTS } from '../data/csitSyllabusData';
import { SubjectCode } from '../types';

export const PyqVaultView: React.FC = () => {
  const { state, togglePyq } = useWorkspace();
  const [subjectFilter, setSubjectFilter] = useState<SubjectCode | 'ALL'>('ALL');
  const [yearFilter, setYearFilter] = useState<string>('ALL');
  const [typeFilter, setTypeFilter] = useState<string>('ALL');
  const [solvedFilter, setSolvedFilter] = useState<'ALL' | 'SOLVED' | 'UNSOLVED'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPyqs = ALL_PYQS.filter((q) => {
    if (subjectFilter !== 'ALL' && q.subjectCode !== subjectFilter) return false;
    if (yearFilter !== 'ALL' && !q.year.includes(yearFilter)) return false;
    if (typeFilter !== 'ALL' && q.type !== typeFilter) return false;

    const isSolved = !!state.solvedPyqs[q.id];
    if (solvedFilter === 'SOLVED' && !isSolved) return false;
    if (solvedFilter === 'UNSOLVED' && isSolved) return false;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const matchQ = q.question.toLowerCase().includes(query);
      const matchHint = q.solutionHint?.toLowerCase().includes(query);
      const matchSubject = q.subjectCode.toLowerCase().includes(query);
      return matchQ || matchHint || matchSubject;
    }

    return true;
  });

  const totalSolved = Object.values(state.solvedPyqs).filter(Boolean).length;

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      {/* Header */}
      <div className="p-5 rounded-xl bg-[#202020] border border-[#2e2e2e] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
              TU IOST PAST QUESTION BANK
            </span>
            <span className="text-xs text-neutral-400">• Hamro CSIT & Easy CSIT</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1">
            BSc CSIT 2nd Sem Past Year Question (PYQ) Vault
          </h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            Curated high-frequency exam questions with TU step-by-step solution breakdowns.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="p-3 rounded-lg bg-[#272727] border border-[#333333] text-right">
            <div className="text-[11px] text-neutral-400">Solved Status</div>
            <div className="text-sm font-mono font-bold text-emerald-400">
              {totalSolved} / {ALL_PYQS.length} Solved
            </div>
          </div>
        </div>
      </div>

      {/* External Paper Portals Fast Access */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a
          href="https://hamrocsit.com/semester/second"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-lg bg-[#242424] border border-[#303030] hover:border-blue-500/50 transition-colors flex items-center justify-between group"
        >
          <div>
            <div className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
              <span>Hamro CSIT — 2nd Semester Full Solution Sets</span>
            </div>
            <div className="text-[11px] text-neutral-400 mt-0.5">
              Complete scanned PDF solutions, model question papers 2075-2080
            </div>
          </div>
          <ExternalLink className="w-4 h-4 text-blue-400 shrink-0" />
        </a>

        <a
          href="https://easycsit.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-lg bg-[#242424] border border-[#303030] hover:border-emerald-500/50 transition-colors flex items-center justify-between group"
        >
          <div>
            <div className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <span>Easy CSIT — Categorized Board Questions</span>
            </div>
            <div className="text-[11px] text-neutral-400 mt-0.5">
              Subject-wise & chapter-wise question breakdowns with video lectures
            </div>
          </div>
          <ExternalLink className="w-4 h-4 text-emerald-400 shrink-0" />
        </a>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-xl bg-[#202020] border border-[#2e2e2e] space-y-3">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g. 'Dijkstra', 'Timing diagram', 'Gram-Schmidt', 'Bayes', 'Virtual base')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#272727] border border-[#333333] rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-cyan-500 transition-colors"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
          {/* Subject Filter */}
          <div className="flex items-center gap-1">
            <span className="text-neutral-400 text-[11px]">Subject:</span>
            <select
              value={subjectFilter}
              onChange={(e) => setSubjectFilter(e.target.value as SubjectCode | 'ALL')}
              className="bg-[#272727] border border-[#333333] text-neutral-200 text-xs rounded-md px-2 py-1 focus:outline-hidden"
            >
              <option value="ALL">All 5 Subjects</option>
              {CSIT_SUBJECTS.map((s) => (
                <option key={s.code} value={s.code}>
                  {s.code}: {s.alias}
                </option>
              ))}
            </select>
          </div>

          {/* Year Filter */}
          <div className="flex items-center gap-1">
            <span className="text-neutral-400 text-[11px]">Year:</span>
            <select
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
              className="bg-[#272727] border border-[#333333] text-neutral-200 text-xs rounded-md px-2 py-1 focus:outline-hidden"
            >
              <option value="ALL">All Years</option>
              <option value="2080">2080 TU</option>
              <option value="2079">2079 TU</option>
              <option value="2078">2078 TU</option>
              <option value="2077">2077 TU</option>
            </select>
          </div>

          {/* Type Filter */}
          <div className="flex items-center gap-1">
            <span className="text-neutral-400 text-[11px]">Type:</span>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="bg-[#272727] border border-[#333333] text-neutral-200 text-xs rounded-md px-2 py-1 focus:outline-hidden"
            >
              <option value="ALL">All Types</option>
              <option value="Numerical">Numerical</option>
              <option value="Theory">Theory</option>
              <option value="Code/Assembly">Code / Assembly</option>
              <option value="Derivation">Derivation</option>
            </select>
          </div>

          {/* Solved Status */}
          <div className="flex items-center gap-1">
            <span className="text-neutral-400 text-[11px]">Status:</span>
            <select
              value={solvedFilter}
              onChange={(e) => setSolvedFilter(e.target.value as 'ALL' | 'SOLVED' | 'UNSOLVED')}
              className="bg-[#272727] border border-[#333333] text-neutral-200 text-xs rounded-md px-2 py-1 focus:outline-hidden"
            >
              <option value="ALL">All Status</option>
              <option value="UNSOLVED">Unsolved Only</option>
              <option value="SOLVED">Solved Only</option>
            </select>
          </div>
        </div>
      </div>

      {/* Question Cards List */}
      <div className="space-y-3">
        {filteredPyqs.length === 0 ? (
          <div className="p-8 text-center rounded-xl bg-[#202020] border border-[#2e2e2e] text-neutral-400 text-xs">
            No past questions match your filters. Try clearing search or choosing "All 5 Subjects".
          </div>
        ) : (
          filteredPyqs.map((q) => {
            const isSolved = !!state.solvedPyqs[q.id];
            const subject = CSIT_SUBJECTS.find((s) => s.code === q.subjectCode);

            return (
              <div
                key={q.id}
                className={`p-4 rounded-xl border transition-all space-y-3 ${
                  isSolved
                    ? 'bg-[#1b221d] border-emerald-500/30'
                    : 'bg-[#202020] border-[#2e2e2e] hover:border-neutral-500'
                }`}
              >
                {/* Meta Row */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className="px-2 py-0.5 rounded font-mono font-bold text-[11px]"
                      style={{
                        backgroundColor: `${subject?.color || '#3b82f6'}20`,
                        color: subject?.color || '#3b82f6',
                      }}
                    >
                      {q.subjectCode} • Unit {q.unit}
                    </span>

                    <span className="font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded text-[11px]">
                      {q.year}
                    </span>

                    <span className="font-mono text-neutral-300 bg-[#292929] px-2 py-0.5 rounded text-[11px]">
                      {q.marks} Marks
                    </span>

                    <span className="px-1.5 py-0.5 rounded bg-[#292929] text-neutral-400 font-mono text-[10px]">
                      {q.type}
                    </span>

                    {(q.frequency === 'Frequently Observed' || q.frequency === 'Model Question') && (
                      <span className="px-1.5 py-0.5 rounded bg-red-500/20 text-red-300 font-mono text-[10px] font-semibold">
                        ★ High-Frequency TU Topic
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => togglePyq(q.id)}
                    className={`px-3 py-1 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      isSolved
                        ? 'bg-emerald-500 text-black shadow-xs'
                        : 'bg-[#2a2a2a] hover:bg-[#333333] text-neutral-300 border border-[#383838]'
                    }`}
                  >
                    {isSolved ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Solved ✓</span>
                      </>
                    ) : (
                      <span>Mark Solved</span>
                    )}
                  </button>
                </div>

                {/* Question Text */}
                <div className="text-sm font-medium text-white leading-relaxed">
                  {q.question}
                </div>

                {/* Solution Hint */}
                {q.solutionHint && (
                  <div className="p-3 rounded-lg bg-[#272727] border border-[#333333] text-xs text-neutral-300 space-y-1">
                    <div className="text-[11px] font-semibold text-cyan-400 font-mono flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      TU Exam Solution Approach & Steps:
                    </div>
                    <p className="leading-relaxed text-neutral-200">{q.solutionHint}</p>
                  </div>
                )}

                {/* Source footer */}
                <div className="flex items-center justify-between text-[11px] text-neutral-400 pt-1 border-t border-[#2a2a2a]">
                  <span>Source Reference: {q.source}</span>
                  {q.sourceUrl && (
                    <a
                      href={q.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      View on {q.source} <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
