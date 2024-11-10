import React, { useState } from "react";
import "./Navbar.scss";
import menuIcon from "../assets/icons/menu/menu.svg";
import closeIcon from "../assets/icons/menu/cross.svg";

interface NavbarProps {
   logoSrc: string;
}

const Navbar: React.FC<NavbarProps> = ({logoSrc }) => {
   const [isNavVisible, setIsNavVisible] = useState(false);

   // Toggle nav visibility
   const toggleNav = () => {
      setIsNavVisible((prev) => !prev);
   };

   return (
         <div className="nav-container">
            <nav className="navbar" role="navigation">
               <a className="nav-brand" href="#" aria-label="Home">
                  <img src={logoSrc} alt="ClickMate Logo" />
               </a>
               <div className={`primary-nav`} data-visible={isNavVisible ? "true" : undefined}>
                  <ul className="nav-list kollektif-bold" role="list">
                     <li className="nav-item"><a className="nav-link" href="#">HOME</a></li>
                     <li className="nav-item"><a className="nav-link" href="#">DIGITAL CAMERAS</a></li>
                     <li className="nav-item"><a className="nav-link" href="#">HOW IT WORKS</a></li>
                     <li className="nav-item"><a className="nav-link" href="#">PRICING</a></li>
                     <li className="nav-item"><a className="nav-link" href="#">CONTACT US</a></li>
                  </ul>
               </div>
               <button className="nav-toggle" onClick={toggleNav}>
                  <img className="filter-green" src={isNavVisible ? closeIcon : menuIcon} alt={isNavVisible ? "Close" : "Menu"} width="25" />
               </button>
            </nav>
         </div>
   );
};

export default Navbar;
