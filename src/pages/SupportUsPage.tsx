import React, { useState } from 'react';
import { Heart, Copy, Check } from 'lucide-react';

interface CryptoAddress {
  coin: string;
  symbol: string;
  logo: string;
  address: string;
}

const cryptoAddresses: CryptoAddress[] = [
  {
    coin: 'Bitcoin',
    symbol: 'BTC',
    logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg',
    address: 'bc1qn6rd3hnucmcywd4g6azjgqhs88szlahnzsfz00'
  },
  {
    coin: 'Ethereum',
    symbol: 'ETH',
    logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
    address: '0xAE7819C7708826D5B6B0b707be3b6bA5e46affC5'
  },
  {
    coin: 'BNB Smart Chain',
    symbol: 'BNB',
    logo: 'https://cryptologos.cc/logos/bnb-bnb-logo.svg',
    address: '0xAE7819C7708826D5B6B0b707be3b6bA5e46affC5'
  }
];

export default function SupportUsPage() {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const handleCopy = async (address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedAddress(address);
      setTimeout(() => setCopiedAddress(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Heart className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold text-text-primary">Support CryptoWatcher</h1>
        </div>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Your support helps us maintain and improve CryptoWatcher. You can contribute by sending 
          cryptocurrency to any of the addresses below. Every donation, no matter how small, makes 
          a difference.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cryptoAddresses.map((crypto) => (
          <div key={crypto.symbol} className="card p-6">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={crypto.logo} 
                alt={crypto.coin} 
                className="w-8 h-8"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = '/favicon.svg';
                }}
              />
              <div>
                <h2 className="text-lg font-bold text-text-primary">{crypto.coin}</h2>
                <p className="text-sm text-text-secondary">{crypto.symbol}</p>
              </div>
            </div>

            <div className="bg-background rounded-lg p-4 mb-4">
              <div className="qr-code-container w-full aspect-square relative">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${crypto.address}`}
                  alt={`${crypto.coin} QR Code`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="relative">
              <div className="bg-background rounded-lg p-3 pr-12 mb-2 overflow-hidden">
                <p className="text-sm text-text-primary font-mono truncate">
                  {crypto.address}
                </p>
                <button
                  onClick={() => handleCopy(crypto.address)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-text-secondary 
                           hover:text-primary transition-colors"
                >
                  {copiedAddress === crypto.address ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-xl font-bold text-primary mb-2">Thank you for your Support!</p>
        <p className="text-text-secondary">
          Your contribution helps us continue providing valuable crypto market data and improving 
          our platform.
        </p>
      </div>
    </div>
  );
}