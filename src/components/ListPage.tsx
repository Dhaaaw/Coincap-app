import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { DataContextProps } from "../types";

const ListPage: React.FC = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(() => {
    const storedPage = sessionStorage.getItem("currentPage");
    return storedPage ? parseInt(storedPage) : 1;
  });
  const { fetchCoins, coins } = useContext(DataContext) as DataContextProps;

  // eslint-disable-next-line
  useEffect(() => {
    fetchCoins(page);
    sessionStorage.setItem("currentPage", String(page));
  }, [page]);

  const handleItemClick = (id: string) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="container">
      <h1>Cryptocurrencies</h1>
      <ul>
        {coins.map((coin) => (
          <li key={coin.id} onClick={() => handleItemClick(coin.id)}>
            {coin.symbol} | {coin.name}
          </li>
        ))}
      </ul>
      <button onClick={() => setPage((prev) => prev - 1)} disabled={page === 1}>
        Previous
      </button>
      Page number : {page}
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
};

export default ListPage;
