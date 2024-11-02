// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h5 className="font-semibold">E-Shop</h5>
          <p className="text-sm mt-2">© 2024 E-Shop. All rights reserved.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white mx-2">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Instagram</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;