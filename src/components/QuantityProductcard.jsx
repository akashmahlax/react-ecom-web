// QuantityProductCard.js
import React, { useState } from 'react';

const QuantityProductCard = ({ image, name, price }) => {
  const [quantity, setQuantity] = useState(1);

  // Calculate the total price based on quantity
  const totalPrice = (price * quantity).toFixed(2);

  // Increase the quantity
  const increaseQuantity = () => setQuantity((prev) => prev + 1);

  // Decrease the quantity, ensuring it doesn't go below 1
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-transform transform hover:scale-105 p-4">
      <img src={image} alt={name} className="w-full h-56 object-contain rounded-lg" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="mt-2 text-xl font-bold text-gray-900"> &#x20b9;{totalPrice}</p>

        {/* Quantity Controls */}
        <div className="mt-4 flex items-center justify-center">
          <button
            onClick={decreaseQuantity}
            className="px-3 py-1 bg-gray-200 rounded-l-md text-gray-700 hover:bg-gray-300"
          >
            -
          </button>
          <span className="px-4 py-1 bg-gray-100 text-gray-800 border border-gray-200">
            {quantity}
          </span>
          <button
            onClick={increaseQuantity}
            className="px-3 py-1 bg-gray-200 rounded-r-md text-gray-700 hover:bg-gray-300"
          >
            +
          </button>
        </div>

        <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
          Add {quantity} to Cart - &#x20b9; {totalPrice}
        </button>
        <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
          Cash On Delivery - &#x20b9; {totalPrice} for {quantity} Kg
        </button>
      </div>
    </div>
  );
};

export default QuantityProductCard;
