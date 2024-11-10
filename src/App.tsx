// src/App.tsx
import React from 'react';
import './App.scss';
import Slogan from './components/Slogan';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <Slogan slogan="COLLECT MOMENTS, NOT THINGS" />
        <Navbar logoSrc="logo.svg"/>
      </header>
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;
