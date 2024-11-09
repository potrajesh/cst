// BookingForm.js
import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    serviceType: 'Laptop',    // Default to "Laptop"
    date: '2023-12-01',       // Example default date
    time: '10:00',            // Example default time
    name: 'John Doe',         // Default name
    address: '123 Main St',   // Default address
    email: 'john@example.com',// Default email
    phone: '1234567890',      // Default phone number
    pincode: '123456'         // Default pincode
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/book', formData);
      alert('Booking confirmed and message sent!');
    } catch (error) {
      console.error('Error booking service:', error);
      alert('Failed to send booking message.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Select Your Requirement</h2>
      <label>
        <input type="radio" name="serviceType" value="Laptop" onChange={handleChange} checked={formData.serviceType === 'Laptop'} /> Laptop
      </label>
      <label>
        <input type="radio" name="serviceType" value="Desktop" onChange={handleChange} checked={formData.serviceType === 'Desktop'} /> Desktop
      </label>

      <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      <input type="time" name="time" value={formData.time} onChange={handleChange} required />
      <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
      <input type="text" name="address" placeholder="Flat / Building / Street" value={formData.address} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="tel" name="phone" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} required />
      <input type="text" name="pincode" placeholder="Enter your pincode here" value={formData.pincode} onChange={handleChange} required />

      <button type="submit">BOOK NOW</button>
    </form>
  );
};

export default BookingForm;
