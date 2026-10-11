import React, { useState } from 'react';

interface QrCardProps {
  sessionCode: string;
  counterMode: boolean;
  onPrintStand: () => void;
  onProjectTv: () => void;
  onRegenerateSession: () => void;
  onOpenMobileView: () => void;
}

export const QrCard: React.FC<QrCardProps> = ({
  sessionCode,
  counterMode,
  onPrintStand,
  onProjectTv,
  onRegenerateSession,
  onOpenMobileView,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  // Strip leading '#' if present for link
  const rawId = sessionCode.replace('#DROP-', '').replace('#', '');
  const portalUrl = `https://instantdrop.net/drop/${rawId}`;

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(portalUrl).catch(() => {});
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#1c2028] p-6 md:p-8 shadow-xl border border-[#3c4a42]/30">
      {/* Diagonal Accent Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#03b5d3]/15 blur-3xl"></div>

      <div className="relative flex flex-col items-center text-center">
        {/* Terminal Overline Label */}
        <div className="mb-2 flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[18px] text-[#4edea3]">
            qr_code_scanner
          </span>
          <span className="font-['JetBrains+Mono',monospace] text-[11px] uppercase tracking-widest text-[#4edea3] font-semibold">
            Direct In-Store Drop Target
          </span>
        </div>

        <h1 className="font-['Plus+Jakarta+Sans',sans-serif] text-2xl md:text-3xl font-bold text-[#dfe2ee] tracking-tight">
          Scan with Any Phone Camera
        </h1>

        <p className="mt-2 max-w-md text-sm text-[#bbcabf] leading-relaxed">
          Instantly opens the mobile upload portal. No app download, no phone number exchange, and no cloud account needed.
        </p>

        {/* QR Code Display Enclosure with Brackets & Neon Accents */}
        <div className="relative my-6 group">
          {/* Glowing Aura */}
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#4edea3]/30 to-[#4cd7f6]/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div
            className={`relative flex flex-col items-center justify-center rounded-2xl p-4 shadow-2xl border ${
              counterMode
                ? 'bg-[#0a0e16] border-[#4edea3]/40'
                : 'bg-[#181c24] border-[#3c4a42]/50'
            }`}
          >
            {/* Target Brackets */}
            <div className="absolute top-2 left-2 h-6 w-6 border-t-2 border-l-2 border-[#4edea3]"></div>
            <div className="absolute top-2 right-2 h-6 w-6 border-t-2 border-r-2 border-[#4edea3]"></div>
            <div className="absolute bottom-2 left-2 h-6 w-6 border-b-2 border-l-2 border-[#4edea3]"></div>
            <div className="absolute bottom-2 right-2 h-6 w-6 border-b-2 border-r-2 border-[#4edea3]"></div>

            {/* High-Contrast Clean White QR Canvas Plate */}
            <button
              onClick={onOpenMobileView}
              title="Click to test Customer Mobile Drop Portal"
              className="relative flex items-center justify-center rounded-xl bg-white p-3.5 shadow-inner cursor-pointer transition-transform hover:scale-[1.01]"
            >
              {/* Crisp Vector QR Representation */}
              <svg
                className="h-60 w-60 md:h-72 md:w-72"
                fill="none"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Corner Marker Top Left */}
                <rect fill="#0B0F17" height="46" rx="6" width="46" x="14" y="14"></rect>
                <rect fill="#ffffff" height="30" rx="3" width="30" x="22" y="22"></rect>
                <rect fill="#10B981" height="18" rx="2" width="18" x="28" y="28"></rect>

                {/* Corner Marker Top Right */}
                <rect fill="#0B0F17" height="46" rx="6" width="46" x="140" y="14"></rect>
                <rect fill="#ffffff" height="30" rx="3" width="30" x="148" y="22"></rect>
                <rect fill="#10B981" height="18" rx="2" width="18" x="154" y="28"></rect>

                {/* Corner Marker Bottom Left */}
                <rect fill="#0B0F17" height="46" rx="6" width="46" x="14" y="140"></rect>
                <rect fill="#ffffff" height="30" rx="3" width="30" x="22" y="148"></rect>
                <rect fill="#10B981" height="18" rx="2" width="18" x="28" y="154"></rect>

                {/* QR Data Pattern Matrix */}
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

                {/* Middle Zone */}
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

                {/* Bottom Zone */}
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

              {/* Store Branding Central Hologram Badge */}
              <div className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#0a0e16] shadow-lg border border-[#3c4a42]/30">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#10b981] text-[#00422b]">
                  <span className="material-symbols-outlined text-[24px]">bolt</span>
                </div>
              </div>
            </button>

            {/* Dynamic Sub-Scan Ping */}
            <div className="mt-2.5 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-[#4cd7f6]">
                wifi_tethering
              </span>
              <span className="font-['JetBrains+Mono',monospace] text-[12px] text-[#bbcabf] font-medium">
                instantdrop.net/drop/{rawId}
              </span>
            </div>
          </div>
        </div>

        {/* Action Bar Beneath QR */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
          <button
            onClick={onPrintStand}
            className="flex items-center justify-center gap-2 rounded-xl bg-[#262a33] hover:bg-[#353942] px-4 py-2.5 text-[#dfe2ee] font-medium text-sm transition-all shadow-sm border border-[#3c4a42]/20 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px] text-[#4cd7f6]">
              picture_as_pdf
            </span>
            <span>Print Counter Stand</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="flex items-center justify-center gap-2 rounded-xl bg-[#262a33] hover:bg-[#353942] px-4 py-2.5 text-[#dfe2ee] font-medium text-sm transition-all shadow-sm border border-[#3c4a42]/20 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px] text-[#4edea3]">
              {copiedLink ? 'done' : 'link'}
            </span>
            <span>{copiedLink ? 'Copied to Clipboard!' : 'Copy Portal Link'}</span>
          </button>

          <button
            onClick={onProjectTv}
            className="flex items-center justify-center gap-2 rounded-xl bg-[#262a33] hover:bg-[#353942] px-4 py-2.5 text-[#dfe2ee] font-medium text-sm transition-all shadow-sm border border-[#3c4a42]/20 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px] text-[#bbcabf]">
              tv_options_edit_channels
            </span>
            <span>Project to TV Screen</span>
          </button>

          <button
            onClick={onRegenerateSession}
            className="flex items-center justify-center gap-2 rounded-xl bg-[#262a33] hover:bg-[#353942] px-4 py-2.5 text-[#dfe2ee] font-medium text-sm transition-all shadow-sm border border-[#3c4a42]/20 cursor-pointer hover:border-[#ffb2b7]/40"
          >
            <span className="material-symbols-outlined text-[18px] text-[#ffb2b7]">
              restart_alt
            </span>
            <span>Regenerate Session</span>
          </button>
        </div>
      </div>
    </div>
  );
};
