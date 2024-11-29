import React from 'react';
import { useQuery } from 'react-query';
import { TrendingUp } from 'lucide-react';
import { getTrendingCoins } from '../api/crypto';
import TrendingCard from '../components/TrendingCard';
import TrendingMetrics from '../components/TrendingMetrics';

export default function TrendingPage() {
  const { data: trendingCoins, isLoading } = useQuery('trending', getTrendingCoins, {
    refetchInterval: 30000 // Refresh every 30 seconds
  });

  if (isLoading) return <div className="text-text-primary">Loading trending coins...</div>;

  return (
    <div className="bg-background-light rounded-lg border border-background-lighter p-6">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="w-6 h-6 text-primary" />
        <h1 className="text-2xl font-bold text-text-primary">Today's Trending Cryptocurrencies</h1>
      </div>

      <TrendingMetrics />

      <div className="space-y-4">
        {trendingCoins?.map((coin, index) => {
          // Generate realistic mock data
          const mockPrice = coin.item.price_btc * 30000; // Approximate BTC price
          const priceChange = (Math.random() * 20) - 10;
          const marketCap = `$${(mockPrice * 1000000 * (Math.random() * 10 + 1)).toLocaleString(undefined, {
            maximumFractionDigits: 0,
            notation: 'compact'
          })}`;
          const volume = `$${(mockPrice * 100000 * (Math.random() * 10 + 1)).toLocaleString(undefined, {
            maximumFractionDigits: 0,
            notation: 'compact'
          })}`;

          return (
            <TrendingCard
              key={coin.item.id}
              rank={index + 1}
              name={coin.item.name}
              symbol={coin.item.symbol.toUpperCase()}
              image={coin.item.thumb}
              price={mockPrice}
              priceChange={priceChange}
              marketCap={marketCap}
              volume={volume}
              id={coin.item.id}
            />
          );
        })}
      </div>

      <div className="mt-6 text-sm text-text-tertiary text-center">
        Data updates every 30 seconds. Last updated: {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
}