import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0a0e16] border-t border-[#3c4a42]/20 py-6 mt-12 no-print">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-['JetBrains+Mono',monospace] text-xs text-[#4edea3] uppercase font-medium">
            ● E2EE Ephemeral
          </span>
          <span className="text-[#86948a] font-['JetBrains+Mono',monospace] text-xs">•</span>
          <span className="text-xs text-[#bbcabf]">
            Zero Contact Storage &amp; Direct Tunneling
          </span>
        </div>
        <div className="text-center md:text-right font-['JetBrains+Mono',monospace] text-xs text-[#bbcabf]">
          © 2025 InstantDrop P2P Protocol. All files self-destruct upon delivery.
        </div>
      </div>
    </footer>
  );
};
