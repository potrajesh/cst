import React from 'react';
import './HowItWorks.css';

function HowItWorks() {
  return (
    <div className="how-it-works">
      <h2>How it Works?</h2>
      <ul>
        <li><span role="img" aria-label="repair">🔧</span> Repair services for laptop, computer, and accessories at your home’s comfort</li>
        <li><span role="img" aria-label="trained">✔️</span> Trained and experienced technicians with reasonable rates, at your service</li>
        <li><span role="img" aria-label="price">💰</span> Final price to be quoted on inspection of scope of work</li>
      </ul>
      <div className="stats">
        <div>
          <h3>4.9/5</h3>
          <p>4751 Ratings</p>
        </div>
        <div>
          <h3>50+</h3>
          <p>Verified Service Providers</p>
        </div>
        <div>
          <h3>9854</h3>
          <p>Happy Customers</p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
