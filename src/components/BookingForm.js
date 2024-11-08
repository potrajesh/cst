import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm() {
  const [formData, setFormData] = useState({
    device: '',
    date: '',
    time: '',
    name: '',
    address: '',
    email: '',
    mobile: '',
    pincode: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you can add form submission logic
  };

  return (
    <div className="booking-form">
      <h2>Select Your Requirement</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input type="radio" name="device" value="Laptop" onChange={handleChange} /> Laptop
          </label>
          <label>
            <input type="radio" name="device" value="Desktop" onChange={handleChange} /> Desktop
          </label>
        </div>
        <input type="date" name="date" onChange={handleChange} />
        <input type="time" name="time" onChange={handleChange} />
        
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
        <input type="text" name="address" placeholder="Flat / Building / Street" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="tel" name="mobile" placeholder="Mobile Number" onChange={handleChange} />
        <input type="text" name="pincode" placeholder="Enter your pincode here" onChange={handleChange} />

        <button type="submit">BOOK NOW</button>
      </form>
    </div>
  );
}

export default BookingForm;
