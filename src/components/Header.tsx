// src/components/Header.tsx
import React from "react";
import "./Header.scss";

const Header: React.FC = () => {
   return (
      <header>
         <div className="slogan fs-body-small">
            <p>COLLECT MOMENTS, NOT THINGS</p>
         </div>
            <div className="navbar">
               <div className="logo">
                  <a href="">
                     <img src="logo.svg" alt="" />
                  </a>
               </div>
               <nav className="primary-nav">
                  <ul className="nav-list kollektif-bold" role="list">
                     <li><a href="#">HOME</a></li>
                     <li><a href="#">DIGITAL CAMERAS</a></li>
                     <li><a href="#">HOW IT WORKS</a></li>
                     <li><a href="#">PRICING</a></li>
                     <li><a href="#">CONTACT US</a></li>
                  </ul>
               </nav>
            </div>
      </header>
   );
};

export default Header;
