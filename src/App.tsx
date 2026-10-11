/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SubBar } from './components/SubBar';
import { QrCard } from './components/QrCard';
import { ControlsPanel } from './components/ControlsPanel';
import { LiveFeed } from './components/LiveFeed';
import { ThreeStepFlow } from './components/ThreeStepFlow';
import { ZeroCloudBanner } from './components/ZeroCloudBanner';
import { TvModal } from './components/TvModal';
import { CounterStandModal } from './components/CounterStandModal';
import { ShareLinkModal } from './components/ShareLinkModal';
import { DirectDropView } from './components/DirectDropView';
import { RecentTransfersView } from './components/RecentTransfersView';
import { HowItWorksView } from './components/HowItWorksView';
import { FilePreviewModal } from './components/FilePreviewModal';
import { Footer } from './components/Footer';
import { TransferItem } from './types';
import { playChime } from './utils/audio';

export default function App() {
  const [currentTab, setCurrentTab] = useState<
    'qr-code-connect' | 'direct-drop' | 'recent-transfers' | 'how-it-works'
  >('qr-code-connect');

  // Session State
  const [sessionCode, setSessionCode] = useState('#DROP-8492');
  const [secondsLeft, setSecondsLeft] = useState(45 * 60 - 2);
  const [connectedCount, setConnectedCount] = useState(2);
  const [counterMode, setCounterMode] = useState(true);
  const [requirePin, setRequirePin] = useState(false);
  const [pinCode] = useState('4892');
  const [welcomeNote, setWelcomeNote] = useState(
    'Welcome to Alex Print Studio & Front Desk! Drop your proofs or photos here.'
  );
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [storeName, setStoreName] = useState('Alex Print Studio & Front Desk');

  // Modals
  const [isTvModalOpen, setIsTvModalOpen] = useState(false);
  const [isStandModalOpen, setIsStandModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [previewItem, setPreviewItem] = useState<TransferItem | null>(null);

  // Transfers Feed
  const [items, setItems] = useState<TransferItem[]>([
    {
      id: 'conn-1',
      name: 'Customer iPhone 15 Pro',
      size: '',
      type: 'document',
      senderDevice: 'Customer iPhone 15 Pro',
      status: 'connected',
      progress: 0,
      timestamp: 'Just now',
    },
    {
      id: 'file-1',
      name: 'passport_scan_page1.heic',
      size: '8.4 MB',
      type: 'image',
      senderDevice: 'Samsung Galaxy S24 Ultra',
      status: 'transferring',
      progress: 82,
      timestamp: 'Just now',
    },
    {
      id: 'file-2',
      name: 'store_permit_final.pdf',
      size: '2.4 MB',
      type: 'pdf',
      senderDevice: 'Customer iPhone 14',
      status: 'completed',
      progress: 100,
      timestamp: '1m ago',
    },
  ]);

  // Countdown Timer Interval
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 45 * 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format time mm:ss
  const formatTime = (totalSeconds: number) => {
    const m = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, '0');
    const s = (totalSeconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  // Regenerate Session Handler
  const handleRegenerateSession = () => {
    const rand = Math.floor(1000 + Math.random() * 9000);
    setSessionCode(`#DROP-${rand}`);
    setSecondsLeft(45 * 60);
    playChime(soundEnabled);
  };

  // Test Chime Sound
  const handleTestSound = () => {
    playChime(true);
  };

  // Simulate an incoming drop
  const handleSimulateIncoming = () => {
    const mockFiles = [
      { name: 'tax_return_2025_w2.pdf', size: '3.8 MB', type: 'pdf' as const, device: 'Google Pixel 9 Pro' },
      { name: 'drivers_license_front.jpg', size: '5.2 MB', type: 'image' as const, device: 'iPhone 16 Pro' },
      { name: 'event_banner_300dpi.png', size: '14.1 MB', type: 'image' as const, device: 'iPad Pro M4' },
      { name: 'notary_affidavit_signed.pdf', size: '1.9 MB', type: 'pdf' as const, device: 'Galaxy Z Fold 6' },
    ];
    const pick = mockFiles[Math.floor(Math.random() * mockFiles.length)];
    const newItemId = `sim-${Date.now()}`;

    setConnectedCount((prev) => prev + 1);

    const newItem: TransferItem = {
      id: newItemId,
      name: pick.name,
      size: pick.size,
      type: pick.type,
      senderDevice: pick.device,
      status: 'transferring',
      progress: 15,
      timestamp: 'Just now',
    };

    setItems((prev) => [newItem, ...prev]);

    // Animate progress to complete
    let currentProgress = 15;
    const progressInterval = setInterval(() => {
      currentProgress += 25;
      if (currentProgress >= 100) {
        clearInterval(progressInterval);
        playChime(soundEnabled);
        setItems((prev) =>
          prev.map((it) =>
            it.id === newItemId
              ? { ...it, progress: 100, status: 'completed', timestamp: 'Just now' }
              : it
          )
        );
      } else {
        setItems((prev) =>
          prev.map((it) =>
            it.id === newItemId ? { ...it, progress: currentProgress } : it
          )
        );
      }
    }, 350);
  };

  // Download item simulation
  const handleDownloadItem = (item: TransferItem) => {
    const content = item.previewUrl
      ? item.previewUrl
      : `InstantDrop Ephemeral Transfer Record\nFilename: ${item.name}\nSize: ${item.size}\nSender: ${item.senderDevice}\nChecksum: sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855\nStatus: Delivered point-to-point via TLS 1.3\nDate: ${new Date().toISOString()}`;
    const blob = new Blob([content], {
      type: item.type === 'pdf' ? 'application/pdf' : 'text/plain',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = item.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Handle file pushed from DirectDropView
  const handleSendFileFromPortal = (fileData: Omit<TransferItem, 'id' | 'timestamp'>) => {
    const newItem: TransferItem = {
      ...fileData,
      id: `portal-${Date.now()}`,
      timestamp: 'Just now',
    };
    setItems((prev) => [newItem, ...prev]);
    playChime(soundEnabled);
  };

  const handleDeleteItem = (id: string) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const handleClearAll = () => {
    setItems((prev) => prev.filter((it) => it.status === 'connected'));
  };

  return (
    <div className="bg-[#0f131c] text-[#dfe2ee] min-h-screen flex flex-col antialiased">
      {/* Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={(tab) => setCurrentTab(tab)}
        onOpenShareModal={() => setIsShareModalOpen(true)}
      />

      {/* Main Container */}
      <main className="w-full pt-20 md:pt-24 flex-1">
        {/* VIEW 1: QR Code Connect (Matches the provided screenshot exactly) */}
        {currentTab === 'qr-code-connect' && (
          <section className="relative w-full overflow-hidden py-4 px-4 md:px-6 lg:px-8">
            {/* Ambient glowing underlays */}
            <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-[#4edea3]/10 blur-[120px]"></div>
            <div className="pointer-events-none absolute top-1/2 -right-32 h-[32rem] w-[32rem] rounded-full bg-[#4cd7f6]/10 blur-[140px]"></div>

            <div className="mx-auto w-full max-w-7xl">
              {/* Tactical Status Sub-Bar */}
              <SubBar
                sessionCode={sessionCode}
                formattedTime={formatTime(secondsLeft)}
                connectedCount={connectedCount}
              />

              {/* Main Stage Split Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Column: QR Anchor (Desktop 7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  {/* Central QR Card */}
                  <QrCard
                    sessionCode={sessionCode}
                    counterMode={counterMode}
                    onPrintStand={() => setIsStandModalOpen(true)}
                    onProjectTv={() => setIsTvModalOpen(true)}
                    onRegenerateSession={handleRegenerateSession}
                    onOpenMobileView={() => setCurrentTab('direct-drop')}
                  />

                  {/* Display & Security Controls */}
                  <ControlsPanel
                    counterMode={counterMode}
                    onToggleCounterMode={() => setCounterMode((prev) => !prev)}
                    requirePin={requirePin}
                    pinCode={pinCode}
                    onTogglePin={() => setRequirePin((prev) => !prev)}
                    welcomeNote={welcomeNote}
                    onSaveWelcomeNote={(note) => setWelcomeNote(note)}
                  />
                </div>

                {/* Right Column: Live Stream & Customer Experience (Desktop 5 cols) */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  {/* Live Walk-in Stream */}
                  <LiveFeed
                    items={items}
                    soundEnabled={soundEnabled}
                    onToggleSound={() => setSoundEnabled((prev) => !prev)}
                    onTestSound={handleTestSound}
                    onSimulateIncoming={handleSimulateIncoming}
                    onDownloadItem={handleDownloadItem}
                    onPreviewItem={(item) => setPreviewItem(item)}
                  />

                  {/* 3-Step Frictionless Flow */}
                  <ThreeStepFlow
                    onOpenStandModal={() => setIsStandModalOpen(true)}
                  />

                  {/* Zero Cloud Footprint Banner */}
                  <ZeroCloudBanner />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* VIEW 2: Direct Drop (Mobile Customer Upload Portal) */}
        {currentTab === 'direct-drop' && (
          <DirectDropView
            sessionCode={sessionCode}
            welcomeMessage={welcomeNote}
            requirePin={requirePin}
            pinCode={pinCode}
            onSendFile={handleSendFileFromPortal}
            onSwitchToHost={() => setCurrentTab('qr-code-connect')}
          />
        )}

        {/* VIEW 3: Recent Transfers History */}
        {currentTab === 'recent-transfers' && (
          <RecentTransfersView
            items={items}
            onDownloadItem={handleDownloadItem}
            onPreviewItem={(item) => setPreviewItem(item)}
            onDeleteItem={handleDeleteItem}
            onClearAll={handleClearAll}
          />
        )}

        {/* VIEW 4: How It Works & Architecture */}
        {currentTab === 'how-it-works' && <HowItWorksView />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Fullscreen TV Kiosk Mode Modal */}
      <TvModal
        isOpen={isTvModalOpen}
        onClose={() => setIsTvModalOpen(false)}
        sessionCode={sessionCode}
        welcomeMessage={welcomeNote}
      />

      {/* 5x7" Acrylic Tent Card Counter Stand Modal */}
      <CounterStandModal
        isOpen={isStandModalOpen}
        onClose={() => setIsStandModalOpen(false)}
        sessionCode={sessionCode}
        storeName={storeName}
      />

      {/* Share My Link Modal */}
      <ShareLinkModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        sessionCode={sessionCode}
      />

      {/* File Preview Modal */}
      <FilePreviewModal
        item={previewItem}
        onClose={() => setPreviewItem(null)}
        onDownload={handleDownloadItem}
      />
    </div>
  );
}
