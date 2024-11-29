import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { Eye, ArrowUp, ArrowDown } from 'lucide-react';
import { getTopCoins } from '../api/crypto';

export default function MostViewed() {
  const { data: coins, isLoading } = useQuery(['coins', 1], () => getTopCoins(1, 100));

  if (isLoading) return <div className="text-text-primary">Loading data...</div>;

  // Take first 5 coins for most viewed (in real app, this would be actual view data)
  const mostViewed = coins?.slice(0, 5);

  return (
    <div className="card p-6">
      <div className="flex items-center gap-2 mb-4">
        <Eye className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-bold text-text-primary">Most Viewed</h2>
      </div>

      <div className="space-y-4">
        {mostViewed?.map((coin) => (
          <Link
            key={coin.id}
            to={`/coins/${coin.id}`}
            className="flex items-center justify-between hover:bg-background-lighter p-2 rounded-lg transition-colors"
          >
            <div className="flex items-center gap-3">
              <img
                src={coin.image}
                alt={coin.name}
                className="w-6 h-6 rounded-full"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = '/favicon.svg';
                }}
              />
              <div>
                <div className="font-medium text-text-primary">{coin.symbol.toUpperCase()}</div>
                <div className="text-sm text-text-secondary">${coin.current_price.toLocaleString()}</div>
              </div>
            </div>
            <div className={`flex items-center ${
              coin.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'
            }`}>
              {coin.price_change_percentage_24h >= 0 ? (
                <ArrowUp className="w-4 h-4 mr-1" />
              ) : (
                <ArrowDown className="w-4 h-4 mr-1" />
              )}
              {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}