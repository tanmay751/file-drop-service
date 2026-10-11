import React, { useState } from 'react';

interface CounterStandModalProps {
  isOpen: boolean;
  onClose: () => void;
  sessionCode: string;
  storeName: string;
}

export const CounterStandModal: React.FC<CounterStandModalProps> = ({
  isOpen,
  onClose,
  sessionCode,
  storeName: initialStoreName,
}) => {
  const [storeName, setStoreName] = useState(initialStoreName);
  const [instructions, setInstructions] = useState(
    'Point your iPhone or Android camera here to send files directly to our front counter.'
  );

  if (!isOpen) return null;

  const rawId = sessionCode.replace('#DROP-', '').replace('#', '');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0e16]/85 backdrop-blur-md p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#1c2028] p-6 shadow-2xl border border-[#3c4a42]/40 text-[#dfe2ee] my-8">
        <div className="flex items-center justify-between pb-3 border-b border-[#3c4a42]/30 no-print">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[22px] text-[#4edea3]">print</span>
            <h3 className="font-['Plus+Jakarta+Sans',sans-serif] text-lg font-bold">
              Counter Stand Acrylic Tent Card (5×7")
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#bbcabf] hover:text-white hover:bg-[#262a33] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Customization controls (no-print) */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 no-print">
          <div>
            <label className="text-xs text-[#bbcabf] font-medium block mb-1">
              Store / Business Name
            </label>
            <input
              type="text"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              className="w-full rounded-lg bg-[#181c24] px-3 py-1.5 text-xs text-[#dfe2ee] border border-[#3c4a42]/30 focus:outline-none focus:ring-1 focus:ring-[#4edea3]"
            />
          </div>
          <div>
            <label className="text-xs text-[#bbcabf] font-medium block mb-1">
              Customer Instructions
            </label>
            <input
              type="text"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className="w-full rounded-lg bg-[#181c24] px-3 py-1.5 text-xs text-[#dfe2ee] border border-[#3c4a42]/30 focus:outline-none focus:ring-1 focus:ring-[#4edea3]"
            />
          </div>
        </div>

        {/* Printable 5x7 Tent Card Preview Container */}
        <div className="mt-6 flex justify-center">
          <div className="w-[340px] sm:w-[380px] bg-white text-slate-900 rounded-xl p-6 shadow-2xl flex flex-col items-center text-center border-4 border-slate-900 print:w-full print:border-none">
            {/* Header Badge */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                InstantDrop In-Store Station
              </span>
            </div>

            <h2 className="font-['Plus+Jakarta+Sans',sans-serif] text-xl font-extrabold text-slate-900 leading-tight">
              {storeName || 'Alex Print Studio & Front Desk'}
            </h2>

            <p className="mt-1 text-xs text-slate-600 max-w-[280px]">
              {instructions}
            </p>

            {/* QR Card */}
            <div className="my-4 p-3 bg-slate-50 border-2 border-slate-900 rounded-xl shadow-inner relative flex flex-col items-center">
              <svg
                className="h-44 w-44"
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
            </div>

            <div className="font-['JetBrains+Mono',monospace] text-xs font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-md">
              instantdrop.net/drop/{rawId}
            </div>

            <div className="mt-3 flex items-center justify-between w-full pt-2 border-t border-slate-200 text-[10px] text-slate-500 font-['JetBrains+Mono',monospace]">
              <span>ZERO APP INSTALL</span>
              <span>TLS 1.3 ENCRYPTED</span>
            </div>
          </div>
        </div>

        {/* Footer actions (no-print) */}
        <div className="mt-6 flex items-center justify-end gap-3 pt-3 border-t border-[#3c4a42]/30 no-print">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-[#bbcabf] hover:text-[#dfe2ee] cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 rounded-lg bg-[#10b981] hover:bg-[#4edea3] text-[#00422b] px-4 py-2 text-sm font-semibold transition-all shadow-md cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">print</span>
            <span>Print Tent Card</span>
          </button>
        </div>
      </div>
    </div>
  );
};
