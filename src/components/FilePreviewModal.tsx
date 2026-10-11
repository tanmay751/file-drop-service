import React from 'react';
import { TransferItem } from '../types';

interface FilePreviewModalProps {
  item: TransferItem | null;
  onClose: () => void;
  onDownload: (item: TransferItem) => void;
}

export const FilePreviewModal: React.FC<FilePreviewModalProps> = ({
  item,
  onClose,
  onDownload,
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0e16]/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#1c2028] p-6 shadow-2xl border border-[#3c4a42]/40 text-[#dfe2ee]">
        <div className="flex items-center justify-between pb-3 border-b border-[#3c4a42]/30">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#4edea3]">
              {item.type === 'image' ? 'image' : 'description'}
            </span>
            <h3 className="font-['Plus+Jakarta+Sans',sans-serif] text-base font-bold truncate max-w-sm">
              {item.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#bbcabf] hover:text-white hover:bg-[#262a33] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content Viewer */}
        <div className="my-5 rounded-xl bg-[#0f131c] p-4 flex flex-col items-center justify-center min-h-[260px] border border-[#3c4a42]/20">
          {item.previewUrl ? (
            <img
              src={item.previewUrl}
              alt={item.name}
              className="max-h-[360px] max-w-full rounded-lg object-contain"
            />
          ) : item.type === 'image' ? (
            <div className="text-center p-8">
              <span className="material-symbols-outlined text-[64px] text-[#4edea3] mb-2">
                image
              </span>
              <p className="text-sm font-medium text-[#dfe2ee]">{item.name}</p>
              <p className="font-['JetBrains+Mono',monospace] text-xs text-[#bbcabf] mt-1">
                {item.size} • High Fidelity Raw Heic / JPEG
              </p>
            </div>
          ) : (
            <div className="text-center p-8">
              <span className="material-symbols-outlined text-[64px] text-[#4cd7f6] mb-2">
                picture_as_pdf
              </span>
              <p className="text-sm font-medium text-[#dfe2ee]">{item.name}</p>
              <p className="font-['JetBrains+Mono',monospace] text-xs text-[#bbcabf] mt-1">
                {item.size} • Portable Document Format
              </p>
            </div>
          )}
        </div>

        {/* Metadata info */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 rounded-xl bg-[#181c24] p-3 text-xs border border-[#3c4a42]/20 font-['JetBrains+Mono',monospace]">
          <div>
            <span className="text-[#86948a] block text-[10px]">FILE SIZE</span>
            <span className="text-[#dfe2ee] font-semibold">{item.size}</span>
          </div>
          <div>
            <span className="text-[#86948a] block text-[10px]">SOURCE NODE</span>
            <span className="text-[#4cd7f6] truncate block">{item.senderDevice}</span>
          </div>
          <div>
            <span className="text-[#86948a] block text-[10px]">DELIVERY TIME</span>
            <span className="text-[#dfe2ee]">{item.timestamp}</span>
          </div>
          <div>
            <span className="text-[#86948a] block text-[10px]">ENCRYPTION</span>
            <span className="text-[#4edea3]">TLS 1.3 Direct</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 flex items-center justify-end gap-3 pt-3 border-t border-[#3c4a42]/30">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#bbcabf] hover:text-[#dfe2ee] cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => onDownload(item)}
            className="flex items-center gap-1.5 rounded-lg bg-[#10b981] hover:bg-[#4edea3] text-[#00422b] px-4 py-2 text-xs font-bold transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">download</span>
            <span>Download to Local Drive</span>
          </button>
        </div>
      </div>
    </div>
  );
};
