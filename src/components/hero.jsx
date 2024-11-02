// Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-5xl font-bold">Welcome to E-Shop</h1>
      <p className="mt-4 text-lg md:text-xl">Discover exclusive deals on premium products</p>
      <button className="mt-8 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-md hover:bg-gray-100">
        Shop Now
      </button>
    </section>
  );
};

export default Hero;