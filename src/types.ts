export interface TransferItem {
  id: string;
  name: string;
  size: string;
  type: 'image' | 'pdf' | 'document' | 'archive';
  senderDevice: string;
  status: 'connected' | 'transferring' | 'completed' | 'purged';
  progress: number;
  timestamp: string;
  selfDestructTime?: string;
  downloadUrl?: string;
  dataUrl?: string;
  previewUrl?: string;
}

export interface SessionConfig {
  sessionCode: string;
  expiresInSeconds: number;
  counterMode: boolean;
  requirePin: boolean;
  pinCode: string;
  welcomeMessage: string;
  connectedDevicesCount: number;
  soundEnabled: boolean;
  storeName: string;
}
