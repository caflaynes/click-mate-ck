// src/App.tsx
import React from 'react';
import './App.scss';
import Slogan from './components/Layouts/Slogan/Slogan';
import Navbar from './components/Layouts/Navbar/Navbar';

// import HomePage from './pages/Home/HomePage';
// import DigitalCamerasPage from './pages/Digital Cameras/DigitalCamerasPage';
// import HowItWorksPage from './pages/How It Works/HowItWorksPage';
// import PricingPage from './pages/Pricing/PricingPage';
// import ContactUsPage from './pages/Contact Us/ContactUsPage';



const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <Slogan slogan="COLLECT MOMENTS, NOT THINGS" />
      </header>
      <Navbar logoSrc="./assets/images/logo.svg"/>
      <main>
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/digital-cameras" element={<DigitalCamerasPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes> */}
      </main>
    </div>
  );
};

export default App;
