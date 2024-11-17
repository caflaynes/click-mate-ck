import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import menuIcon from "../../../assets/icons/menu/menu.svg";
import closeIcon from "../../../assets/icons/menu/cross.svg";

interface NavbarProps {
  logoSrc: string;
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc }) => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Toggle nav visibility
  const toggleNav = () => {
    setIsNavVisible((prev) => !prev);
  };

  const handleScroll = () => {
    if (window.scrollY > 30) { // Adjust the scroll position as needed
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isSticky ? "sticky" : ""}`}>
      <div className="navbar-content" role="navigation">
        <a href="#" className="nav-brand">
          <img src={logoSrc} alt="ClickMate Logo" />
        </a>
        <div className="nav-primary" data-visible={isNavVisible ? "true" : undefined}>
          <ul className="nav-list kollektif-bold" role="list">
            <li><Link to="/" data-text="HOME">HOME</Link></li>
            <li><Link to="/digital-cameras">DIGITAL CAMERAS</Link></li>
            <li><Link to="/how-it-works">HOW IT WORKS</Link></li>
            <li><Link to="/pricing">PRICING</Link></li>
            <li><Link to="/contact-us">CONTACT US</Link></li>
          </ul>
        </div>

        <button className="nav-toggle" onClick={toggleNav}>
          <img
            className="filter-green"
            src={isNavVisible ? closeIcon : menuIcon}
            alt={isNavVisible ? "Close" : "Menu"}
            width="25"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
