// src/App.tsx
import React from 'react';
import './App.scss';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header
        slogan="COLLECT MOMENTS, NOT THINGS"
        logoSrc="logo.svg"
      />
    </div>
  );
};

export default App;
