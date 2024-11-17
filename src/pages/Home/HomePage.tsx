// src/pages/HomePage.tsx
import React from 'react';
import Hero from '../../components/Sections/Hero/Hero'; 

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Hero helloUrl="./assets/images/hero/hello.svg" />
    </div>
  );
};

export default HomePage;
