import { Download, Check } from 'lucide-react';
import { usePWA } from '../hooks/usePWA';

export function PWAInstallButton({ className = "" }) {
  const { isInstallable, isInstalled, installApp } = usePWA();

  const handleInstall = async () => {
    await installApp();
  };

  if (isInstalled) {
    return (
      <button
        className={`btn btn-outline ${className}`}
        disabled
      >
        <Check size={18} className="mr-2" />
        Installed
      </button>
    );
  }

  if (!isInstallable) {
    return null;
  }

  return (
    <button
      onClick={handleInstall}
      className={`btn btn-secondary ${className}`}
    >
      <Download size={18} className="mr-2" />
      Install App
    </button>
  );
}