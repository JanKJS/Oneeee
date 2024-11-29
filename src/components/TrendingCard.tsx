import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowUp, ArrowDown } from 'lucide-react';

interface TrendingCardProps {
  rank: number;
  name: string;
  symbol: string;
  image: string;
  price: number;
  priceChange: number;
  marketCap: string;
  volume: string;
  id: string;
}

export default function TrendingCard({
  rank,
  name,
  symbol,
  image,
  price,
  priceChange,
  marketCap,
  volume,
  id
}: TrendingCardProps) {
  const isPositive = priceChange > 0;

  return (
    <Link
      to={`/coins/${id}`}
      className="block bg-background rounded-lg p-4 hover:bg-background-lighter transition-all duration-200"
    >
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-background-lighter rounded-full">
          <img src={image} alt={name} className="w-8 h-8" />
        </div>
        
        <div className="flex-grow min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-text-secondary">#{rank}</span>
            <h3 className="font-medium text-text-primary truncate">{name}</h3>
            <span className="text-sm text-text-secondary">{symbol}</span>
          </div>
          
          <div className="mt-1 flex items-center gap-4">
            <span className="text-text-primary font-medium">
              ${price.toFixed(2)}
            </span>
            <span className={`flex items-center text-sm ${
              isPositive ? 'text-green-400' : 'text-red-400'
            }`}>
              {isPositive ? (
                <ArrowUp className="w-3 h-3 mr-1" />
              ) : (
                <ArrowDown className="w-3 h-3 mr-1" />
              )}
              {Math.abs(priceChange).toFixed(2)}%
            </span>
          </div>
        </div>

        <div className="flex-shrink-0 text-right">
          <div className="text-sm text-text-secondary">
            Market Cap: {marketCap}
          </div>
          <div className="text-sm text-text-secondary">
            Volume: {volume}
          </div>
        </div>
      </div>
    </Link>
  );
}