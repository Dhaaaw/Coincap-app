import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { DataContextProps, Coin } from "../types";

const DetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { fetchCoin } = useContext(DataContext) as DataContextProps;
  const [coin, setCoin] = useState<Coin | null>(null);

  useEffect(() => {
    const fetchCoinDetails = async () => {
      const data = await fetchCoin(id);
      setCoin(data);
    };
    fetchCoinDetails();
  }, [id, fetchCoin]);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="container">
      {coin ? (
        <div>
          <h1>{coin.name}</h1>
          <p>Symbol: {coin.symbol}</p>
          <p>Current Price: ${coin.priceUsd}</p>
          <p>Change in last 24h: ${coin.changePercent24Hr}</p>
          <button onClick={handleBack}>Back to List</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailsPage;
