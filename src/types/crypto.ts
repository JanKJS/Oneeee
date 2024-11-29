export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
  total_volume: number;
}

export interface Exchange {
  id: string;
  name: string;
  volume24h: number;
  pairs: number;
  url: string;
  country: string;
  volumePercentage: number;
  score: number;
  visits: string;
  launched: string;
}

export interface GlobalData {
  total_market_cap: {
    usd: number;
  };
  total_volume: {
    usd: number;
  };
  market_cap_percentage: {
    btc: number;
    eth: number;
  };
  market_cap_change_percentage_24h_usd: number;
}

export interface CoinDetails {
  id: string;
  symbol: string;
  name: string;
  description: {
    en: string;
  };
  image: {
    large: string;
  };
  market_data: {
    current_price: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
    total_volume: {
      usd: number;
    };
    price_change_percentage_24h: number;
    circulating_supply: number;
    max_supply: number | null;
    total_supply: number | null;
  };
  links: {
    homepage: string[];
    blockchain_site: string[];
    official_forum_url: string[];
    chat_url: string[];
    announcement_url: string[];
    twitter_screen_name: string;
    telegram_channel_identifier: string;
  };
  community_data: {
    twitter_followers: number;
    telegram_channel_user_count: number;
    reddit_subscribers: number;
  };
}