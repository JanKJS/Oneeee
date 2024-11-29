import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowUp, ArrowDown } from 'lucide-react';
import { getTrendingCoins } from '../api/crypto';

export default function TrendingCoins() {
  const { data: trendingCoins, isLoading } = useQuery(
    'trending',
    getTrendingCoins,
    { refetchInterval: 30000 } // Refresh every 30 seconds
  );

  if (isLoading) return <div className="text-text-primary">Loading trending coins...</div>;

  // Limit to 5 coins for the preview
  const displayedCoins = trendingCoins?.slice(0, 5);

  return (
    <div className="bg-background-light rounded-lg border border-background-lighter p-6 h-full">
      <Link 
        to="/trending" 
        className="flex items-center justify-between mb-4"
      >
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-bold text-text-primary">Trending</h2>
        </div>
        <div className="px-2 py-1 rounded text-sm text-primary">
          View All
        </div>
      </Link>

      <div className="space-y-4">
        {displayedCoins?.map((coin, index) => {
          const priceChange = Math.random() > 0.5 ? 1 : -1 * (Math.random() * 10); // Mock price change
          const isPositive = priceChange > 0;

          return (
            <Link
              key={coin.item.id}
              to={`/coins/${coin.item.id}`}
              className="flex items-center justify-between hover:bg-background-lighter p-2 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-text-secondary w-4">{index + 1}</span>
                <img
                  src={coin.item.thumb}
                  alt={coin.item.name}
                  className="w-6 h-6 rounded-full"
                />
                <div>
                  <div className="font-medium text-text-primary">{coin.item.symbol.toUpperCase()}</div>
                  <div className="text-sm text-text-secondary">
                    ${coin.item.price_btc.toFixed(6)}
                  </div>
                </div>
              </div>
              <div className={`flex items-center ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                {isPositive ? (
                  <ArrowUp className="w-4 h-4 mr-1" />
                ) : (
                  <ArrowDown className="w-4 h-4 mr-1" />
                )}
                {Math.abs(priceChange).toFixed(2)}%
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}