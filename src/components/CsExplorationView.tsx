import React, { useState } from 'react';
import {
  Compass,
  Sparkles,
  ExternalLink,
  BookOpen,
  Code2,
  Cpu,
  Shield,
  Layers,
  Search,
  ChevronRight
} from 'lucide-react';
import { CS_EXPLORATION_MAP } from '../data/projectsAndQuests';

export const CsExplorationView: React.FC = () => {
  const [selectedFieldId, setSelectedFieldId] = useState<string>(CS_EXPLORATION_MAP[0]?.id || '');
  const [searchQuery, setSearchQuery] = useState('');

  const selectedField =
    CS_EXPLORATION_MAP.find((f) => f.id === selectedFieldId) || CS_EXPLORATION_MAP[0];

  const filteredFields = CS_EXPLORATION_MAP.filter((f) => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        f.name.toLowerCase().includes(q) ||
        f.whatIsIt.toLowerCase().includes(q) ||
        f.toolsAndLanguages.some((t) => t.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16">
      {/* Header */}
      <div className="p-5 rounded-xl bg-[#202020] border border-[#2e2e2e] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
              LONG-TERM CAREER HORIZONS
            </span>
            <span className="text-xs text-neutral-400">• Exploration Tree</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1">
            20 Computer Science Fields Exploration Map
          </h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            Discover where your Semester II subjects lead in the software industry and academic research.
          </p>
        </div>
      </div>

      {/* 2-Column Exploration Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: Fields List (4 cols) */}
        <div className="lg:col-span-4 space-y-2.5">
          <input
            type="text"
            placeholder="Filter CS fields..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#202020] border border-[#2e2e2e] rounded-lg px-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-cyan-500"
          />

          <div className="space-y-1 max-h-[600px] overflow-y-auto pr-1">
            {filteredFields.map((field) => {
              const isSelected = field.id === selectedField?.id;
              return (
                <button
                  key={field.id}
                  onClick={() => setSelectedFieldId(field.id)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-lg text-xs text-left transition-all ${
                    isSelected
                      ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-bold'
                      : 'bg-[#202020] border border-[#2a2a2a] text-neutral-300 hover:bg-[#252525] hover:text-white'
                  }`}
                >
                  <span className="truncate">{field.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 shrink-0 text-neutral-500" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Field Deep Dive (8 cols) */}
        <div className="lg:col-span-8">
          {selectedField ? (
            <div className="p-6 rounded-xl bg-[#202020] border border-[#2e2e2e] space-y-5 text-xs">
              <div className="pb-3 border-b border-[#2d2d2d]">
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded font-bold">
                  CS FIELD SPECIFICATION
                </span>
                <h3 className="text-xl font-bold text-white mt-1">{selectedField.name}</h3>
              </div>

              {/* What and Why */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-lg bg-[#252525] border border-[#303030] space-y-1">
                  <div className="font-mono text-cyan-400 font-bold text-[11px]">What is it?</div>
                  <p className="text-neutral-200 leading-relaxed">{selectedField.whatIsIt}</p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#252525] border border-[#303030] space-y-1">
                  <div className="font-mono text-amber-400 font-bold text-[11px]">Why does it matter?</div>
                  <p className="text-neutral-200 leading-relaxed">{selectedField.whyDoesItMatter}</p>
                </div>
              </div>

              {/* Connection to CSIT Sem II */}
              <div className="p-3.5 rounded-lg bg-cyan-950/20 border border-cyan-800/30 space-y-1">
                <div className="font-mono text-cyan-300 font-bold text-[11px] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Direct Connection to Your Semester II Course:
                </div>
                <p className="text-neutral-200 leading-relaxed">
                  {selectedField.connectionToCsitSem2}
                </p>
              </div>

              {/* Projects to Build */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-lg bg-[#252525] border border-[#303030] space-y-1">
                  <div className="font-mono text-emerald-400 font-bold text-[11px]">
                    🟢 Beginner Project:
                  </div>
                  <p className="text-neutral-200 leading-relaxed">{selectedField.beginnerProject}</p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#252525] border border-[#303030] space-y-1">
                  <div className="font-mono text-purple-400 font-bold text-[11px]">
                    🟣 Intermediate Project:
                  </div>
                  <p className="text-neutral-200 leading-relaxed">{selectedField.intermediateProject}</p>
                </div>
              </div>

              {/* Tools & Resources */}
              <div className="p-3.5 rounded-lg bg-[#252525] border border-[#303030] space-y-2">
                <div className="font-mono text-neutral-300 font-bold text-[11px]">
                  Tools, Languages & Career Roles:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedField.toolsAndLanguages.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-[#1e1e1e] border border-[#333333] font-mono text-[11px] text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                  {selectedField.careerRoles.map((r, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-[11px]"
                    >
                      Role: {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-neutral-400 text-xs">
              Select a field to explore.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
