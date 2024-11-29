import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Coins, Building2 } from 'lucide-react';

type ListingType = 'cryptocurrency' | 'exchange';

export default function ListingFormPage() {
  const [listingType, setListingType] = useState<ListingType | null>(null);
  const navigate = useNavigate();

  const handleTypeSelect = (type: ListingType) => {
    setListingType(type);
    navigate(`/listing/${type}`);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-text-primary mb-6">Get Listed on CryptoWatcher</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          onClick={() => handleTypeSelect('cryptocurrency')}
          className="group p-6 bg-background-light/50 backdrop-blur-sm rounded-lg border border-background-lighter 
                   hover:border-primary/30 transition-all duration-200"
        >
          <div className="flex items-center gap-3 mb-4">
            <Coins className="w-8 h-8 text-primary" />
            <h2 className="text-xl font-bold text-text-primary">Cryptocurrency</h2>
          </div>
          <p className="text-text-secondary text-sm">
            List your cryptocurrency token or coin on CryptoWatcher. Reach millions of potential investors 
            and gain visibility in the crypto market.
          </p>
        </button>

        <button
          onClick={() => handleTypeSelect('exchange')}
          className="group p-6 bg-background-light/50 backdrop-blur-sm rounded-lg border border-background-lighter 
                   hover:border-primary/30 transition-all duration-200"
        >
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-8 h-8 text-primary" />
            <h2 className="text-xl font-bold text-text-primary">Exchange</h2>
          </div>
          <p className="text-text-secondary text-sm">
            Get your cryptocurrency exchange listed on CryptoWatcher. Increase your trading volume and 
            connect with crypto traders worldwide.
          </p>
        </button>
      </div>
    </div>
  );
}