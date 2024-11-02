// ProductDetails.js
import React, { useState } from 'react';
import QuantityProductCard from './components/QuantityProductCard';

const ProductDetails = ({ product }) => {
  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center">
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-80 object-cover rounded-lg" />
        <div className="md:ml-8 mt-6 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="mt-4 text-gray-600">{product.description}</p>
          <p className="mt-4 text-2xl font-bold text-gray-900">${product.price}</p>
          <QuantityProductCard image={product.image} name={product.name} price={product.price} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;