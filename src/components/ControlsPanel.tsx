import React, { useState } from 'react';

interface ControlsPanelProps {
  counterMode: boolean;
  onToggleCounterMode: () => void;
  requirePin: boolean;
  pinCode: string;
  onTogglePin: () => void;
  welcomeNote: string;
  onSaveWelcomeNote: (note: string) => void;
}

export const ControlsPanel: React.FC<ControlsPanelProps> = ({
  counterMode,
  onToggleCounterMode,
  requirePin,
  pinCode,
  onTogglePin,
  welcomeNote,
  onSaveWelcomeNote,
}) => {
  const [noteInput, setNoteInput] = useState(welcomeNote);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    onSaveWelcomeNote(noteInput);
    setSaved(true);
    setTimeout(() => setSaved(false), 1600);
  };

  return (
    <div className="rounded-2xl bg-[#1c2028] p-5 shadow-md border border-[#3c4a42]/30">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px] text-[#4cd7f6]">
            tune
          </span>
          <span className="font-['Plus+Jakarta+Sans',sans-serif] text-base md:text-lg font-bold text-[#dfe2ee]">
            Display &amp; Security Controls
          </span>
        </div>
        <span className="font-['JetBrains+Mono',monospace] text-[11px] text-[#86948a] uppercase tracking-wider">
          In-Store Host
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* High-Contrast Counter Mode Toggle */}
        <div className="flex items-center justify-between rounded-xl bg-[#181c24] p-3 border border-[#3c4a42]/20">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-[#dfe2ee]">Counter Mode</span>
            <span className="text-xs text-[#bbcabf]">Ultra high-contrast QR display</span>
          </div>
          <button
            onClick={onToggleCounterMode}
            type="button"
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer ${
              counterMode ? 'bg-[#4edea3]' : 'bg-[#31353e]'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full transition-transform ${
                counterMode
                  ? 'bg-[#003824] translate-x-6'
                  : 'bg-[#86948a] translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* 4-Digit Sensitive File PIN Toggle */}
        <div className="flex items-center justify-between rounded-xl bg-[#181c24] p-3 border border-[#3c4a42]/20">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-medium text-[#dfe2ee]">Require 4-Digit PIN</span>
              {requirePin && (
                <span className="font-['JetBrains+Mono',monospace] text-xs font-bold text-[#4cd7f6] bg-[#262a33] px-1.5 py-0.2 rounded">
                  {pinCode}
                </span>
              )}
            </div>
            <span className="text-xs text-[#bbcabf]">Recommended for confidential IDs</span>
          </div>
          <button
            onClick={onTogglePin}
            type="button"
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer ${
              requirePin ? 'bg-[#4edea3]' : 'bg-[#31353e]'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full transition-transform ${
                requirePin
                  ? 'bg-[#003824] translate-x-6'
                  : 'bg-[#86948a] translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Custom Welcome Note Editor */}
      <div className="mt-3 rounded-xl bg-[#181c24] p-3 border border-[#3c4a42]/20">
        <label
          className="flex items-center justify-between font-['JetBrains+Mono',monospace] text-[11px] uppercase tracking-wider text-[#bbcabf] mb-1.5"
          htmlFor="welcomeNoteInput"
        >
          <span>Customer Welcome Banner Message</span>
          <span className="text-[#4edea3] font-medium">Visible on Customer Mobile</span>
        </label>
        <div className="relative flex items-center">
          <input
            id="welcomeNoteInput"
            type="text"
            value={noteInput}
            onChange={(e) => setNoteInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSave();
            }}
            placeholder="Welcome message shown to walk-in clients..."
            className="w-full rounded-lg bg-[#31353e] px-3.5 py-2 text-sm text-[#dfe2ee] placeholder:text-[#86948a] focus:outline-none focus:ring-1 focus:ring-[#4edea3] pr-22 border border-[#3c4a42]/30"
          />
          <button
            onClick={handleSave}
            className={`absolute right-1.5 rounded-md px-3 py-1 font-['JetBrains+Mono',monospace] text-xs font-semibold transition-colors cursor-pointer ${
              saved
                ? 'bg-[#4edea3] text-[#003824]'
                : 'bg-[#10b981] text-[#00422b] hover:bg-[#4edea3]'
            }`}
          >
            {saved ? 'Updated!' : 'Update'}
          </button>
        </div>
      </div>
    </div>
  );
};
