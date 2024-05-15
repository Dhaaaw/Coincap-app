export interface DataContextProps {
  coins: Coin[];
  globalData: GlobalData | null;
  fetchCoins: (page: number) => Promise<void>;
  fetchGlobal: () => Promise<void>;
  fetchCoin: (id: string | undefined) => Promise<Coin>;
}

export interface Coin {
  id: string;
  symbol: string;
  name: string;
  priceUsd: string;
  changePercent24Hr: string;
}

export interface GlobalData {
  assetsCount: number;
  marketCapUsd: string;
  volumeUsd24Hr: string;
}

export interface RouteParams {
  id: string;
}
