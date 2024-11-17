// src/App.tsx
import React from 'react';
import './App.scss';
import Slogan from './components/Layouts/Slogan/Slogan';
import Navbar from './components/Layouts/Navbar/Navbar';
import Hero from './components/Sections/Hero/Hero';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <Slogan slogan="COLLECT MOMENTS, NOT THINGS" />
      </header>
      <Navbar logoSrc="./assets/images/logo.svg"/>
      <main>
        <Hero helloUrl="./assets/images/hero/hello.svg" />
      </main>
    </div>
  );
};

export default App;
