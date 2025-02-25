import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Table from "./Components/Hero";
import Trending from "./Components/Trending";
import Footer from "./Components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen transition-all`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Table />
      <Trending />
      <Footer />
    </div>
  );
};

export default App;
