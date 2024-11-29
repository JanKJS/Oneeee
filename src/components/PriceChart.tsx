import React from 'react';
import { useQuery } from 'react-query';
import {
  ComposedChart,
  Area,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { getCoinPriceHistory } from '../api/crypto';

interface PriceChartProps {
  coinId: string;
}

export default function PriceChart({ coinId }: PriceChartProps) {
  const { data: priceHistory, isLoading } = useQuery(
    ['coinPriceHistory', coinId],
    () => getCoinPriceHistory(coinId)
  );

  if (isLoading) return <div className="text-text-primary">Loading chart...</div>;

  // First, create a base array of prices
  const baseData = priceHistory?.prices || [];
  
  // Then transform the data with all required fields
  const chartData = baseData.map((price: { date: string; price: number }, index: number) => {
    const volume = Math.random() * price.price * 1000000; // Mock volume data
    const prevPrice = index > 0 ? baseData[index - 1].price : price.price;
    return {
      date: new Date(price.date),
      price: price.price,
      volume,
      priceIncreased: price.price > prevPrice
    };
  });

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const formatVolume = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(value);
  };

  // Calculate min and max for better chart scaling
  const prices = chartData.map(d => d.price);
  const minPrice = Math.min(...prices) * 0.95;
  const maxPrice = Math.max(...prices) * 1.05;

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" />
          <XAxis
            dataKey="date"
            tickFormatter={(date) => {
              const d = new Date(date);
              return `${d.getDate()} ${d.toLocaleString('default', { month: 'short' })}`;
            }}
            stroke="#71717A"
          />
          <YAxis
            yAxisId="price"
            domain={[minPrice, maxPrice]}
            tickFormatter={(value) => formatCurrency(value)}
            stroke="#71717A"
            orientation="right"
          />
          <YAxis
            yAxisId="volume"
            domain={['dataMin', 'dataMax']}
            tickFormatter={(value) => formatVolume(value)}
            stroke="#71717A"
            orientation="left"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1A1A1A',
              border: '1px solid #2A2A2A',
              borderRadius: '0.5rem'
            }}
            labelStyle={{ color: '#FFFFFF' }}
            labelFormatter={(date) => new Date(date).toLocaleDateString()}
            formatter={(value: number, name) => [
              name === 'price' ? formatCurrency(value) : formatVolume(value),
              name === 'price' ? 'Price' : 'Volume'
            ]}
          />
          {/* Volume bars */}
          <Bar
            dataKey="volume"
            yAxisId="volume"
            fill="#3B82F6"
            opacity={0.2}
            barSize={20}
          />
          {/* Price line */}
          <Line
            type="monotone"
            dataKey="price"
            yAxisId="price"
            stroke="#0099FF"
            dot={false}
            strokeWidth={2}
          />
          {/* Price area for gradient effect */}
          <Area
            type="monotone"
            dataKey="price"
            yAxisId="price"
            fill="#0099FF"
            fillOpacity={0.1}
            stroke="none"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}