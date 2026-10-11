import React from 'react';

export const ZeroCloudBanner: React.FC = () => {
  return (
    <div className="rounded-xl bg-[#181c24] p-4 flex flex-col gap-1.5 border border-[#3c4a42]/30">
      <div className="flex items-center justify-between">
        <span className="font-['JetBrains+Mono',monospace] text-[11px] text-[#4edea3] uppercase font-bold tracking-wider">
          Zero Cloud Footprint
        </span>
        <span className="font-['JetBrains+Mono',monospace] text-[11px] text-[#4cd7f6]">
          TLS 1.3 + WebRTC
        </span>
      </div>
      <p className="text-xs text-[#bbcabf] leading-relaxed">
        Customer files travel directly point-to-point without staging in any middleman cloud storage.
        Perfect for driver’s licenses, print artwork, and financial documents.
      </p>
    </div>
  );
};
