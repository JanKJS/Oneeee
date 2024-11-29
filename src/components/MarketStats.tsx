import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { TrendingUp, BarChart3, Brain, PieChart } from 'lucide-react';
import { getGlobalMarketData } from '../api/crypto';

export default function MarketStats() {
  const { data: globalData } = useQuery('globalMarketData', getGlobalMarketData);

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 2
    }).format(value);
  };

  // Mock fear and greed data (in real app, this would come from API)
  const fearAndGreedIndex = 55;
  const getFearAndGreedColor = (value: number) => {
    if (value >= 75) return 'text-green-400';
    if (value >= 55) return 'text-green-300';
    if (value >= 45) return 'text-yellow-400';
    if (value >= 25) return 'text-red-300';
    return 'text-red-400';
  };

  const getFearAndGreedText = (value: number) => {
    if (value >= 75) return 'Extreme Greed';
    if (value >= 55) return 'Greed';
    if (value >= 45) return 'Neutral';
    if (value >= 25) return 'Fear';
    return 'Extreme Fear';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Link to="/market-cap" className="card p-6 hover:scale-[1.02] transition-transform">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-bold text-text-primary">Market Cap</h2>
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-bold text-text-primary">
            {formatNumber(globalData?.total_market_cap?.usd || 0)}
          </div>
          <div className={`text-sm ${
            (globalData?.market_cap_change_percentage_24h_usd || 0) >= 0 
              ? 'text-green-400' 
              : 'text-red-400'
          }`}>
            {globalData?.market_cap_change_percentage_24h_usd?.toFixed(2)}% (24h)
          </div>
        </div>
      </Link>

      <Link to="/volume" className="card p-6 hover:scale-[1.02] transition-transform">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-bold text-text-primary">Volume</h2>
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-bold text-text-primary">
            {formatNumber(globalData?.total_volume?.usd || 0)}
          </div>
          <div className="text-sm text-text-tertiary">
            24h Global Volume
          </div>
        </div>
      </Link>

      <Link to="/fear-and-greed" className="card p-6 hover:scale-[1.02] transition-transform">
        <div className="flex items-center gap-2 mb-4">
          <Brain className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-bold text-text-primary">Fear & Greed</h2>
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-bold text-text-primary">
            {fearAndGreedIndex}
          </div>
          <div className={`text-sm ${getFearAndGreedColor(fearAndGreedIndex)}`}>
            {getFearAndGreedText(fearAndGreedIndex)}
          </div>
        </div>
      </Link>

      <Link to="/dominance" className="card p-6 hover:scale-[1.02] transition-transform">
        <div className="flex items-center gap-2 mb-4">
          <PieChart className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-bold text-text-primary">Dominance</h2>
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-bold text-text-primary">
            {globalData?.market_cap_percentage?.btc?.toFixed(1)}%
          </div>
          <div className="text-sm text-text-tertiary">
            BTC Dominance
          </div>
        </div>
      </Link>
    </div>
  );
}