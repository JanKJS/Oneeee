import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background-light/95 backdrop-blur-sm border-t 
                    border-background-lighter p-4 z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-4">
        <div className="flex items-center gap-3 flex-1">
          <Cookie className="w-5 h-5 text-primary flex-shrink-0" />
          <p className="text-sm text-text-secondary">
            We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.
            <a href="/privacy" className="text-primary hover:text-primary-dark ml-1">
              Learn more
            </a>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
          >
            Accept
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-text-tertiary hover:text-text-primary transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}