import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { getTopCoins } from '../api/crypto';

export default function TopMovers() {
  const { data: coins, isLoading } = useQuery('allCoins', () => getTopCoins(1, 100));

  if (isLoading) return <div className="text-text-primary">Loading data...</div>;

  const sortedCoins = [...(coins || [])].sort((a, b) => 
    b.price_change_percentage_24h - a.price_change_percentage_24h
  );

  const topGainers = sortedCoins.slice(0, 5);
  const topLosers = sortedCoins.reverse().slice(0, 5);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 6
    }).format(price);
  };

  const MoversCard = ({ coins, type }: { coins: typeof topGainers, type: 'gainers' | 'losers' }) => (
    <div className="card p-6">
      <Link 
        to="/gainers-losers" 
        className="flex items-center justify-between mb-4"
      >
        <h2 className="text-xl font-bold text-text-primary">
          Top {type === 'gainers' ? 'Gainers' : 'Losers'}
        </h2>
        <div className={`px-2 py-1 rounded text-sm ${
          type === 'gainers' ? 'text-green-400' : 'text-red-400'
        }`}>
          24h
        </div>
      </Link>
      <div className="space-y-4">
        {coins.map((coin) => (
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
                <div className="text-sm text-text-secondary">{formatPrice(coin.current_price)}</div>
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <MoversCard coins={topGainers} type="gainers" />
      <MoversCard coins={topLosers} type="losers" />
    </div>
  );
}