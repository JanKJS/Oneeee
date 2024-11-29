import React from 'react';
import { Link } from 'react-router-dom';
import { Coins } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-light/50 backdrop-blur-sm border-t border-background-lighter mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center text-center">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <Coins className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold text-text-primary">CryptoWatcher</span>
          </Link>
          <p className="text-text-secondary text-sm max-w-2xl mb-8">
            Track live cryptocurrency prices, market trends, and real-time data. Stay updated on Bitcoin, 
            Ethereum, altcoins, and DeFi projects.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy" className="text-text-secondary hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-text-secondary hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/faq" className="text-text-secondary hover:text-primary text-sm transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="text-text-secondary hover:text-primary text-sm transition-colors">
              Contact
            </Link>
            <Link to="/support-us" className="text-text-secondary hover:text-primary text-sm transition-colors">
              Support Us
            </Link>
          </div>
          <p className="text-text-secondary text-sm mt-6">
            © {currentYear} CryptoWatcher. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}