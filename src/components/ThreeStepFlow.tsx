import React from 'react';

interface ThreeStepFlowProps {
  onOpenStandModal: () => void;
}

export const ThreeStepFlow: React.FC<ThreeStepFlowProps> = ({ onOpenStandModal }) => {
  return (
    <div className="rounded-2xl bg-[#1c2028] p-6 shadow-xl flex flex-col gap-4 border border-[#3c4a42]/30">
      <div>
        <span className="font-['JetBrains+Mono',monospace] text-[11px] uppercase tracking-widest text-[#4edea3] font-semibold">
          Customer Experience
        </span>
        <h2 className="mt-1 font-['Plus+Jakarta+Sans',sans-serif] text-lg md:text-xl font-bold text-[#dfe2ee]">
          3-Step Frictionless Flow
        </h2>
      </div>

      <div className="flex flex-col gap-4 relative">
        {/* Visual Step Connector Line */}
        <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-[#31353e]"></div>

        {/* Step 1 */}
        <div className="relative flex items-start gap-4 group">
          <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#31353e] group-hover:bg-[#10b981] text-[#dfe2ee] group-hover:text-[#00422b] shadow transition-all border border-[#3c4a42]/20">
            <span className="font-['JetBrains+Mono',monospace] text-xs font-bold">01</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold text-[#dfe2ee]">Point Native Camera</span>
              <span className="material-symbols-outlined text-[16px] text-[#4edea3]">
                photo_camera
              </span>
            </div>
            <p className="mt-0.5 text-xs text-[#bbcabf] leading-relaxed">
              Walk-in client points their regular iOS or Android camera app at the counter QR. Yellow clip tag pops up instantly.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative flex items-start gap-4 group">
          <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#31353e] group-hover:bg-[#10b981] text-[#dfe2ee] group-hover:text-[#00422b] shadow transition-all border border-[#3c4a42]/20">
            <span className="font-['JetBrains+Mono',monospace] text-xs font-bold">02</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold text-[#dfe2ee]">Pick Photos &amp; Files</span>
              <span className="material-symbols-outlined text-[16px] text-[#4cd7f6]">
                upload_file
              </span>
            </div>
            <p className="mt-0.5 text-xs text-[#bbcabf] leading-relaxed">
              The mobile web portal loads immediately in Safari or Chrome. The customer selects full-resolution photos, PDFs, or snaps a live image.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative flex items-start gap-4 group">
          <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#31353e] group-hover:bg-[#10b981] text-[#dfe2ee] group-hover:text-[#00422b] shadow transition-all border border-[#3c4a42]/20">
            <span className="font-['JetBrains+Mono',monospace] text-xs font-bold">03</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold text-[#dfe2ee]">Instant Desktop Delivery</span>
              <span className="material-symbols-outlined text-[16px] text-[#4edea3]">
                check_circle
              </span>
            </div>
            <p className="mt-0.5 text-xs text-[#bbcabf] leading-relaxed">
              Files stream directly through an encrypted peer channel straight to your terminal. A chime chimes; files auto-purge once session closes.
            </p>
          </div>
        </div>
      </div>

      {/* In-Store Counter Card Preview Mockup */}
      <div className="mt-1 rounded-xl bg-[#181c24] p-3 flex items-center justify-between border border-[#3c4a42]/20">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#262a33] text-[#dfe2ee]">
            <span className="material-symbols-outlined text-[20px]">print</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-[#dfe2ee]">Counter Stand Card</span>
            <span className="text-xs text-[#bbcabf]">Pre-formatted 5×7" acrylic tent card</span>
          </div>
        </div>
        <button
          onClick={onOpenStandModal}
          className="flex items-center gap-1.5 rounded-lg bg-[#10b981] text-[#00422b] px-3 py-1.5 text-xs font-semibold hover:bg-[#4edea3] transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">download</span>
          <span>Get Stand</span>
        </button>
      </div>
    </div>
  );
};
