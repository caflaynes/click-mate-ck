// src/components/Hero.tsx
import React from "react";
import "./Hero.scss";

const Hero: React.FC = () => {
  return (
        <section className="hero-container">
          <div className="hero">
            <img src="assets/images/hero/hello.svg" alt="Hello!" height="70" />

            <h2 className="fs-heading-h2 kollektif-bold">
              Welcome to ClickMate Rentals!
            </h2>
            
            <p>
              Capture every moment effortlessly with our high-quality, affordable cameras.
              Our flexible rental options are designed to help you find the perfect camera
              for your projects and events, allowing you to focus on what truly matters—
              creating unforgettable memories.
            </p>
            
            <h3 className="fs-heading-h5 kollektif-semibold">
              Ready to capture your shot?
            </h3>
            <p>Click the button below to get started!</p>
            <button className="button">Rent a Camera</button>
          </div>
        </section>
  );
};

export default Hero;
