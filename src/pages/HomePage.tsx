import React from 'react';
import MarketStats from '../components/MarketStats';
import TopMovers from '../components/TopMovers';
import CoinList from '../components/CoinList';

export default function HomePage() {
  return (
    <div className="space-y-6">
      {/* Market Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        <MarketStats />
      </div>

      {/* Top Gainers/Losers */}
      <div className="grid grid-cols-1 gap-6">
        <TopMovers />
      </div>

      {/* Coin list */}
      <CoinList />
    </div>
  );
}