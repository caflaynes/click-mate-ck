// src/App.tsx
import React from 'react';
import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Slogan from './components/Layouts/Slogan/Slogan';
import Navbar from './components/Layouts/Navbar/Navbar';

import HomePage from './pages/Home/HomePage';
import DigitalCamerasPage from './pages/Digital Cameras/DigitalCamerasPage';
import HowItWorksPage from './pages/How It Works/HowItWorksPage';
import PricingPage from './pages/Pricing/PricingPage';
import ContactUsPage from './pages/Contact Us/ContactUsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/digital-cameras',
    element: <DigitalCamerasPage />
  },
  {
    path: '/how-it-works',
    element: <HowItWorksPage />
  },
  {
    path: '/pricing',
    element: <PricingPage />
  },
  {
    path: '/contact-us',
    element: <ContactUsPage />
  }
]);

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <Slogan slogan="COLLECT MOMENTS, NOT THINGS" />
      </header>
      <Navbar logoSrc="./assets/images/logo.svg"/>
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  );
};

export default App;
