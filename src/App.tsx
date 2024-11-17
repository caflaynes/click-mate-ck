// src/App.tsx
import React from 'react';
import './App.scss';
import Slogan from './components/Layouts/Slogan/Slogan';
import Navbar from './components/Layouts/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <Slogan slogan="COLLECT MOMENTS, NOT THINGS" />
      </header>
      <Navbar logoSrc="./assets/images/logo.svg"/>
      <main>
      </main>
    </div>
  );
};

export default App;
