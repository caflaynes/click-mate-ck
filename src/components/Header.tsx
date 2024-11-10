// src/components/Header.tsx
import React, { useState } from "react";
import "./Header.scss";

interface HeaderProps {
   slogan: string;
   logoSrc: string;
}

const Header: React.FC<HeaderProps> = ({slogan, logoSrc}) => {
   // State to track whether the navbar is visible or not
   const [isNavVisible, setIsNavVisible] = useState(false);

   // Function to toggle the navbar visibility
   const toggleNav = () => {
      setIsNavVisible((prevState) => !prevState);
   };

   return (
      <header>
         <div className="container">
            <div className="nav-slogan">
               <p>{slogan}</p>
            </div>
            <nav className="navbar" role="navigation">
               <a className="nav-brand" href="#" aria-label="Home">
                  <img src={logoSrc} alt="ClickMate Logo" />
               </a>
               <div className="offscreen-nav">
                  <ul className="nav-list" role="list">
                     <li className="nav-item"><a className="nav-link" href="#">HOME</a></li>
                     <li className="nav-item"><a className="nav-link" href="#">DIGITAL CAMERAS</a></li>
                     <li className="nav-item"><a className="nav-link" href="#">HOW IT WORKS</a></li>
                     <li className="nav-item"><a className="nav-link" href="#">PRICING</a></li>
                     <li className="nav-item"><a className="nav-link" href="#">CONTACT US</a></li>
                  </ul>
               </div>
               <button className="menu-toggle">
                  <img
                     className="icon-hamburger"
                     src="assets/images/icons/hamburger.svg"
                     width="25"
                  />
                  <img
                     className="icon-close"
                     src="assets/images/icons/close.svg"
                     width="25"
                  />
                  <span className="visually-hidden">Menu</span>
               </button>
               <div className={`primary-nav ${isNavVisible ? "visible" : ""}`}>
                  <ul className="nav-list kollektif-bold" role="list">
                     <li className="nav-item"><a className="nav-link" href="#">HOME</a></li>
                     <li className="nav-item"><a className="nav-link" href="#">DIGITAL CAMERAS</a></li>
                     <li className="nav-item"><a className="nav-link" href="#">HOW IT WORKS</a></li>
                     <li className="nav-item"><a className="nav-link" href="#">PRICING</a></li>
                     <li className="nav-item"><a className="nav-link" href="#">CONTACT US</a></li>
                  </ul>
               </div>
            </nav>
         </div>
      </header>
   );
};

export default Header;
