import axios from "axios";
import { GlobalData, Coin } from "../types";

const API_URL = "https://api.coincap.io/v2";

/* 

Used the same end points twice just because there were no other interesting endpoints for the dashboard

*/

export const fetchCryptocurrencies = async (page: number) => {
  const response = await axios.get(`${API_URL}/assets`, {
    params: {
      offset: (page - 1) * 10,
      limit: 10,
    },
  });
  return response.data.data;
};

export const fetchGlobalData = async (): Promise<GlobalData> => {
  const response = await axios.get(`${API_URL}/assets`);
  let totalMarketCap: number = 0,
    totalVolumeUsd: number = 0;

  response.data.data.forEach((crypto: any) => {
    totalMarketCap += parseFloat(crypto.marketCapUsd);
  });
  response.data.data.forEach((crypto: any) => {
    totalVolumeUsd += parseFloat(crypto.volumeUsd24Hr);
  });
  return {
    assetsCount: response.data.data.length,
    marketCapUsd: totalMarketCap.toString(),
    volumeUsd24Hr: totalVolumeUsd.toString(),
  };
};

export const fetchCoinDetails = async (
  id: string | undefined
): Promise<Coin> => {
  const response = await axios.get(`${API_URL}/assets/${id}`);
  return {
    id: response.data.data.id,
    symbol: response.data.data.symbol,
    name: response.data.data.name,
    priceUsd: response.data.data.priceUsd,
    changePercent24Hr: response.data.data.changePercent24Hr,
  };
};
