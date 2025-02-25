import axios from "axios";
import React, { useEffect, useState } from "react";

function Trending() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((response) => {
        setData(response.data.slice(0, 3)); // Get only first 3 coins
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1 className="pl-8 py-6 font-bold text-2xl ">🔥 Trending Coins</h1>

      <div className="flex  items-center justify-around gap-4">
        {data.map((coin) => (
          <div
            key={coin.id}
            className="bg-gray-800 text-white p-4 rounded-lg shadow-lg flex justify-between items-center w-80"
          >
            {/* Left Side - Coin Image, Name, Price */}
            <div className="flex items-center gap-4">
              <img src={coin.image} alt={coin.name} className="h-12 w-12" />
              <div>
                <h2 className="text-xs md:text-lg font-semibold">{coin.name}</h2>
                <p className="text-gray-300">${coin.current_price.toLocaleString()}</p>
              </div>
            </div>

            {/* Right Side - Percentage Change */}
            <p
              className={` text-xs md:text-lg font-bold ${
                coin.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;
