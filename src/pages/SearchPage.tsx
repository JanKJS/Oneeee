import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { Search, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { getTopCoins } from '../api/crypto';

export default function SearchPage() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  
  const { data: coins } = useQuery(['coins', 1], () => getTopCoins(1, 100), {
    staleTime: 30000,
  });

  useEffect(() => {
    document.body.style.overflow = 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const filteredCoins = coins?.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 bg-background border-b border-background-lighter p-4 z-50">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="text-text-tertiary hover:text-text-primary transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary w-5 h-5" />
            <input
              type="text"
              placeholder="Search coins..."
              className="w-full pl-10 pr-4 py-2 bg-background-light border border-background-lighter rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
            />
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-4">
        {filteredCoins?.length ? (
          <div className="space-y-2">
            {filteredCoins.map((coin) => (
              <Link
                key={coin.id}
                to={`/coins/${coin.id}`}
                className="flex items-center gap-4 p-4 bg-background-light hover:bg-background-lighter 
                         border border-background-lighter rounded-lg transition-colors"
              >
                <img 
                  src={coin.image} 
                  alt={coin.name} 
                  className="w-8 h-8"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = '/favicon.svg';
                  }}
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-text-primary">{coin.symbol.toUpperCase()}</span>
                    <span className="text-text-secondary truncate">{coin.name}</span>
                  </div>
                  <div className="text-sm text-text-secondary">
                    Rank #{coin.market_cap_rank}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-text-primary">
                    ${coin.current_price.toLocaleString()}
                  </div>
                  <div className={`text-sm ${
                    coin.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {coin.price_change_percentage_24h >= 0 ? '+' : ''}
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : search ? (
          <div className="text-center text-text-secondary py-8">
            No coins found matching "{search}"
          </div>
        ) : (
          <div className="text-center text-text-secondary py-8">
            Start typing to search for coins
          </div>
        )}
      </div>
    </div>
  );
}