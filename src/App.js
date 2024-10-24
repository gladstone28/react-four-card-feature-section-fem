import React from 'react';
import './main.css';
import HeroSection from './components/HeroSection';
import CardsSection from './components/CardsSection';

const App = () => {
  return (
    <div className="container">
      <HeroSection />
      <CardsSection />
    </div>
  );
};

export default App;
