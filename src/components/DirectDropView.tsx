import React, { useState, useRef } from 'react';
import { TransferItem } from '../types';

interface DirectDropViewProps {
  sessionCode: string;
  welcomeMessage: string;
  requirePin: boolean;
  pinCode: string;
  onSendFile: (item: Omit<TransferItem, 'id' | 'timestamp'>) => void;
  onSwitchToHost: () => void;
}

export const DirectDropView: React.FC<DirectDropViewProps> = ({
  sessionCode,
  welcomeMessage,
  requirePin,
  pinCode,
  onSendFile,
  onSwitchToHost,
}) => {
  const [pinInput, setPinInput] = useState('');
  const [pinVerified, setPinVerified] = useState(!requirePin);
  const [pinError, setPinError] = useState(false);
  const [deviceName, setDeviceName] = useState('Customer iPhone 15 Pro');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [sendProgress, setSendProgress] = useState(0);
  const [sentSuccess, setSentSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleVerifyPin = () => {
    if (pinInput.trim() === pinCode.trim()) {
      setPinVerified(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => setFilePreview(reader.result as string);
        reader.readAsDataURL(file);
      } else {
        setFilePreview(null);
      }
    }
  };

  const handleSimulateSelectPreset = (name: string, size: string, type: 'image' | 'pdf') => {
    setIsSending(true);
    setSendProgress(10);

    const interval = setInterval(() => {
      setSendProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSending(false);
          setSentSuccess(true);
          onSendFile({
            name,
            size,
            type,
            senderDevice: deviceName,
            status: 'completed',
            progress: 100,
          });
          return 100;
        }
        return prev + 15;
      });
    }, 200);
  };

  const handleTransferSelected = () => {
    if (!selectedFile) return;

    setIsSending(true);
    setSendProgress(5);

    const isImg = selectedFile.type.startsWith('image/');
    const fileSizeStr = `${(selectedFile.size / (1024 * 1024)).toFixed(1)} MB`;

    const interval = setInterval(() => {
      setSendProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSending(false);
          setSentSuccess(true);
          onSendFile({
            name: selectedFile.name,
            size: fileSizeStr,
            type: isImg ? 'image' : 'pdf',
            senderDevice: deviceName,
            status: 'completed',
            progress: 100,
            previewUrl: filePreview || undefined,
          });
          return 100;
        }
        return prev + 20;
      });
    }, 180);
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-6 px-4 animate-in fade-in duration-200">
      {/* Return to QR station bar */}
      <div className="mb-4 flex items-center justify-between">
        <button
          onClick={onSwitchToHost}
          className="flex items-center gap-1.5 text-xs text-[#bbcabf] hover:text-[#4edea3] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          <span>Back to In-Store QR Station</span>
        </button>
        <span className="font-['JetBrains+Mono',monospace] text-xs text-[#4cd7f6] bg-[#181c24] px-2.5 py-1 rounded-full border border-[#3c4a42]/30">
          Tunnel: {sessionCode}
        </span>
      </div>

      {/* Phone container frame */}
      <div className="rounded-3xl bg-[#1c2028] p-6 shadow-2xl border border-[#3c4a42]/40 relative overflow-hidden">
        {/* Glow */}
        <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[#4edea3]/10 blur-3xl"></div>

        {/* Welcome message header */}
        <div className="rounded-2xl bg-[#181c24] p-4 border border-[#3c4a42]/30 mb-6">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
            <span className="font-['JetBrains+Mono',monospace] text-[11px] uppercase tracking-wider text-[#4edea3] font-semibold">
              Live Walk-in Portal
            </span>
          </div>
          <p className="text-sm font-medium text-[#dfe2ee] leading-relaxed">
            {welcomeMessage || 'Welcome! Drop your proofs or photos directly to our front desk.'}
          </p>
        </div>

        {/* PIN verification barrier if enabled */}
        {requirePin && !pinVerified ? (
          <div className="rounded-2xl bg-[#181c24] p-6 border border-[#ffb2b7]/30 text-center">
            <div className="w-12 h-12 rounded-full bg-[#ffb2b7]/15 text-[#ffb2b7] flex items-center justify-center mx-auto mb-3">
              <span className="material-symbols-outlined text-[24px]">lock</span>
            </div>
            <h3 className="font-['Plus+Jakarta+Sans',sans-serif] text-lg font-bold text-[#dfe2ee]">
              Confidential Session PIN Required
            </h3>
            <p className="text-xs text-[#bbcabf] mt-1 mb-4">
              Ask the front desk clerk for the 4-digit session security code.
            </p>
            <div className="flex items-center justify-center gap-2 max-w-xs mx-auto mb-4">
              <input
                type="text"
                maxLength={4}
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="4-digit PIN"
                className="w-36 text-center font-['JetBrains+Mono',monospace] text-xl tracking-widest bg-[#262a33] text-[#dfe2ee] rounded-xl px-3 py-2 border border-[#3c4a42]/40 focus:outline-none focus:ring-1 focus:ring-[#4edea3]"
              />
              <button
                onClick={handleVerifyPin}
                className="rounded-xl bg-[#10b981] hover:bg-[#4edea3] text-[#00422b] px-4 py-2 text-sm font-semibold transition-all cursor-pointer"
              >
                Unlock
              </button>
            </div>
            {pinError && (
              <p className="text-xs text-[#ffb4ab]">
                Incorrect PIN. Please check the front desk display. (Hint: {pinCode})
              </p>
            )}
          </div>
        ) : (
          <div>
            {/* Device tag */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#3c4a42]/20">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#4cd7f6]">
                  smartphone
                </span>
                <span className="text-xs text-[#bbcabf]">Sending from:</span>
              </div>
              <input
                type="text"
                value={deviceName}
                onChange={(e) => setDeviceName(e.target.value)}
                className="bg-[#262a33] text-xs text-[#dfe2ee] px-2.5 py-1 rounded-md border border-[#3c4a42]/30 focus:outline-none"
              />
            </div>

            {sentSuccess ? (
              <div className="rounded-2xl bg-[#181c24] p-6 text-center border border-[#4edea3]/40 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-[#4edea3]/20 text-[#4edea3] flex items-center justify-center mx-auto mb-3">
                  <span className="material-symbols-outlined text-[32px]">check_circle</span>
                </div>
                <h3 className="font-['Plus+Jakarta+Sans',sans-serif] text-xl font-bold text-[#dfe2ee]">
                  Delivered Directly to Counter!
                </h3>
                <p className="text-xs text-[#bbcabf] mt-1 max-w-sm mx-auto leading-relaxed">
                  The terminal at the front desk has received your files via point-to-point tunnel.
                  Zero data stored in any cloud.
                </p>
                <div className="mt-5 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setSentSuccess(false);
                      setSelectedFile(null);
                      setFilePreview(null);
                    }}
                    className="rounded-xl bg-[#262a33] hover:bg-[#353942] text-[#dfe2ee] px-4 py-2 text-xs font-semibold cursor-pointer"
                  >
                    Send Another File
                  </button>
                  <button
                    onClick={onSwitchToHost}
                    className="rounded-xl bg-[#10b981] hover:bg-[#4edea3] text-[#00422b] px-4 py-2 text-xs font-semibold cursor-pointer"
                  >
                    View Receiver Desk
                  </button>
                </div>
              </div>
            ) : isSending ? (
              <div className="rounded-2xl bg-[#181c24] p-6 text-center border border-[#3c4a42]/30">
                <div className="w-12 h-12 rounded-full bg-[#4cd7f6]/15 text-[#4cd7f6] flex items-center justify-center mx-auto mb-3 animate-spin">
                  <span className="material-symbols-outlined text-[24px]">sync</span>
                </div>
                <h3 className="text-base font-bold text-[#dfe2ee]">
                  Streaming Point-to-Point...
                </h3>
                <p className="text-xs text-[#bbcabf] mt-1 mb-4">
                  Direct WebRTC Datachannel to recipient workstation
                </p>
                <div className="w-full max-w-md mx-auto">
                  <div className="h-2 w-full rounded-full bg-[#31353e] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#4cd7f6] to-[#4edea3] transition-all duration-200"
                      style={{ width: `${sendProgress}%` }}
                    />
                  </div>
                  <span className="font-['JetBrains+Mono',monospace] text-xs text-[#4edea3] mt-2 inline-block">
                    {sendProgress}% Transferred
                  </span>
                </div>
              </div>
            ) : (
              <div>
                {/* Drag and drop / file picker */}
                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                />

                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="rounded-2xl border-2 border-dashed border-[#3c4a42] hover:border-[#4edea3] bg-[#181c24] p-8 text-center cursor-pointer transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#262a33] group-hover:bg-[#4edea3]/20 group-hover:text-[#4edea3] text-[#dfe2ee] flex items-center justify-center mx-auto mb-3 transition-colors">
                    <span className="material-symbols-outlined text-[26px]">upload_file</span>
                  </div>
                  <h4 className="text-sm font-semibold text-[#dfe2ee]">
                    {selectedFile ? selectedFile.name : 'Tap to select photos, PDFs or documents'}
                  </h4>
                  <p className="text-xs text-[#bbcabf] mt-1">
                    {selectedFile
                      ? `${(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • Ready to stream`
                      : 'High resolution images, passport copies, print-ready files'}
                  </p>
                </div>

                {selectedFile && (
                  <div className="mt-4 flex justify-center">
                    <button
                      onClick={handleTransferSelected}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#10b981] hover:bg-[#4edea3] text-[#00422b] py-3 text-sm font-bold shadow-lg transition-all cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[20px]">send</span>
                      <span>Send to Front Desk Now</span>
                    </button>
                  </div>
                )}

                {/* Quick Presets for Demo */}
                <div className="mt-6 pt-4 border-t border-[#3c4a42]/20">
                  <span className="font-['JetBrains+Mono',monospace] text-[11px] text-[#bbcabf] uppercase tracking-wider block mb-2">
                    Quick Walk-in Test Presets:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <button
                      onClick={() =>
                        handleSimulateSelectPreset(
                          'passport_scan_page1.heic',
                          '8.4 MB',
                          'image'
                        )
                      }
                      className="flex items-center gap-2 rounded-xl bg-[#262a33] hover:bg-[#353942] p-2.5 text-left text-xs text-[#dfe2ee] transition-colors border border-[#3c4a42]/20 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px] text-[#4edea3]">
                        badge
                      </span>
                      <div>
                        <div className="font-medium">passport_scan_page1.heic</div>
                        <div className="text-[10px] text-[#bbcabf]">8.4 MB • High Res Photo</div>
                      </div>
                    </button>

                    <button
                      onClick={() =>
                        handleSimulateSelectPreset(
                          'store_permit_final.pdf',
                          '2.1 MB',
                          'pdf'
                        )
                      }
                      className="flex items-center gap-2 rounded-xl bg-[#262a33] hover:bg-[#353942] p-2.5 text-left text-xs text-[#dfe2ee] transition-colors border border-[#3c4a42]/20 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px] text-[#4cd7f6]">
                        picture_as_pdf
                      </span>
                      <div>
                        <div className="font-medium">store_permit_final.pdf</div>
                        <div className="text-[10px] text-[#bbcabf]">2.1 MB • Official Doc</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
