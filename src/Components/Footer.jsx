import React from "react";
import logo from "../assets/FRAME.png";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-6 mt-6">
      <div className="container mx-auto grid md:grid-cols-4 grid-cols-1 gap-8">
        
        {/* Logo & Description */}
        <div>
          <img src={logo} alt="CryptoVue Logo" className="h-12 mb-3" />
          <p className="text-gray-400 text-sm">
            Your trusted source for cryptocurrency market data and insights.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Market</li>
            <li className="hover:text-white cursor-pointer">Exchange</li>
            <li className="hover:text-white cursor-pointer">Portfolio</li>
            <li className="hover:text-white cursor-pointer">News</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">API Documentation</li>
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Subscription Box */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
          <p className="text-gray-400 text-sm mb-3">
            Subscribe to get the latest crypto news and updates.
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-md bg-gray-800 border border-gray-600 text-white outline-none"
            />
            <button className="bg-blue-500 px-4 py-2 rounded-r-md hover:bg-blue-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-gray-500 text-sm border-t border-gray-700 mt-10 pt-5">
        <p>© 2025 CryptoVue. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
