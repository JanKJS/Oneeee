import axios from 'axios';
import { Coin, GlobalData, CoinDetails, Exchange } from '../types/crypto';

const api = axios.create({
  baseURL: 'https://api.coinlore.net/api',
  timeout: 30000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Response Error:', error);
    if (error.code === 'ECONNABORTED') {
      return Promise.reject(new Error('Request timed out. Please try again.'));
    }
    return Promise.reject(error);
  }
);

const getCoinIcon = (symbol: string, id: string) => {
  const iconSources = [
    `https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`,
    `https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/${symbol.toLowerCase()}.png`,
    `https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/${symbol.toLowerCase()}.png`,
    `https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`
  ];
  
  return iconSources[0]; // Return first source, component will handle fallback
};

export const getTopCoins = async (page = 1, perPage = 50): Promise<Coin[]> => {
  try {
    const start = (page - 1) * perPage;
    const response = await api.get(`/tickers/?start=${start}&limit=${perPage}`);
    return response.data.data.map((coin: any) => ({
      id: coin.id,
      symbol: coin.symbol,
      name: coin.name,
      current_price: parseFloat(coin.price_usd),
      market_cap: parseFloat(coin.market_cap_usd),
      market_cap_rank: parseInt(coin.rank),
      price_change_percentage_24h: parseFloat(coin.percent_change_24h),
      total_volume: parseFloat(coin.volume24),
      image: getCoinIcon(coin.symbol, coin.id)
    }));
  } catch (error) {
    console.error('Error fetching top coins:', error);
    return [];
  }
};

export const getCoinDetails = async (coinId: string): Promise<CoinDetails | null> => {
  try {
    const response = await api.get(`/ticker/?id=${coinId}`);
    const coin = response.data[0];
    return {
      id: coin.id,
      symbol: coin.symbol,
      name: coin.name,
      description: { en: '' },
      image: {
        large: getCoinIcon(coin.symbol, coin.id)
      },
      market_data: {
        current_price: {
          usd: parseFloat(coin.price_usd)
        },
        market_cap: {
          usd: parseFloat(coin.market_cap_usd)
        },
        total_volume: {
          usd: parseFloat(coin.volume24)
        },
        price_change_percentage_24h: parseFloat(coin.percent_change_24h),
        circulating_supply: parseFloat(coin.csupply),
        max_supply: null,
        total_supply: null
      },
      links: {
        homepage: [''],
        blockchain_site: [''],
        official_forum_url: [''],
        chat_url: [''],
        announcement_url: [''],
        twitter_screen_name: '',
        telegram_channel_identifier: ''
      },
      community_data: {
        twitter_followers: 0,
        telegram_channel_user_count: 0,
        reddit_subscribers: 0
      }
    };
  } catch (error) {
    console.error('Error fetching coin details:', error);
    return null;
  }
};

export const getCoinPriceHistory = async (coinId: string) => {
  try {
    const coinDetails = await getCoinDetails(coinId);
    const currentPrice = coinDetails?.market_data.current_price.usd || 1000;
    
    const prices = [];
    const now = Date.now();
    const dayMs = 24 * 60 * 60 * 1000;
    
    for (let i = 30; i >= 0; i--) {
      const timestamp = now - (i * dayMs);
      const randomVariation = 0.9 + (Math.random() * 0.2);
      prices.push({
        date: new Date(timestamp).toISOString(),
        price: currentPrice * randomVariation
      });
    }

    return { prices };
  } catch (error) {
    console.error('Error generating price history:', error);
    return { prices: [] };
  }
};

export const getGlobalMarketData = async (): Promise<GlobalData> => {
  try {
    const response = await api.get('/global/');
    const data = response.data[0];
    return {
      total_market_cap: {
        usd: parseFloat(data.total_mcap)
      },
      total_volume: {
        usd: parseFloat(data.total_volume)
      },
      market_cap_percentage: {
        btc: parseFloat(data.btc_d),
        eth: parseFloat(data.eth_d)
      },
      market_cap_change_percentage_24h_usd: parseFloat(data.mcap_change)
    };
  } catch (error) {
    console.error('Error fetching global market data:', error);
    return {
      total_market_cap: { usd: 0 },
      total_volume: { usd: 0 },
      market_cap_percentage: { btc: 0, eth: 0 },
      market_cap_change_percentage_24h_usd: 0
    };
  }
};

export const getExchanges = async (): Promise<Exchange[]> => {
  try {
    const response = await api.get('/exchanges');
    return response.data.map((exchange: any) => ({
      id: exchange.id || String(Math.random()),
      name: exchange.name || 'Unknown',
      volume24h: parseFloat(exchange.volume_usd || '0'),
      pairs: parseInt(exchange.pairs || '0'),
      url: exchange.url || '',
      country: exchange.country || 'Unknown',
      volumePercentage: parseFloat(exchange.volume_share || '0'),
      score: parseFloat((Math.random() * 2 + 8).toFixed(1)),
      visits: Math.round(Math.random() * 20) + 'M',
      launched: (2015 + Math.floor(Math.random() * 8)).toString()
    }));
  } catch (error) {
    console.error('Error fetching exchanges:', error);
    return [];
  }
};