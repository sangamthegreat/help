import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  Download,
  Upload,
  AlertTriangle,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { useWorkspace } from '../context/WorkspaceContext';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  const {
    exportToNotionMarkdown,
    exportStateJson,
    importStateJson,
    resetAllProgress,
  } = useWorkspace();

  const [copied, setCopied] = useState(false);
  const [importText, setImportText] = useState('');
  const [importStatus, setImportStatus] = useState<string | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);

  if (!isOpen) return null;

  const handleCopyNotionMarkdown = () => {
    const md = exportToNotionMarkdown();
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadJson = () => {
    const json = exportStateJson();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `winter-arc-bsc-csit-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImportJson = () => {
    if (!importText.trim()) return;
    const success = importStateJson(importText);
    if (success) {
      setImportStatus('Successfully restored progress!');
      setTimeout(() => {
        setImportStatus(null);
        onClose();
      }, 1500);
    } else {
      setImportStatus('Invalid JSON data. Please verify the backup text.');
    }
  };

  const handleReset = () => {
    resetAllProgress();
    setConfirmReset(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div className="bg-[#202020] border border-[#2f2f2f] rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 border-b border-[#2e2e2e] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">❄️</span>
            <h2 className="text-base font-bold text-white">Export & Backup Workspace</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-neutral-400 hover:text-white hover:bg-[#2b2b2b] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-6 overflow-y-auto text-xs">
          {/* Option 1: Notion Markdown */}
          <div className="p-4 rounded-xl bg-[#252525] border border-[#333333] space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  Export to Notion Markdown
                </h3>
                <p className="text-neutral-400 mt-0.5 text-[11px]">
                  Copies ready-to-paste markdown formatted for Notion with headings, checklists, and 40-day tables.
                </p>
              </div>

              <button
                onClick={handleCopyNotionMarkdown}
                className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs transition-colors flex items-center gap-1.5 shrink-0 shadow-xs"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy to Clipboard</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Option 2: JSON Backup */}
          <div className="p-4 rounded-xl bg-[#252525] border border-[#333333] space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-white flex items-center gap-1.5">
                  <Download className="w-4 h-4 text-emerald-400" />
                  Download JSON Progress File
                </h3>
                <p className="text-neutral-400 mt-0.5 text-[11px]">
                  Saves your complete checklist, solved PYQs, notes, and study minutes locally.
                </p>
              </div>

              <button
                onClick={handleDownloadJson}
                className="px-3 py-1.5 rounded-lg bg-[#2e2e2e] hover:bg-[#383838] text-white font-medium text-xs border border-[#3d3d3d] transition-colors flex items-center gap-1.5 shrink-0"
              >
                <Download className="w-4 h-4" />
                <span>Save JSON</span>
              </button>
            </div>
          </div>

          {/* Option 3: Restore Backup */}
          <div className="p-4 rounded-xl bg-[#252525] border border-[#333333] space-y-2.5">
            <h3 className="text-sm font-semibold text-white flex items-center gap-1.5">
              <Upload className="w-4 h-4 text-purple-400" />
              Restore from Backup
            </h3>
            <textarea
              rows={3}
              placeholder="Paste your JSON backup data here..."
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
              className="w-full bg-[#1c1c1c] border border-[#303030] rounded-lg p-2.5 text-xs text-neutral-200 font-mono focus:outline-hidden focus:border-cyan-500"
            />
            {importStatus && (
              <div
                className={`text-[11px] font-mono ${
                  importStatus.includes('Successfully')
                    ? 'text-emerald-400'
                    : 'text-red-400'
                }`}
              >
                {importStatus}
              </div>
            )}
            <div className="flex justify-end">
              <button
                onClick={handleImportJson}
                disabled={!importText.trim()}
                className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-colors disabled:opacity-40"
              >
                Restore Workspace
              </button>
            </div>
          </div>

          {/* Option 4: Reset Workspace */}
          <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/30 space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xs font-semibold text-red-300 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                  Reset 40-Day Progress
                </h3>
                <p className="text-[11px] text-neutral-400 mt-0.5">
                  Clear all habit checks, completed days, and start fresh from Day 1.
                </p>
              </div>

              {!confirmReset ? (
                <button
                  onClick={() => setConfirmReset(true)}
                  className="px-2.5 py-1.5 rounded-md bg-red-900/30 hover:bg-red-900/50 text-red-300 text-xs font-medium border border-red-800/40 transition-colors"
                >
                  Reset All
                </button>
              ) : (
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleReset}
                    className="px-2.5 py-1.5 rounded-md bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-colors"
                  >
                    Confirm Reset
                  </button>
                  <button
                    onClick={() => setConfirmReset(false)}
                    className="px-2.5 py-1.5 rounded-md bg-[#2e2e2e] text-neutral-300 text-xs"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#1d1d1d] border-t border-[#2e2e2e] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#2b2b2b] hover:bg-[#333333] text-neutral-200 text-xs transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
