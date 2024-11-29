import React from 'react';
import { useQuery } from 'react-query';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { getGlobalMarketData } from '../api/crypto';

export default function MarketCapPage() {
  const { data: globalData, isLoading } = useQuery(
    'globalMarketData',
    getGlobalMarketData
  );

  if (isLoading) return <div>Loading chart data...</div>;

  // Generate mock historical data for the chart
  const generateHistoricalData = () => {
    const data = [];
    const baseValue = globalData?.total_market_cap?.usd || 1000000000000;
    const days = 30;

    for (let i = days; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      
      // Create some variation in the market cap values
      const randomFactor = 0.8 + Math.random() * 0.4;
      data.push({
        date,
        value: baseValue * randomFactor
      });
    }
    return data;
  };

  const chartData = generateHistoricalData();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 2
    }).format(value);
  };

  return (
    <div className="bg-background-light rounded-lg border border-background-lighter p-6">
      <h1 className="text-3xl font-bold mb-6 text-text-primary">Total Cryptocurrency Market Cap</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card">
          <p className="text-text-secondary">Current Market Cap</p>
          <p className="text-2xl font-bold text-text-primary">
            {formatCurrency(globalData?.total_market_cap?.usd || 0)}
          </p>
        </div>
        <div className="card">
          <p className="text-text-secondary">24h Change</p>
          <p className={`text-2xl font-bold ${
            (globalData?.market_cap_change_percentage_24h_usd || 0) >= 0 
              ? 'text-green-400' 
              : 'text-red-400'
          }`}>
            {globalData?.market_cap_change_percentage_24h_usd?.toFixed(2)}%
          </p>
        </div>
        <div className="card">
          <p className="text-text-secondary">BTC Dominance</p>
          <p className="text-2xl font-bold text-text-primary">
            {globalData?.market_cap_percentage?.btc?.toFixed(1)}%
          </p>
        </div>
      </div>

      <div className="h-[600px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(date) => date.toLocaleDateString()}
            />
            <YAxis
              tickFormatter={(value) => formatCurrency(value)}
            />
            <Tooltip
              labelFormatter={(date) => new Date(date).toLocaleDateString()}
              formatter={(value: number) => [formatCurrency(value), 'Market Cap']}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#2563eb"
              fill="#3b82f6"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}