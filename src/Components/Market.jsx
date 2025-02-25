import React,{ useState, useEffect } from "react";
import axios from "axios";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/80 backdrop-blur-md p-2 rounded-lg shadow-md border border-gray-200">
        <p className="text-xs text-gray-600">{label}</p>
        <p className="text-sm font-semibold text-gray-900">
          Market Cap: ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const MarketChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=100&interval=daily&precision=0"
      )
      .then((res) => {
        const formattedData = res.data.market_caps.map((entry) => ({
          date: new Date(entry[0]).toLocaleDateString(),
          market_cap: entry[1],
        }));
        setChartData(formattedData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorMarketCap" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" tick={{ fontSize: "10px", fill: "#828282" }} />
          <YAxis tick={{ fontSize: "10px", fill: "#828282" }} />
          <CartesianGrid strokeDasharray="2 2" stroke="#545151" strokeWidth={0.3} />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="market_cap"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorMarketCap)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarketChart;
