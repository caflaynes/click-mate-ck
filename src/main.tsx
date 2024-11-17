// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router
      future={{
        v7_startTransition: true, // Enable v7_startTransition
      }}
    >
      <App />
    </Router>
  </StrictMode>
);
