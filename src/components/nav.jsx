// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-md">
      <div className="text-2xl font-semibold text-gray-800">E-Shop</div>
      <div className="hidden md:flex space-x-4">
        <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Shop</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="hidden md:block px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
        />
        <button className="text-gray-600 hover:text-gray-900">Cart</button>
        <button className="text-gray-600 hover:text-gray-900">Profile</button>
      </div>
    </nav>
  );
};

export default Navbar;