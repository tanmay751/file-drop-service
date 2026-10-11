import React, { useState } from 'react';
import { TransferItem } from '../types';

interface LiveFeedProps {
  items: TransferItem[];
  soundEnabled: boolean;
  onToggleSound: () => void;
  onTestSound: () => void;
  onSimulateIncoming: () => void;
  onDownloadItem: (item: TransferItem) => void;
  onPreviewItem: (item: TransferItem) => void;
}

export const LiveFeed: React.FC<LiveFeedProps> = ({
  items,
  soundEnabled,
  onToggleSound,
  onTestSound,
  onSimulateIncoming,
  onDownloadItem,
  onPreviewItem,
}) => {
  const [testLabel, setTestLabel] = useState('Test Sound');

  const handleTestSound = () => {
    onTestSound();
    setTestLabel('Played!');
    setTimeout(() => setTestLabel('Test Sound'), 1400);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#1c2028] p-5 shadow-lg border border-[#3c4a42]/30">
      <div className="flex items-center justify-between pb-2 border-b border-[#3c4a42]/20">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2 w-2 rounded-full bg-[#4cd7f6] animate-ping"></span>
          <span className="font-['Plus+Jakarta+Sans',sans-serif] text-base md:text-lg font-bold text-[#dfe2ee]">
            Live Walk-in Stream
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onSimulateIncoming}
            className="flex items-center gap-1 rounded bg-[#262a33] hover:bg-[#353942] px-2 py-0.5 text-xs text-[#4edea3] font-medium transition-colors cursor-pointer border border-[#4edea3]/30"
            title="Simulate customer phone uploading a file"
          >
            <span className="material-symbols-outlined text-[14px]">add_circle</span>
            <span>+ Simulate Drop</span>
          </button>
          <span className="font-['JetBrains+Mono',monospace] text-[11px] rounded bg-[#262a33] px-2 py-0.5 text-[#4cd7f6] font-medium">
            P2P TUNNEL
          </span>
        </div>
      </div>

      {/* In-Flight Feed Items */}
      <div className="mt-3 flex flex-col gap-2.5" id="liveFeedContainer">
        {items.map((item) => {
          if (item.status === 'connected') {
            return (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl bg-[#181c24] p-3 transition-all hover:bg-[#262a33] border border-[#3c4a42]/20"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#4cd7f6]/15 text-[#4cd7f6]">
                    <span className="material-symbols-outlined text-[20px]">
                      phone_iphone
                    </span>
                  </div>
                  <div className="min-w-0 flex flex-col">
                    <span className="text-sm font-medium text-[#dfe2ee] truncate">
                      {item.senderDevice}
                    </span>
                    <span className="text-xs text-[#4cd7f6]">
                      Connected • Awaiting file selection
                    </span>
                  </div>
                </div>
                <span className="shrink-0 font-['JetBrains+Mono',monospace] text-[11px] text-[#bbcabf]">
                  {item.timestamp}
                </span>
              </div>
            );
          }

          if (item.status === 'transferring') {
            return (
              <div
                key={item.id}
                className="flex flex-col gap-2 rounded-xl bg-[#181c24] p-3 transition-all hover:bg-[#262a33] border border-[#3c4a42]/20"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#4edea3]/15 text-[#4edea3]">
                      <span className="material-symbols-outlined text-[20px]">
                        {item.type === 'image' ? 'image' : 'description'}
                      </span>
                    </div>
                    <div className="min-w-0 flex flex-col">
                      <span className="text-sm font-medium text-[#dfe2ee] truncate">
                        {item.name}
                      </span>
                      <span className="font-['JetBrains+Mono',monospace] text-xs text-[#bbcabf]">
                        {item.senderDevice} • {item.size}
                      </span>
                    </div>
                  </div>
                  <span className="shrink-0 font-['JetBrains+Mono',monospace] text-xs font-bold text-[#4edea3] tabular-nums">
                    {Math.round(item.progress)}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="h-1.5 w-full rounded-full bg-[#31353e] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#4cd7f6] to-[#4edea3] transition-all duration-300"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            );
          }

          // Completed item
          return (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl bg-[#181c24] p-3 opacity-90 hover:opacity-100 transition-all border border-[#3c4a42]/20 group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#262a33] text-[#4edea3]">
                  <span className="material-symbols-outlined text-[20px]">
                    check_circle
                  </span>
                </div>
                <div className="min-w-0 flex flex-col">
                  <span className="text-sm font-medium text-[#dfe2ee] truncate">
                    {item.name}
                  </span>
                  <span className="text-xs text-[#bbcabf]">
                    Delivered safely • Self-destruct enabled
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => onPreviewItem(item)}
                  className="opacity-0 group-hover:opacity-100 p-1 text-[#bbcabf] hover:text-[#4cd7f6] transition-opacity cursor-pointer"
                  title="Preview document"
                >
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                </button>
                <button
                  onClick={() => onDownloadItem(item)}
                  className="opacity-0 group-hover:opacity-100 p-1 text-[#bbcabf] hover:text-[#4edea3] transition-opacity cursor-pointer"
                  title="Download file"
                >
                  <span className="material-symbols-outlined text-[16px]">download</span>
                </button>
                <span className="font-['JetBrains+Mono',monospace] text-[11px] text-[#bbcabf]">
                  {item.timestamp}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chime Audio Notification Simulation Bar */}
      <div className="mt-3 flex items-center justify-between rounded-lg bg-[#262a33] px-3 py-2 text-[#bbcabf] border border-[#3c4a42]/20">
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleSound}
            className="flex items-center text-[#4edea3] hover:text-white transition-colors cursor-pointer"
            title={soundEnabled ? 'Mute sound' : 'Enable sound'}
          >
            <span className="material-symbols-outlined text-[16px]">
              {soundEnabled ? 'volume_up' : 'volume_off'}
            </span>
          </button>
          <span className="text-xs">
            {soundEnabled ? 'Audio chime alerts enabled' : 'Chime alerts muted'}
          </span>
        </div>
        <button
          onClick={handleTestSound}
          className="font-['JetBrains+Mono',monospace] text-xs text-[#4cd7f6] hover:text-[#4edea3] transition-colors cursor-pointer font-medium"
        >
          {testLabel}
        </button>
      </div>
    </div>
  );
};
