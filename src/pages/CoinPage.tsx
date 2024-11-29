import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { getCoinDetails } from '../api/crypto';
import PriceChart from '../components/PriceChart';

export default function CoinPage() {
  const { coinId } = useParams();
  const { data: coin, isLoading } = useQuery(['coin', coinId], () => getCoinDetails(coinId!));

  if (isLoading) return <div className="text-text-primary">Loading coin details...</div>;
  if (!coin) return <div className="text-text-primary">Coin not found</div>;

  const priceChange = coin.market_data.price_change_percentage_24h;
  const isPriceUp = priceChange > 0;

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 2,
    }).format(num);
  };

  return (
    <div className="space-y-8">
      <div className="bg-background-light rounded-lg border border-background-lighter p-6">
        <div className="flex items-center gap-4 mb-6">
          <img src={coin.image.large} alt={coin.name} className="w-16 h-16" />
          <div>
            <h1 className="text-3xl font-bold text-text-primary">{coin.name}</h1>
            <p className="text-text-secondary">{coin.symbol.toUpperCase()}</p>
          </div>
          <div className="ml-auto text-right">
            <div className="text-3xl font-bold text-text-primary">
              {formatNumber(coin.market_data.current_price.usd)}
            </div>
            <div className={`flex items-center justify-end ${isPriceUp ? 'text-green-400' : 'text-red-400'}`}>
              {isPriceUp ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
              {Math.abs(priceChange).toFixed(2)}%
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-background rounded-lg p-4 border border-background-lighter">
            <p className="text-text-secondary">Market Cap</p>
            <p className="text-xl font-bold text-text-primary">
              {formatNumber(coin.market_data.market_cap.usd)}
            </p>
          </div>
          <div className="bg-background rounded-lg p-4 border border-background-lighter">
            <p className="text-text-secondary">24h Trading Volume</p>
            <p className="text-xl font-bold text-text-primary">
              {formatNumber(coin.market_data.total_volume.usd)}
            </p>
          </div>
          <div className="bg-background rounded-lg p-4 border border-background-lighter">
            <p className="text-text-secondary">Circulating Supply</p>
            <p className="text-xl font-bold text-text-primary">
              {coin.market_data.circulating_supply.toLocaleString()} {coin.symbol.toUpperCase()}
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-text-primary">Price Chart</h2>
          <PriceChart coinId={coinId!} />
        </div>
      </div>
    </div>
  );
}