import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { ArrowUp, ArrowDown, Globe, Star } from 'lucide-react';
import { getExchanges } from '../api/crypto';

export default function ExchangesPage() {
  const [sortField, setSortField] = useState<string>('volume24h');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const { data: exchanges, isLoading } = useQuery('exchanges', getExchanges, {
    refetchInterval: 60000 // Refresh every minute
  });

  if (isLoading) return <div className="text-text-primary">Loading exchanges...</div>;

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(current => current === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const sortedExchanges = [...(exchanges || [])].sort((a, b) => {
    const multiplier = sortDirection === 'asc' ? 1 : -1;
    const valueA = a[sortField as keyof typeof a];
    const valueB = b[sortField as keyof typeof b];
    return (valueA < valueB ? -1 : 1) * multiplier;
  });

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 2
    }).format(value);
  };

  const SortIcon = ({ field }: { field: string }) => {
    if (sortField !== field) return <ArrowUp className="w-4 h-4 opacity-0 group-hover:opacity-50" />;
    return sortDirection === 'asc' ? 
      <ArrowUp className="w-4 h-4 text-primary" /> : 
      <ArrowDown className="w-4 h-4 text-primary" />;
  };

  return (
    <div className="bg-background-light rounded-lg border border-background-lighter p-6">
      <h1 className="text-2xl font-bold mb-6 text-text-primary">Top Cryptocurrency Spot Exchanges</h1>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-background-lighter">
              <th className="px-6 py-3 text-left text-text-secondary">#</th>
              <th className="px-6 py-3 text-left text-text-secondary">Exchange</th>
              <th 
                className="px-6 py-3 text-right text-text-secondary cursor-pointer group"
                onClick={() => handleSort('score')}
              >
                <div className="flex items-center justify-end gap-2">
                  Score
                  <SortIcon field="score" />
                </div>
              </th>
              <th 
                className="px-6 py-3 text-right text-text-secondary cursor-pointer group"
                onClick={() => handleSort('volume24h')}
              >
                <div className="flex items-center justify-end gap-2">
                  Volume (24h)
                  <SortIcon field="volume24h" />
                </div>
              </th>
              <th 
                className="px-6 py-3 text-right text-text-secondary cursor-pointer group"
                onClick={() => handleSort('volumePercentage')}
              >
                <div className="flex items-center justify-end gap-2">
                  Volume %
                  <SortIcon field="volumePercentage" />
                </div>
              </th>
              <th className="px-6 py-3 text-right text-text-secondary">
                Visits (24h)
              </th>
              <th className="px-6 py-3 text-right text-text-secondary">
                Pairs
              </th>
              <th className="px-6 py-3 text-center text-text-secondary">
                Country
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedExchanges.map((exchange, index) => (
              <tr key={exchange.id} className="border-b border-background-lighter hover:bg-background-lighter transition-colors">
                <td className="px-6 py-4 text-text-secondary">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-text-tertiary cursor-pointer hover:text-primary" />
                    {index + 1}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={`https://s2.coinmarketcap.com/static/img/exchanges/64x64/${exchange.id}.png`}
                      alt={exchange.name}
                      className="w-8 h-8 rounded-full"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://assets.coincap.io/assets/icons/exchange-generic.png';
                      }}
                    />
                    <div>
                      <div className="font-medium text-text-primary">{exchange.name}</div>
                      <a 
                        href={exchange.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-text-tertiary hover:text-primary flex items-center gap-1"
                      >
                        <Globe className="w-3 h-3" />
                        {exchange.url ? new URL(exchange.url).hostname.replace('www.', '') : 'N/A'}
                      </a>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="text-text-primary">{exchange.score}/10</div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="text-text-primary">{formatNumber(exchange.volume24h)}</div>
                </td>
                <td className="px-6 py-4 text-right text-text-primary">
                  {exchange.volumePercentage.toFixed(2)}%
                </td>
                <td className="px-6 py-4 text-right text-text-primary">
                  {exchange.visits}
                </td>
                <td className="px-6 py-4 text-right text-text-primary">
                  {exchange.pairs}
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="text-text-primary">{exchange.country}</div>
                  <div className="text-sm text-text-tertiary">
                    Since {exchange.launched}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}