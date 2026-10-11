import React, { useEffect } from 'react';

interface TvModalProps {
  isOpen: boolean;
  onClose: () => void;
  sessionCode: string;
  welcomeMessage: string;
}

export const TvModal: React.FC<TvModalProps> = ({
  isOpen,
  onClose,
  sessionCode,
  welcomeMessage,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const rawId = sessionCode.replace('#DROP-', '').replace('#', '');

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0e16]/95 backdrop-blur-2xl p-6 md:p-12 animate-in fade-in duration-200">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#262a33] text-[#dfe2ee] hover:bg-[#353942] transition-colors cursor-pointer border border-[#3c4a42]/30 shadow-lg"
        title="Exit Fullscreen TV Mode (Esc)"
      >
        <span className="material-symbols-outlined text-[28px]">close</span>
      </button>

      <div className="flex flex-col items-center text-center max-w-2xl my-auto">
        <div className="flex items-center gap-2 rounded-full bg-[#4edea3]/20 border border-[#4edea3]/30 px-4 py-1.5 text-[#4edea3] mb-3">
          <span className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-[#4edea3]"></span>
          <span className="font-['JetBrains+Mono',monospace] text-xs md:text-sm font-semibold uppercase tracking-wider">
            Walk-in Customer Drop Station
          </span>
        </div>

        <h2 className="font-['Plus+Jakarta+Sans',sans-serif] text-3xl md:text-5xl text-[#dfe2ee] font-bold tracking-tight">
          Drop Files in Seconds
        </h2>

        <p className="mt-2 text-base md:text-lg text-[#bbcabf] max-w-lg">
          No email, no phone numbers, no Bluetooth pairing. Point your phone camera below.
        </p>

        {/* Big Crisp QR Display */}
        <div className="relative my-8 rounded-3xl bg-white p-6 md:p-8 shadow-2xl">
          <svg
            className="h-72 w-72 md:h-96 md:w-96"
            fill="none"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect fill="#0B0F17" height="46" rx="6" width="46" x="14" y="14"></rect>
            <rect fill="#ffffff" height="30" rx="3" width="30" x="22" y="22"></rect>
            <rect fill="#10B981" height="18" rx="2" width="18" x="28" y="28"></rect>
            <rect fill="#0B0F17" height="46" rx="6" width="46" x="140" y="14"></rect>
            <rect fill="#ffffff" height="30" rx="3" width="30" x="148" y="22"></rect>
            <rect fill="#10B981" height="18" rx="2" width="18" x="154" y="28"></rect>
            <rect fill="#0B0F17" height="46" rx="6" width="46" x="14" y="140"></rect>
            <rect fill="#ffffff" height="30" rx="3" width="30" x="22" y="148"></rect>
            <rect fill="#10B981" height="18" rx="2" width="18" x="28" y="154"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="8" x="68" y="16"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="8" x="84" y="16"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="16" x="100" y="16"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="8" x="124" y="16"></rect>
            <rect fill="#03B5D3" height="8" rx="1.5" width="16" x="68" y="32"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="8" x="92" y="32"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="8" x="108" y="32"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="8" x="124" y="32"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="8" x="76" y="48"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="8" x="100" y="48"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="16" x="116" y="48"></rect>
            <rect fill="#0B0F17" height="16" rx="1.5" width="8" x="16" y="68"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="16" x="32" y="76"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="8" x="56" y="68"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="24" x="68" y="68"></rect>
            <rect fill="#0B0F17" height="16" rx="1.5" width="8" x="100" y="68"></rect>
            <rect fill="#03B5D3" height="8" rx="1.5" width="8" x="116" y="68"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="16" x="132" y="68"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="28" x="156" y="68"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="24" x="16" y="92"></rect>
            <rect fill="#0B0F17" height="24" rx="1.5" width="8" x="48" y="84"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="8" x="64" y="84"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="8" x="128" y="84"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="16" x="144" y="84"></rect>
            <rect fill="#0B0F17" height="24" rx="1.5" width="8" x="168" y="84"></rect>
            <rect fill="#0B0F17" height="16" rx="1.5" width="8" x="16" y="108"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="16" x="32" y="116"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="8" x="56" y="108"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="16" x="116" y="108"></rect>
            <rect fill="#0B0F17" height="16" rx="1.5" width="8" x="140" y="108"></rect>
            <rect fill="#03B5D3" height="8" rx="1.5" width="20" x="156" y="116"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="16" x="68" y="128"></rect>
            <rect fill="#0B0F17" height="16" rx="1.5" width="8" x="92" y="128"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="24" x="108" y="128"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="8" x="140" y="132"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="16" x="156" y="132"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="8" x="180" y="132"></rect>
            <rect fill="#0B0F17" height="16" rx="1.5" width="8" x="68" y="152"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="16" x="84" y="144"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="8" x="108" y="152"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="16" x="124" y="144"></rect>
            <rect fill="#0B0F17" height="24" rx="1.5" width="8" x="148" y="148"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="24" x="164" y="152"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="24" x="68" y="176"></rect>
            <rect fill="#0B0F17" height="16" rx="1.5" width="8" x="100" y="168"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="24" x="116" y="176"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="8" x="156" y="176"></rect>
            <rect fill="#0B0F17" height="8" rx="1.5" width="16" x="172" y="176"></rect>
          </svg>

          {/* Central Hologram Badge */}
          <div className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0a0e16] shadow-xl border border-[#3c4a42]/30">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#10b981] text-[#00422b]">
              <span className="material-symbols-outlined text-[28px]">bolt</span>
            </div>
          </div>
        </div>

        {/* Link box */}
        <div className="rounded-xl bg-[#1c2028] px-6 py-2.5 border border-[#3c4a42]/30 flex items-center gap-3">
          <span className="material-symbols-outlined text-[18px] text-[#4edea3]">
            qr_code
          </span>
          <span className="font-['JetBrains+Mono',monospace] text-base text-[#4cd7f6] font-semibold">
            instantdrop.net/drop/{rawId}
          </span>
          <span className="font-['JetBrains+Mono',monospace] text-xs text-[#86948a]">•</span>
          <span className="font-['JetBrains+Mono',monospace] text-sm text-[#4edea3]">
            {sessionCode}
          </span>
        </div>

        {welcomeMessage && (
          <p className="mt-4 text-xs md:text-sm text-[#bbcabf] italic max-w-md">
            "{welcomeMessage}"
          </p>
        )}
      </div>
    </div>
  );
};
