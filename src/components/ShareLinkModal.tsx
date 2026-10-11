import React, { useState } from 'react';

interface ShareLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  sessionCode: string;
}

export const ShareLinkModal: React.FC<ShareLinkModalProps> = ({
  isOpen,
  onClose,
  sessionCode,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedSms, setCopiedSms] = useState(false);

  if (!isOpen) return null;

  const rawId = sessionCode.replace('#DROP-', '').replace('#', '');
  const portalUrl = `https://instantdrop.net/drop/${rawId}`;
  const smsMessage = `Hi! You can securely drop your photos, PDFs or documents directly to our counter here: ${portalUrl}`;

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(portalUrl).catch(() => {});
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopySms = () => {
    navigator.clipboard?.writeText(smsMessage).catch(() => {});
    setCopiedSms(true);
    setTimeout(() => setCopiedSms(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0e16]/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#1c2028] p-6 shadow-2xl border border-[#3c4a42]/40 text-[#dfe2ee]">
        <div className="flex items-center justify-between pb-3 border-b border-[#3c4a42]/30">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#4edea3]">share</span>
            <h3 className="font-['Plus+Jakarta+Sans',sans-serif] text-lg font-bold">
              Share Direct Drop Portal
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#bbcabf] hover:text-white hover:bg-[#262a33] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="mt-4 space-y-4">
          <div>
            <label className="text-xs text-[#bbcabf] font-medium block mb-1.5">
              Customer Web Link
            </label>
            <div className="flex items-center gap-2">
              <input
                readOnly
                type="text"
                value={portalUrl}
                className="w-full rounded-lg bg-[#181c24] px-3.5 py-2 text-sm text-[#4cd7f6] font-['JetBrains+Mono',monospace] border border-[#3c4a42]/30 focus:outline-none"
              />
              <button
                onClick={handleCopyLink}
                className="shrink-0 flex items-center gap-1.5 rounded-lg bg-[#10b981] text-[#00422b] hover:bg-[#4edea3] px-3.5 py-2 text-xs font-semibold transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">
                  {copiedLink ? 'done' : 'content_copy'}
                </span>
                <span>{copiedLink ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          <div>
            <label className="text-xs text-[#bbcabf] font-medium block mb-1.5">
              SMS / WhatsApp Dispatch Template
            </label>
            <div className="rounded-xl bg-[#181c24] p-3 border border-[#3c4a42]/30 text-xs text-[#dfe2ee] relative">
              <p className="pr-16 text-[#bbcabf] leading-relaxed">{smsMessage}</p>
              <button
                onClick={handleCopySms}
                className="absolute top-2 right-2 flex items-center gap-1 rounded bg-[#262a33] hover:bg-[#353942] px-2 py-1 text-[11px] text-[#4edea3] transition-colors cursor-pointer font-medium"
              >
                <span className="material-symbols-outlined text-[14px]">
                  {copiedSms ? 'done' : 'copy_all'}
                </span>
                <span>{copiedSms ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          <div className="rounded-xl bg-[#181c24] p-3 border border-[#3c4a42]/30 flex items-center gap-3">
            <span className="material-symbols-outlined text-[22px] text-[#4edea3]">lock</span>
            <div className="text-xs text-[#bbcabf]">
              <span className="text-[#dfe2ee] font-medium block">Ephemeral Tunnel Session</span>
              Links auto-expire after countdown or upon receiver session refresh.
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-lg bg-[#262a33] hover:bg-[#353942] text-[#dfe2ee] px-4 py-2 text-xs font-semibold transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
