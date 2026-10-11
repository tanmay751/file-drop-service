import React, { useState } from 'react';

interface SubBarProps {
  sessionCode: string;
  formattedTime: string;
  connectedCount: number;
}

export const SubBar: React.FC<SubBarProps> = ({
  sessionCode,
  formattedTime,
  connectedCount,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(sessionCode).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-[#181c24] px-4 py-2.5 shadow-md border border-[#3c4a42]/30">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-[#4edea3]"></span>
          <span className="font-['JetBrains+Mono',monospace] text-[13px] font-medium text-[#4edea3] uppercase tracking-wide">
            Active Walk-in Tunnel
          </span>
        </div>
        <span className="font-['JetBrains+Mono',monospace] text-[11px] text-[#86948a]">•</span>
        <div className="flex items-center gap-1.5">
          <span className="font-['JetBrains+Mono',monospace] text-[11px] text-[#bbcabf]">Session ID:</span>
          <span className="rounded bg-[#262a33] px-2 py-0.5 font-['JetBrains+Mono',monospace] text-[13px] font-bold text-[#4cd7f6]">
            {sessionCode}
          </span>
          <button
            onClick={handleCopyCode}
            className="flex items-center text-[#bbcabf] hover:text-[#4edea3] transition-colors p-0.5 rounded cursor-pointer"
            title="Copy Session Code"
          >
            <span className="material-symbols-outlined text-[16px]">
              {copied ? 'check' : 'content_copy'}
            </span>
          </button>
        </div>
        <span className="hidden md:inline font-['JetBrains+Mono',monospace] text-[11px] text-[#86948a]">•</span>
        <div className="hidden sm:flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[16px] text-[#bbcabf]">schedule</span>
          <span className="font-['JetBrains+Mono',monospace] text-[11px] text-[#bbcabf]">Auto-rotates in:</span>
          <span className="font-['JetBrains+Mono',monospace] text-[13px] text-[#dfe2ee] font-semibold tabular-nums">
            {formattedTime}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        <div className="flex items-center gap-1.5 rounded-full bg-[#1c2028] px-3 py-1 border border-[#3c4a42]/30">
          <span className="material-symbols-outlined text-[16px] text-[#4cd7f6]">smartphone</span>
          <span className="font-['JetBrains+Mono',monospace] text-[11px] text-[#dfe2ee]">Connected Devices:</span>
          <span className="font-['JetBrains+Mono',monospace] text-[13px] font-bold text-[#4edea3]">
            {connectedCount} Active
          </span>
        </div>
        <span className="inline-flex items-center rounded-full bg-[#4edea3]/10 border border-[#4edea3]/20 px-3 py-1 font-['JetBrains+Mono',monospace] text-[11px] font-medium text-[#4edea3]">
          Zero App Install
        </span>
      </div>
    </div>
  );
};
