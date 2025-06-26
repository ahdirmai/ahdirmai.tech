import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, Smartphone } from 'lucide-react';
import { usePWA } from '../hooks/usePWA';

export function InstallPrompt() {
  const { isInstallable, isInstalled, installApp } = usePWA();
  const [showPrompt, setShowPrompt] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show prompt after 10 seconds if installable and not dismissed
    const timer = setTimeout(() => {
      if (isInstallable && !isInstalled && !dismissed) {
        setShowPrompt(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [isInstallable, isInstalled, dismissed]);

  const handleInstall = async () => {
    const success = await installApp();
    if (success) {
      setShowPrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setDismissed(true);
    // Remember dismissal for this session
    sessionStorage.setItem('pwa-prompt-dismissed', 'true');
  };

  // Check if already dismissed this session
  useEffect(() => {
    const wasDismissed = sessionStorage.getItem('pwa-prompt-dismissed');
    if (wasDismissed) {
      setDismissed(true);
    }
  }, []);

  if (!isInstallable || isInstalled || !showPrompt) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-50"
      >
        <div className="card p-4 bg-retro-white-50 border-2 border-retro-black-900 shadow-retro-xl">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center">
              <div className="retro-box w-10 h-10 flex items-center justify-center bg-retro-gray-200 mr-3">
                <Smartphone size={20} className="text-retro-black-900" />
              </div>
              <div>
                <h3 className="font-bold text-retro-black-900">Install App</h3>
                <p className="text-sm text-retro-gray-700">Add to home screen</p>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="retro-box w-8 h-8 flex items-center justify-center bg-retro-gray-200 hover:bg-retro-gray-300 transition-colors"
              aria-label="Dismiss"
            >
              <X size={16} className="text-retro-black-900" />
            </button>
          </div>
          
          <p className="text-sm text-retro-gray-700 mb-4">
            Install this app on your device for quick access and offline viewing.
          </p>
          
          <div className="flex gap-2">
            <button
              onClick={handleInstall}
              className="btn btn-primary flex-1 text-sm py-2"
            >
              <Download size={16} className="mr-2" />
              Install
            </button>
            <button
              onClick={handleDismiss}
              className="btn btn-outline text-sm py-2 px-4"
            >
              Later
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}