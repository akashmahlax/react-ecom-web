// Checkout.js
import React, { useState } from 'react';

const Checkout = () => {
  const [form, setForm] = useState({ name: '', address: '', cardNumber: '', expiry: '', cvv: '' });

  const handleInputChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
    // You can add form validation or send data to a backend here
  };

  return (
    <div className="py-12 px-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Full Name" onChange={handleInputChange} required className="w-full px-4 py-2 border rounded-md" />
        <input type="text" name="address" placeholder="Shipping Address" onChange={handleInputChange} required className="w-full px-4 py-2 border rounded-md" />
        <input type="text" name="cardNumber" placeholder="Card Number" onChange={handleInputChange} required className="w-full px-4 py-2 border rounded-md" />
        <div className="flex space-x-4">
          <input type="text" name="expiry" placeholder="MM/YY" onChange={handleInputChange} required className="w-full px-4 py-2 border rounded-md" />
          <input type="text" name="cvv" placeholder="CVV" onChange={handleInputChange} required className="w-full px-4 py-2 border rounded-md" />
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md font-semibold hover:bg-indigo-700">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
