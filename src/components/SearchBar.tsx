import React, { useState, useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getTopCoins } from '../api/crypto';
import type { Coin } from '../types/crypto';

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  
  const { data: coins } = useQuery(['coins', 1], () => getTopCoins(1, 100), {
    staleTime: 30000,
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && search) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, search]);

  const filteredCoins = coins?.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  ).slice(0, 6);

  const handleClear = () => {
    setSearch('');
    setIsOpen(false);
    setIsExpanded(false);
  };

  const handleSearchClick = () => {
    setIsExpanded(true);
  };

  return (
    <div className="relative flex-1 max-w-[200px] sm:max-w-[300px]" ref={searchRef}>
      {/* Mobile Search Icon */}
      <button
        onClick={handleSearchClick}
        className={`sm:hidden text-text-tertiary hover:text-text-primary transition-colors
                  ${isExpanded ? 'hidden' : 'block'}`}
      >
        <Search className="w-5 h-5" />
      </button>

      {/* Search Container */}
      <div className={`${
        isExpanded 
          ? 'fixed inset-0 bg-background z-50' 
          : 'relative'
        } sm:relative sm:bg-transparent`}
      >
        <div className={`${
          isExpanded 
            ? 'p-4 h-full flex flex-col' 
            : ''
          } sm:p-0`}
        >
          {/* Search Input */}
          <div className={`relative ${!isExpanded && !isOpen ? 'hidden sm:block' : ''}`}>
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-9 pr-8 py-2 bg-background border border-background-lighter rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm text-text-primary 
                       placeholder-text-tertiary"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setIsOpen(true);
              }}
              onFocus={() => setIsOpen(true)}
              autoFocus={isExpanded}
            />
            {search && (
              <button
                onClick={handleClear}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-text-tertiary 
                         hover:text-text-primary transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Mobile Close Button */}
          {isExpanded && (
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-4 right-4 sm:hidden text-text-tertiary hover:text-text-primary"
            >
              <X className="w-5 h-5" />
            </button>
          )}

          {/* Search Results Overlay */}
          {isOpen && search && (
            <>
              {/* Desktop Overlay */}
              <div className="fixed inset-0 bg-background/90 backdrop-blur-sm z-40 hidden sm:block" 
                   onClick={handleClear} />
              
              {/* Results Container */}
              <div className={`${
                isExpanded 
                  ? 'mt-4 flex-1 overflow-auto'
                  : 'absolute top-full mt-2 w-[300px] right-0 max-h-[400px] overflow-auto'
                } bg-background border border-background-lighter rounded-lg shadow-2xl z-50`}>
                {filteredCoins?.length ? (
                  filteredCoins.map((coin) => (
                    <Link
                      key={coin.id}
                      to={`/coins/${coin.id}`}
                      className="flex items-center gap-3 p-3 hover:bg-background-lighter transition-colors 
                               border-b border-background-lighter last:border-0"
                      onClick={handleClear}
                    >
                      <img 
                        src={coin.image} 
                        alt={coin.name} 
                        className="w-6 h-6"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.src = '/favicon.svg';
                        }}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-text-primary">{coin.symbol.toUpperCase()}</span>
                          <span className="text-sm text-text-secondary truncate">{coin.name}</span>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className={`text-sm ${
                          coin.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {coin.price_change_percentage_24h >= 0 ? '+' : ''}
                          {coin.price_change_percentage_24h.toFixed(2)}%
                        </div>
                        <div className="text-xs text-text-secondary">
                          ${coin.current_price.toLocaleString()}
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="p-4 text-text-secondary text-center">
                    No coins found
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}