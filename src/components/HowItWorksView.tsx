import React from 'react';

export const HowItWorksView: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4 md:px-6 animate-in fade-in duration-200">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="font-['JetBrains+Mono',monospace] text-xs uppercase tracking-widest text-[#4edea3] font-bold">
          Under The Hood
        </span>
        <h2 className="font-['Plus+Jakarta+Sans',sans-serif] text-3xl md:text-4xl font-bold text-[#dfe2ee] mt-1 tracking-tight">
          How InstantDrop Eliminates Counter Friction
        </h2>
        <p className="text-sm text-[#bbcabf] mt-2 leading-relaxed">
          The fastest way to get documents from a walk-in customer's phone into your business computer without email, cables, or cloud accounts.
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* The Old Way */}
        <div className="rounded-2xl bg-[#1c2028] p-6 border border-[#ff7886]/30">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-[20px] text-[#ff7886]">cancel</span>
            <h3 className="font-['Plus+Jakarta+Sans',sans-serif] text-base font-bold text-[#dfe2ee]">
              The Traditional Counter Headache
            </h3>
          </div>
          <ul className="space-y-3 text-xs text-[#bbcabf]">
            <li className="flex items-start gap-2">
              <span className="text-[#ff7886] font-bold">•</span>
              <span><strong>Spam &amp; Privacy:</strong> Asking customers for their personal email or phone number creates reluctance and GDPR/compliance risks.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#ff7886] font-bold">•</span>
              <span><strong>Compression Degradation:</strong> WhatsApp, AirDrop (cross-platform barrier), and MMS downsample high-res print files and ID scans.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#ff7886] font-bold">•</span>
              <span><strong>Clogged Inboxes:</strong> Counter staff spend minutes refreshing inboxes, fishing files out of spam filters, and cluttering company email storage.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#ff7886] font-bold">•</span>
              <span><strong>Security Hazards:</strong> Sensitive customer tax forms and driver's licenses sit forgotten forever on third-party mail servers.</span>
            </li>
          </ul>
        </div>

        {/* The InstantDrop Way */}
        <div className="rounded-2xl bg-[#1c2028] p-6 border border-[#4edea3]/40">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-[20px] text-[#4edea3]">check_circle</span>
            <h3 className="font-['Plus+Jakarta+Sans',sans-serif] text-base font-bold text-[#dfe2ee]">
              The InstantDrop Direct Tunnel
            </h3>
          </div>
          <ul className="space-y-3 text-xs text-[#bbcabf]">
            <li className="flex items-start gap-2">
              <span className="text-[#4edea3] font-bold">•</span>
              <span><strong>Zero App Install:</strong> Works in 1 second through iOS Camera or Android Chrome without downloading apps or creating accounts.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#4edea3] font-bold">•</span>
              <span><strong>Lossless Original Quality:</strong> Files transfer byte-for-byte in original resolution without compression or alteration.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#4edea3] font-bold">•</span>
              <span><strong>Point-to-Point TLS 1.3:</strong> WebRTC encrypted datachannels stream directly from customer phone to the desk browser memory.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#4edea3] font-bold">•</span>
              <span><strong>Automated Self-Destruct:</strong> All files exist ephemerally in RAM and auto-purge as soon as the session rotates or closes.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Target Industries */}
      <div className="rounded-2xl bg-[#1c2028] p-8 border border-[#3c4a42]/30 mb-8">
        <h3 className="font-['Plus+Jakarta+Sans',sans-serif] text-xl font-bold text-[#dfe2ee] mb-6 text-center">
          Engineered for High-Volume Counter Workflows
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-xl bg-[#181c24] p-4 border border-[#3c4a42]/20">
            <span className="material-symbols-outlined text-[24px] text-[#4edea3] mb-2 block">
              print
            </span>
            <h4 className="text-sm font-semibold text-[#dfe2ee]">Print &amp; Copy Centers</h4>
            <p className="text-xs text-[#bbcabf] mt-1 leading-relaxed">
              Customers walk up and drop poster artwork, resume PDFs, or photo prints in full resolution within 3 seconds.
            </p>
          </div>

          <div className="rounded-xl bg-[#181c24] p-4 border border-[#3c4a42]/20">
            <span className="material-symbols-outlined text-[24px] text-[#4cd7f6] mb-2 block">
              hotel
            </span>
            <h4 className="text-sm font-semibold text-[#dfe2ee]">Hotels &amp; Check-In</h4>
            <p className="text-xs text-[#bbcabf] mt-1 leading-relaxed">
              Guests scan to upload required passport photos or visa confirmations with zero contact and instant verification.
            </p>
          </div>

          <div className="rounded-xl bg-[#181c24] p-4 border border-[#3c4a42]/20">
            <span className="material-symbols-outlined text-[24px] text-[#4edea3] mb-2 block">
              gavel
            </span>
            <h4 className="text-sm font-semibold text-[#dfe2ee]">Notary &amp; Legal Offices</h4>
            <p className="text-xs text-[#bbcabf] mt-1 leading-relaxed">
              Confidential IDs and deeds transfer with 4-digit PIN protection, meeting strict client confidentiality rules.
            </p>
          </div>

          <div className="rounded-xl bg-[#181c24] p-4 border border-[#3c4a42]/20">
            <span className="material-symbols-outlined text-[24px] text-[#4cd7f6] mb-2 block">
              car_repair
            </span>
            <h4 className="text-sm font-semibold text-[#dfe2ee]">Mechanics &amp; Bodyshops</h4>
            <p className="text-xs text-[#bbcabf] mt-1 leading-relaxed">
              Drivers drop high-resolution accident photos, insurance claim cards, and vehicle registration papers right at the intake desk.
            </p>
          </div>

          <div className="rounded-xl bg-[#181c24] p-4 border border-[#3c4a42]/20">
            <span className="material-symbols-outlined text-[24px] text-[#4edea3] mb-2 block">
              local_hospital
            </span>
            <h4 className="text-sm font-semibold text-[#dfe2ee]">Medical Reception</h4>
            <p className="text-xs text-[#bbcabf] mt-1 leading-relaxed">
              Patients share insurance cards and lab test reports without handing over physical plastic cards or unlocked phones.
            </p>
          </div>

          <div className="rounded-xl bg-[#181c24] p-4 border border-[#3c4a42]/20">
            <span className="material-symbols-outlined text-[24px] text-[#4cd7f6] mb-2 block">
              real_estate_agent
            </span>
            <h4 className="text-sm font-semibold text-[#dfe2ee]">Real Estate &amp; Banking</h4>
            <p className="text-xs text-[#bbcabf] mt-1 leading-relaxed">
              Borrowers securely share paystubs, bank statements, and tax returns directly with the loan officer at the desk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
