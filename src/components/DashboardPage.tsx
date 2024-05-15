import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { DataContextProps } from "../types";

const DashboardPage: React.FC = () => {
  const { globalData, fetchGlobal } = useContext(
    DataContext
  ) as DataContextProps;

  // eslint-disable-next-line
  useEffect(() => {
    fetchGlobal();
  }, []);

  return (
    <div className="container">
      <h1>Dashboard</h1>
      {globalData && (
        <div>
          <p>Number of Cryptocurrencies: {globalData.assetsCount}</p>
          <p>Total Market Cap: ${globalData.marketCapUsd}</p>
          <p>Total Volume 24h: ${globalData.volumeUsd24Hr}</p>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
