import React from 'react';
import './App.css';
import HowItWorks from './components/HowItWorks';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Computer Service in Hyderabad</h1>
        <nav>Home &gt; Hyderabad &gt; Computer Service</nav>
      </header>
      <div className="content">
        <HowItWorks />
        <BookingForm />
      </div>
    </div>
  );
}

export default App;
