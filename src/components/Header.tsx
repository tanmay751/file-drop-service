import React from 'react';

interface HeaderProps {
  currentTab: 'qr-code-connect' | 'direct-drop' | 'recent-transfers' | 'how-it-works';
  onSelectTab: (tab: 'qr-code-connect' | 'direct-drop' | 'recent-transfers' | 'how-it-works') => void;
  onOpenShareModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  onOpenShareModal,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-40 bg-[#0a0e16]/85 backdrop-blur-xl border-b border-[#3c4a42]/30 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
      <div className="h-16 w-full max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        {/* Logo and Live Pill */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onSelectTab('qr-code-connect')}
            className="flex items-center gap-2 focus:outline-none group text-left cursor-pointer"
          >
            <img
              alt="InstantDrop Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida/AEtjO1XT1DxBV5c_z59v2ptag30iTxpKK0a53fJahmwqsca1Cjj38mTzWbps1t71_HDwPxRR0UF3WoTZmT2IFqb44u3oCvzpeIpVS41BuVJwPTkDYn2V7FG022u2GaUCWqZ1pfw-SaxdXnWl7nIQoYVMgqkK3VA7o-U78vt6oeEmOB-uoBNPa2W7Cr0RJuXHxKLjuTByqPFcWV6HIfpcVxvIz2CfnAeP1Vv3J7xG6vZFK_j0X1sl1MmuaKacT7Y"
            />
            <span className="font-['Plus+Jakarta+Sans',sans-serif] text-lg font-bold tracking-tight text-[#dfe2ee] hidden sm:inline">
              Instant<span className="text-[#4edea3]">Drop</span>
            </span>
          </button>

          <div className="hidden xl:flex items-center gap-2 bg-[#181c24]/90 px-3 py-1 rounded-full border border-[#3c4a42]/40">
            <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
            <span className="font-['JetBrains+Mono',monospace] text-[11px] font-medium text-[#4edea3] tracking-wider uppercase">
              Live Portal Active
            </span>
            <span className="text-[#86948a] text-[11px]">•</span>
            <span className="font-['JetBrains+Mono',monospace] text-[11px] font-medium text-[#4cd7f6] tracking-normal">
              Fast P2P Tunnel
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-1.5">
          <button
            onClick={() => onSelectTab('direct-drop')}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors cursor-pointer ${
              currentTab === 'direct-drop'
                ? 'bg-[#262a33] text-[#4edea3] font-medium'
                : 'text-[#bbcabf] hover:text-[#dfe2ee]'
            }`}
          >
            Direct Drop
          </button>
          <button
            onClick={() => onSelectTab('qr-code-connect')}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors cursor-pointer ${
              currentTab === 'qr-code-connect'
                ? 'bg-[#262a33] text-[#4edea3] font-medium'
                : 'text-[#bbcabf] hover:text-[#dfe2ee]'
            }`}
          >
            QR Code Connect
          </button>
          <button
            onClick={() => onSelectTab('recent-transfers')}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors cursor-pointer ${
              currentTab === 'recent-transfers'
                ? 'bg-[#262a33] text-[#4edea3] font-medium'
                : 'text-[#bbcabf] hover:text-[#dfe2ee]'
            }`}
          >
            Recent Transfers
          </button>
          <button
            onClick={() => onSelectTab('how-it-works')}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors cursor-pointer ${
              currentTab === 'how-it-works'
                ? 'bg-[#262a33] text-[#4edea3] font-medium'
                : 'text-[#bbcabf] hover:text-[#dfe2ee]'
            }`}
          >
            How it Works
          </button>
        </nav>

        {/* Right CTA and Profile */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenShareModal}
            className="inline-flex items-center justify-center gap-1.5 bg-[#10b981] text-[#00422b] hover:bg-[#4edea3] text-sm font-semibold px-4 py-2 rounded-lg transition-all shadow-[0_0_16px_-4px_rgba(16,185,129,0.35)] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">share</span>
            <span>Share My Link</span>
          </button>

          <div className="flex items-center gap-2.5 pl-2 border-l border-[#3c4a42]/30">
            <div className="relative flex items-center">
              <img
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-[#4edea3]/40"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ_5sm3zSyU7Z6nqVXTiR-jxIi-fCLFiC2AewPLn_0JHX7DNFjl-cLfAc9yRyNPOgmGJzozK2XKz29LRN3GVCex9H5DrCuTy8jbOU9RFxrvifYTX16RVORG-YvazGgHGVFSUuKNzqy26YV70la-7TSG4vFQ-BDehinkPc7_oL_v_yOTe-ff2AELqL19r4R-XosCxCWmumwTAMV3S529G41VLJrpxZswmOu6EMUKU_R0-0QyvxCLqxu"
              />
              <span
                className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#4edea3] rounded-full border-2 border-[#0f131c] flex items-center justify-center"
                title="Recipient Verified"
              >
                <span className="w-1.5 h-1.5 bg-[#00422b] rounded-full"></span>
              </span>
            </div>
            <div className="hidden md:flex flex-col text-left">
              <span className="font-['JetBrains+Mono',monospace] text-[12px] text-[#dfe2ee] leading-tight font-medium">
                Front Desk
              </span>
              <span className="font-['JetBrains+Mono',monospace] text-[10px] text-[#4cd7f6] uppercase tracking-wider">
                Recipient Node
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navigation tab strip */}
      <div className="lg:hidden flex items-center justify-around border-t border-[#3c4a42]/20 px-2 py-1.5 bg-[#0a0e16]">
        <button
          onClick={() => onSelectTab('qr-code-connect')}
          className={`px-2 py-1 rounded text-xs ${
            currentTab === 'qr-code-connect'
              ? 'text-[#4edea3] font-semibold bg-[#262a33]'
              : 'text-[#bbcabf]'
          }`}
        >
          QR Connect
        </button>
        <button
          onClick={() => onSelectTab('direct-drop')}
          className={`px-2 py-1 rounded text-xs ${
            currentTab === 'direct-drop'
              ? 'text-[#4edea3] font-semibold bg-[#262a33]'
              : 'text-[#bbcabf]'
          }`}
        >
          Direct Drop
        </button>
        <button
          onClick={() => onSelectTab('recent-transfers')}
          className={`px-2 py-1 rounded text-xs ${
            currentTab === 'recent-transfers'
              ? 'text-[#4edea3] font-semibold bg-[#262a33]'
              : 'text-[#bbcabf]'
          }`}
        >
          Recent Transfers
        </button>
        <button
          onClick={() => onSelectTab('how-it-works')}
          className={`px-2 py-1 rounded text-xs ${
            currentTab === 'how-it-works'
              ? 'text-[#4edea3] font-semibold bg-[#262a33]'
              : 'text-[#bbcabf]'
          }`}
        >
          How It Works
        </button>
      </div>
    </header>
  );
};
