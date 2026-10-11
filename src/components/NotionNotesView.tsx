import React, { useState } from 'react';
import {
  FileText,
  Plus,
  Pin,
  Trash2,
  Copy,
  Check,
  Search,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { useWorkspace } from '../context/WorkspaceContext';
import { CSIT_SUBJECTS } from '../data/csitSyllabusData';
import { SubjectCode, UserNote } from '../types';

export const NotionNotesView: React.FC = () => {
  const { state, addNote, updateNote, deleteNote } = useWorkspace();
  const [selectedNoteId, setSelectedNoteId] = useState<string>(
    state.notes[0]?.id || ''
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Form states for creating or editing
  const [title, setTitle] = useState('');
  const [subjectCode, setSubjectCode] = useState<SubjectCode | 'GENERAL'>('GENERAL');
  const [content, setContent] = useState('');
  const [tagsInput, setTagsInput] = useState('');

  const selectedNote = state.notes.find((n) => n.id === selectedNoteId) || state.notes[0];

  const filteredNotes = state.notes.filter((n) => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        n.title.toLowerCase().includes(q) ||
        n.content.toLowerCase().includes(q) ||
        n.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return true;
  });

  const handleStartNewNote = () => {
    setTitle('Untitled Study Note');
    setSubjectCode('GENERAL');
    setContent('# New Note\n\nWrite your thoughts, proofs, or C++ snippets here...');
    setTagsInput('CSIT, Revision');
    setIsEditing(true);
  };

  const handleSaveNote = () => {
    if (!title.trim()) return;
    const tags = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    addNote({
      title,
      subjectCode,
      content,
      tags,
      isPinned: false,
    });

    setIsEditing(false);
  };

  const handleCopyContent = () => {
    if (selectedNote) {
      navigator.clipboard.writeText(selectedNote.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      {/* Header */}
      <div className="p-5 rounded-xl bg-[#202020] border border-[#2e2e2e] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
              EXAM CHEAT SHEETS & NOTION NOTES
            </span>
            <span className="text-xs text-neutral-400">• Scratchpad</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1">Study Notes & Formula Sheets</h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            Quick reference summaries for derivations, algorithm steps, and C++ code templates.
          </p>
        </div>

        <button
          onClick={handleStartNewNote}
          className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition-colors shadow-xs"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>New Note</span>
        </button>
      </div>

      {/* Main 2-Column Notion Notes Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: Notes Navigation Sidebar (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          {/* Search notes */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#202020] border border-[#2e2e2e] rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-cyan-500 transition-colors"
            />
          </div>

          <div className="space-y-1.5 max-h-[600px] overflow-y-auto pr-1">
            {filteredNotes.map((note) => {
              const isSelected = note.id === selectedNote?.id;
              const subject = CSIT_SUBJECTS.find((s) => s.code === note.subjectCode);

              return (
                <div
                  key={note.id}
                  onClick={() => {
                    setSelectedNoteId(note.id);
                    setIsEditing(false);
                  }}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-[#2b2b2b] border-cyan-500/50 shadow-xs'
                      : 'bg-[#202020] border-[#2e2e2e] hover:border-neutral-500'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span
                      className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded"
                      style={{
                        backgroundColor: subject ? `${subject.color}20` : '#333333',
                        color: subject ? subject.color : '#aaaaaa',
                      }}
                    >
                      {note.subjectCode}
                    </span>
                    {note.isPinned && <Pin className="w-3 h-3 text-amber-400 fill-amber-400" />}
                  </div>

                  <div className="text-xs font-semibold text-white truncate">{note.title}</div>

                  <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                    {note.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-1.5 py-0.2 rounded bg-[#252525] text-neutral-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Note Content / Editor (8 cols) */}
        <div className="lg:col-span-8">
          {isEditing ? (
            <div className="p-5 rounded-xl bg-[#202020] border border-[#2e2e2e] space-y-4">
              <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                Create New Study Note
              </div>

              <div>
                <label className="block text-xs text-neutral-400 mb-1">Note Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-[#272727] border border-[#333333] rounded-lg px-3 py-2 text-sm text-white focus:outline-hidden focus:border-cyan-500"
                  placeholder="e.g. 8085 Timing Diagrams Masterclass"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">Subject</label>
                  <select
                    value={subjectCode}
                    onChange={(e) => setSubjectCode(e.target.value as SubjectCode | 'GENERAL')}
                    className="w-full bg-[#272727] border border-[#333333] rounded-lg px-3 py-2 text-xs text-white focus:outline-hidden"
                  >
                    <option value="GENERAL">General / Mindset</option>
                    {CSIT_SUBJECTS.map((s) => (
                      <option key={s.code} value={s.code}>
                        {s.code}: {s.alias}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-neutral-400 mb-1">Tags (Comma-separated)</label>
                  <input
                    type="text"
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    className="w-full bg-[#272727] border border-[#333333] rounded-lg px-3 py-2 text-xs text-white focus:outline-hidden"
                    placeholder="Formulas, High-yield, Code"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-neutral-400 mb-1">Content (Markdown supported)</label>
                <textarea
                  rows={14}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full bg-[#272727] border border-[#333333] rounded-lg p-3 text-xs text-white font-mono leading-relaxed focus:outline-hidden focus:border-cyan-500 resize-y"
                  placeholder="Write your study notes..."
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-3 py-1.5 rounded-lg bg-[#272727] hover:bg-[#303030] text-neutral-300 text-xs transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveNote}
                  className="px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs transition-colors shadow-xs"
                >
                  Save Note
                </button>
              </div>
            </div>
          ) : selectedNote ? (
            <div className="p-6 rounded-xl bg-[#202020] border border-[#2e2e2e] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#2e2e2e]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                      {selectedNote.subjectCode}
                    </span>
                    <span className="text-[11px] text-neutral-400">
                      Updated {new Date(selectedNote.updatedAt).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">{selectedNote.title}</h3>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleCopyContent}
                    className="p-2 rounded-lg bg-[#272727] hover:bg-[#303030] text-neutral-300 transition-colors"
                    title="Copy Markdown Content"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>

                  <button
                    onClick={() => updateNote(selectedNote.id, { isPinned: !selectedNote.isPinned })}
                    className={`p-2 rounded-lg transition-colors ${
                      selectedNote.isPinned
                        ? 'bg-amber-500/20 text-amber-300'
                        : 'bg-[#272727] hover:bg-[#303030] text-neutral-300'
                    }`}
                    title="Pin Note"
                  >
                    <Pin className="w-4 h-4" />
                  </button>

                  {/* Allow deleting non-initial notes */}
                  {selectedNote.id.startsWith('note-') &&
                    !selectedNote.id.includes('manifesto') &&
                    !selectedNote.id.includes('csc162') &&
                    !selectedNote.id.includes('csc161') &&
                    !selectedNote.id.includes('mth163') &&
                    !selectedNote.id.includes('sta164') && (
                      <button
                        onClick={() => deleteNote(selectedNote.id)}
                        className="p-2 rounded-lg bg-[#272727] hover:bg-red-500/20 text-neutral-300 hover:text-red-400 transition-colors"
                        title="Delete Note"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                </div>
              </div>

              {/* Tags */}
              <div className="flex items-center gap-1.5 flex-wrap">
                {selectedNote.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2 py-0.5 rounded-full bg-[#282828] text-neutral-400 border border-[#333333]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Formatted Content Body */}
              <div className="pt-2 text-xs leading-relaxed text-neutral-200 font-sans space-y-3 whitespace-pre-wrap font-mono bg-[#1b1b1b] p-4 rounded-lg border border-[#2b2b2b] overflow-x-auto">
                {selectedNote.content}
              </div>
            </div>
          ) : (
            <div className="p-8 text-center rounded-xl bg-[#202020] border border-[#2e2e2e] text-neutral-400 text-xs">
              No notes selected.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
