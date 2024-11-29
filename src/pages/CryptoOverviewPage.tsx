import React from 'react';
import { useQuery } from 'react-query';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { getGlobalMarketData } from '../api/crypto';

export default function CryptoOverviewPage() {
  const { data: globalData, isLoading } = useQuery('globalMarketData', getGlobalMarketData);

  if (isLoading) return <div className="text-text-primary">Loading data...</div>;

  // Generate mock data for charts
  const generateMarketCapData = () => {
    const data = [];
    const baseValue = globalData?.total_market_cap?.usd || 1000000000000;
    
    for (let i = 30; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const randomFactor = 0.8 + Math.random() * 0.4;
      data.push({
        date,
        value: baseValue * randomFactor
      });
    }
    return data;
  };

  const generateVolumeData = () => {
    const data = [];
    const baseVolume = globalData?.total_volume?.usd || 100000000000;
    
    for (let i = 30; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const randomFactor = 0.7 + Math.random() * 0.6;
      data.push({
        date,
        value: baseVolume * randomFactor
      });
    }
    return data;
  };

  const dominanceData = [
    { name: 'BTC', value: globalData?.market_cap_percentage?.btc || 0 },
    { name: 'ETH', value: globalData?.market_cap_percentage?.eth || 0 },
    { name: 'Others', value: 100 - (globalData?.market_cap_percentage?.btc || 0) - (globalData?.market_cap_percentage?.eth || 0) }
  ];

  const COLORS = ['#F7931A', '#627EEA', '#8884D8'];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 2
    }).format(value);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(2)}%`;
  };

  const ChartCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="bg-background-light rounded-lg border border-background-lighter p-6">
      <h2 className="text-xl font-bold mb-4 text-text-primary">{title}</h2>
      {children}
    </div>
  );

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-text-primary">Crypto Market Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <p className="text-text-secondary">Total Market Cap</p>
          <p className="text-2xl font-bold text-text-primary">
            {formatCurrency(globalData?.total_market_cap?.usd || 0)}
          </p>
          <p className={`text-sm ${
            (globalData?.market_cap_change_percentage_24h_usd || 0) >= 0 
              ? 'text-green-400' 
              : 'text-red-400'
          }`}>
            {formatPercentage(globalData?.market_cap_change_percentage_24h_usd || 0)} (24h)
          </p>
        </div>
        <div className="card">
          <p className="text-text-secondary">24h Volume</p>
          <p className="text-2xl font-bold text-text-primary">
            {formatCurrency(globalData?.total_volume?.usd || 0)}
          </p>
        </div>
        <div className="card">
          <p className="text-text-secondary">BTC Dominance</p>
          <p className="text-2xl font-bold text-text-primary">
            {formatPercentage(globalData?.market_cap_percentage?.btc || 0)}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Total Market Cap">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={generateMarketCapData()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" />
                <XAxis 
                  dataKey="date" 
                  tickFormatter={(date) => date.toLocaleDateString()}
                  stroke="#71717A"
                />
                <YAxis
                  tickFormatter={(value) => formatCurrency(value)}
                  stroke="#71717A"
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1A1A1A',
                    border: '1px solid #2A2A2A',
                    borderRadius: '0.5rem'
                  }}
                  labelStyle={{ color: '#FFFFFF' }}
                  formatter={(value: number) => [formatCurrency(value), 'Market Cap']}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#0099FF"
                  fill="#0099FF"
                  fillOpacity={0.2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="24h Trading Volume">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={generateVolumeData()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" />
                <XAxis 
                  dataKey="date" 
                  tickFormatter={(date) => date.toLocaleDateString()}
                  stroke="#71717A"
                />
                <YAxis
                  tickFormatter={(value) => formatCurrency(value)}
                  stroke="#71717A"
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1A1A1A',
                    border: '1px solid #2A2A2A',
                    borderRadius: '0.5rem'
                  }}
                  labelStyle={{ color: '#FFFFFF' }}
                  formatter={(value: number) => [formatCurrency(value), 'Volume']}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#3B82F6"
                  fill="#3B82F6"
                  fillOpacity={0.2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="Market Dominance">
          <div className="h-[400px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dominanceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, value }) => `${name} ${value.toFixed(1)}%`}
                >
                  {dominanceData.map((entry, index) => (
                    <Cell key={entry.name} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1A1A1A',
                    border: '1px solid #2A2A2A',
                    borderRadius: '0.5rem'
                  }}
                  formatter={(value: number) => [`${value.toFixed(2)}%`, 'Dominance']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>
    </div>
  );
}