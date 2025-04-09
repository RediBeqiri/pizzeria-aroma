import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import BestSellers from './components/BestSellers';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <BestSellers />
    </div>
  );
}

export default App;

