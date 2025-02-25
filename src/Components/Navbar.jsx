import React from "react";
import logo from "../assets/FRAME.png";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import ma from "../assets/ma.png";
import mt from "../assets/mt.png";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div className="flex justify-between items-center py-3 px-6 bg-gray-100 dark:bg-gray-800 shadow-md border-b dark:border-gray-600 transition-all">
      <img src={logo} alt="Logo" />

      <input
        className="w-80 px-4 py-2 text-sm rounded-md bg-gray-200 dark:bg-gray-700 border border-gray-400 dark:border-gray-500 focus:outline-none placeholder-gray-600 dark:placeholder-gray-300 transition-all"
        type="text"
        placeholder="Search Cryptocurrency..."
      />

      <div className="cursor-pointer flex items-center gap-3">
        <button onClick={() => setDarkMode(!darkMode)} className="text-xl cursor-pointer">
          {darkMode ? <IoIosSunny className="text-yellow-400" /> : <IoIosMoon className="text-white" />}
        </button>
        <img src={mt} alt="MT Icon" />
        <img src={ma} alt="MA Icon" />
      </div>
    </div>
  );
};

export default Navbar;
