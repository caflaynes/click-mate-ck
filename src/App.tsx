// src/App.tsx
import React from 'react';
import './App.scss';
import Slogan from './components/Layouts/Slogan/Slogan';
import Navbar from './components/Layouts/Navbar/Navbar';
import Hero from './components/Sections/Hero/Hero';
import logo from './assets/images/logo.svg';
import hello from './assets/images/hero/hello.svg';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <Slogan slogan="COLLECT MOMENTS, NOT THINGS" />
      </header>
      <Navbar logoSrc={logo}/>
      <main>
        <Hero helloUrl={hello} />
      </main>
    </div>
  );
};

export default App;
