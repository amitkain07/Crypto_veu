import axios from "axios";
import React, { useEffect, useState } from "react";

const Table = () => {
  const headers = ["Rank", "Name", "Price", "24h Change", "Market Cap", "Volume"];
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((response) => {
        setAllData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 mt-5 overflow-hidden rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 transition-all">
      <h1 className="px-4 py-6 font-bold text-2xl dark:text-white">Market Overview</h1>
      <table className="w-full text-left rounded-xl overflow-hidden">
        <thead className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-6 py-3 border-b border-gray-400 dark:border-gray-600">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 text-black dark:text-white">
          {loading ? (
            <tr>
              <td colSpan={6} className="text-center py-4 text-gray-600 dark:text-gray-400">
                Loading...
              </td>
            </tr>
          ) : (
            allData.slice(0, 6).map((coin, index) => (
              <tr key={coin.id} className="hover:bg-gray-100 dark:hover:bg-gray-700 border-b dark:border-gray-700">
                <td className="px-6 py-3">{index + 1}</td>
                <td className="px-6 py-3 flex items-center gap-2">
                  <img src={coin.image} alt={coin.name} className="h-6 w-6" />
                  {coin.name}
                </td>
                <td className="px-6 py-3">${coin.current_price.toLocaleString()}</td>
                <td className={`px-6 py-3 ${coin.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"}`}>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td className="px-6 py-3">${coin.market_cap.toLocaleString()}</td>
                <td className="px-6 py-3">${coin.total_volume.toLocaleString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
