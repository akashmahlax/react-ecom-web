// Cart.js
import React from 'react';

const Cart = ({ cartItems, updateQuantity, removeFromCart }) => {
  const calculateTotal = () => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-4 border-b border-gray-200">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">${item.price} each</p>
                  <div className="flex items-center mt-2">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 bg-gray-200 text-gray-700">-</button>
                    <span className="px-4 py-1">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 bg-gray-200 text-gray-700">+</button>
                  </div>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
            </div>
          ))}
          <div className="mt-6 flex justify-between items-center">
            <p className="text-lg font-semibold">Total: ${calculateTotal()}</p>
            <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
