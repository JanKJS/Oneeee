import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { getTopCoins } from '../api/crypto';
import { ArrowUp, ArrowDown } from 'lucide-react';

export default function GainersLosersPage() {
  const [showGainers, setShowGainers] = useState(true);
  const { data: coins, isLoading } = useQuery('allCoins', () => getTopCoins(1, 100));

  if (isLoading) return <div className="text-text-primary">Loading data...</div>;

  const sortedCoins = [...(coins || [])].sort((a, b) => 
    b.price_change_percentage_24h - a.price_change_percentage_24h
  );

  const gainers = sortedCoins.filter(coin => coin.price_change_percentage_24h > 0);
  const losers = sortedCoins.filter(coin => coin.price_change_percentage_24h < 0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 6
    }).format(price);
  };

  const formatMarketCap = (marketCap: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 2
    }).format(marketCap);
  };

  return (
    <div className="card p-6">
      <h1 className="text-3xl font-bold mb-6 text-text-primary">Biggest Gainers and Losers (24h)</h1>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setShowGainers(true)}
          className={`btn ${
            showGainers 
              ? 'bg-primary text-white' 
              : 'bg-background-lighter text-text-primary'
          }`}
        >
          Top Gainers
        </button>
        <button
          onClick={() => setShowGainers(false)}
          className={`btn ${
            !showGainers 
              ? 'bg-primary text-white' 
              : 'bg-background-lighter text-text-primary'
          }`}
        >
          Top Losers
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {(showGainers ? gainers : losers).slice(0, 12).map(coin => (
          <Link
            key={coin.id}
            to={`/coins/${coin.id}`}
            className="bg-background-light/50 backdrop-blur-sm rounded-lg border border-background-lighter p-4 
                     hover:border-primary/30 hover:scale-[1.02] transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <img
                src={coin.image}
                alt={coin.name}
                className="w-8 h-8"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = '/favicon.svg';
                }}
              />
              <div className="flex-grow min-w-0">
                <h3 className="font-semibold text-text-primary truncate">{coin.name}</h3>
                <p className="text-sm text-text-secondary">{coin.symbol.toUpperCase()}</p>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Price:</span>
                <span className="font-medium text-text-primary">
                  {formatPrice(coin.current_price)}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-text-secondary">24h Change:</span>
                <span className={`flex items-center ${
                  coin.price_change_percentage_24h >= 0 
                    ? 'text-green-400' 
                    : 'text-red-400'
                }`}>
                  {coin.price_change_percentage_24h >= 0 ? (
                    <ArrowUp className="w-4 h-4 mr-1" />
                  ) : (
                    <ArrowDown className="w-4 h-4 mr-1" />
                  )}
                  {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Market Cap:</span>
                <span className="text-text-primary">
                  {formatMarketCap(coin.market_cap)}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}