import { createContext, useState, ReactNode } from "react";
import {
  fetchCryptocurrencies,
  fetchGlobalData,
  fetchCoinDetails,
} from "../services/api";
import { DataContextProps, Coin, GlobalData } from "../types";

const DataContext = createContext<DataContextProps | null>(null);

const DataProvider = ({ children }: { children: ReactNode }) => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [globalData, setGlobalData] = useState<GlobalData | null>(null);

  const fetchCoins = async (page: number) => {
    const data = await fetchCryptocurrencies(page);
    setCoins(data);
  };

  const fetchGlobal = async () => {
    const data = await fetchGlobalData();
    setGlobalData(data);
  };

  const fetchCoin = async (id: string | undefined) => {
    return await fetchCoinDetails(id);
  };

  return (
    <DataContext.Provider
      value={{ coins, globalData, fetchCoins, fetchGlobal, fetchCoin }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
