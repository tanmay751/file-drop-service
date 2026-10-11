import React, { useState } from 'react';
import { TransferItem } from '../types';

interface RecentTransfersViewProps {
  items: TransferItem[];
  onDownloadItem: (item: TransferItem) => void;
  onPreviewItem: (item: TransferItem) => void;
  onDeleteItem: (id: string) => void;
  onClearAll: () => void;
}

export const RecentTransfersView: React.FC<RecentTransfersViewProps> = ({
  items,
  onDownloadItem,
  onPreviewItem,
  onDeleteItem,
  onClearAll,
}) => {
  const [filter, setFilter] = useState<'all' | 'image' | 'pdf'>('all');
  const [search, setSearch] = useState('');

  const completedItems = items.filter(
    (item) => item.status === 'completed'
  );

  const filteredItems = completedItems.filter((item) => {
    const matchesFilter = filter === 'all' || item.type === filter;
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.senderDevice.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="w-full max-w-7xl mx-auto py-6 px-4 md:px-6 animate-in fade-in duration-200">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#4edea3]">
              folder_managed
            </span>
            <h2 className="font-['Plus+Jakarta+Sans',sans-serif] text-2xl font-bold text-[#dfe2ee]">
              Recent Ephemeral Transfers
            </h2>
          </div>
          <p className="text-xs text-[#bbcabf] mt-1">
            Delivered straight to this station's browser memory. Self-destructs upon session termination.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {completedItems.length > 0 && (
            <button
              onClick={onClearAll}
              className="flex items-center gap-1.5 rounded-lg bg-[#262a33] hover:bg-[#ff7886]/20 hover:text-[#ffb2b7] text-xs text-[#bbcabf] px-3 py-1.5 transition-colors border border-[#3c4a42]/30 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">delete_sweep</span>
              <span>Purge All Now</span>
            </button>
          )}
        </div>
      </div>

      {/* Filter and search bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 rounded-xl bg-[#1c2028] p-3 border border-[#3c4a42]/30">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              filter === 'all'
                ? 'bg-[#10b981] text-[#00422b]'
                : 'text-[#bbcabf] hover:text-[#dfe2ee]'
            }`}
          >
            All Files ({completedItems.length})
          </button>
          <button
            onClick={() => setFilter('image')}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              filter === 'image'
                ? 'bg-[#10b981] text-[#00422b]'
                : 'text-[#bbcabf] hover:text-[#dfe2ee]'
            }`}
          >
            Photos &amp; Scans
          </button>
          <button
            onClick={() => setFilter('pdf')}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              filter === 'pdf'
                ? 'bg-[#10b981] text-[#00422b]'
                : 'text-[#bbcabf] hover:text-[#dfe2ee]'
            }`}
          >
            PDF Documents
          </button>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search transfers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-lg bg-[#181c24] px-3 py-1.5 pl-8 text-xs text-[#dfe2ee] placeholder:text-[#86948a] border border-[#3c4a42]/30 focus:outline-none focus:ring-1 focus:ring-[#4edea3]"
          />
          <span className="material-symbols-outlined absolute left-2 top-2 text-[16px] text-[#86948a]">
            search
          </span>
        </div>
      </div>

      {/* Transfer List Table / Cards */}
      {filteredItems.length === 0 ? (
        <div className="rounded-2xl bg-[#1c2028] p-12 text-center border border-[#3c4a42]/30">
          <span className="material-symbols-outlined text-[40px] text-[#86948a] mb-2">
            inbox
          </span>
          <h3 className="text-base font-semibold text-[#dfe2ee]">No transfers found</h3>
          <p className="text-xs text-[#bbcabf] mt-1 max-w-sm mx-auto">
            Scan the counter QR with any phone or run a demo simulation to receive files.
          </p>
        </div>
      ) : (
        <div className="rounded-2xl bg-[#1c2028] overflow-hidden border border-[#3c4a42]/30">
          <div className="divide-y divide-[#3c4a42]/20">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-wrap items-center justify-between p-4 hover:bg-[#262a33]/50 transition-colors gap-4"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#262a33] text-[#4edea3]">
                    <span className="material-symbols-outlined text-[22px]">
                      {item.type === 'image' ? 'photo_library' : 'description'}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-[#dfe2ee] truncate">
                      {item.name}
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 mt-0.5 font-['JetBrains+Mono',monospace] text-[11px] text-[#bbcabf]">
                      <span>{item.size}</span>
                      <span>•</span>
                      <span>From: {item.senderDevice}</span>
                      <span>•</span>
                      <span className="text-[#4cd7f6]">{item.timestamp}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="hidden sm:inline-flex items-center gap-1 font-['JetBrains+Mono',monospace] text-[11px] text-[#4edea3] bg-[#4edea3]/10 px-2 py-0.5 rounded">
                    <span className="material-symbols-outlined text-[13px]">verified_user</span>
                    TLS 1.3 Verified
                  </span>

                  <button
                    onClick={() => onPreviewItem(item)}
                    className="flex items-center gap-1 rounded-lg bg-[#262a33] hover:bg-[#353942] text-[#dfe2ee] px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer border border-[#3c4a42]/20"
                  >
                    <span className="material-symbols-outlined text-[16px]">visibility</span>
                    <span>View</span>
                  </button>

                  <button
                    onClick={() => onDownloadItem(item)}
                    className="flex items-center gap-1 rounded-lg bg-[#10b981] hover:bg-[#4edea3] text-[#00422b] px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">download</span>
                    <span>Save</span>
                  </button>

                  <button
                    onClick={() => onDeleteItem(item.id)}
                    className="p-1.5 text-[#bbcabf] hover:text-[#ffb2b7] hover:bg-[#ff7886]/20 rounded-lg transition-colors cursor-pointer"
                    title="Purge / Self-destruct immediately"
                  >
                    <span className="material-symbols-outlined text-[18px]">delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
