import React from 'react';
import './main.css';
import HeroSection from './HeroSection';
import CardsSection from './CardsSection';

const App = () => {
  return (
    <div className="container">
      <HeroSection />
      <CardsSection />
    </div>
  );
};

export default App;
