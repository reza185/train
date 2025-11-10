import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { registerRootComponent } from 'expo';
import Login from './components/login';

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    // اضافه کردن event listener برای نصب PWA
    if (typeof window !== 'undefined') {
      
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        setDeferredPrompt(e);
        setShowInstallButton(true);
        console.log('PWA installation available');
      });
      
      window.addEventListener('appinstalled', () => {
        console.log('PWA installed successfully');
        setDeferredPrompt(null);
        setShowInstallButton(false);
      });

      // بررسی اینکه آیا اپ قبلاً نصب شده
      if (window.matchMedia('(display-mode: standalone)').matches) {
        console.log('Running in standalone mode');
      }
    }
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
        setShowInstallButton(false);
      }
    }
  };

  return (
    <>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="#f8f9fa"
      />
      {/* دکمه نصب PWA */}
      {showInstallButton && (
        <div 
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: '#007AFF',
            color: 'white',
            padding: '10px 16px',
            borderRadius: '8px',
            cursor: 'pointer',
            zIndex: 1000,
            fontSize: '14px',
            fontWeight: 'bold',
            boxShadow: '0 2px 10px rgba(0,122,255,0.3)'
          }}
          onClick={handleInstallClick}
        >
          📲 Install App
        </div>
      )}
      <Login />
    </>
  );
}

registerRootComponent(App);
export default App;