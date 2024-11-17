import React, { useState, useEffect } from "react";
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
            <li><a href="#" data-text="HOME">HOME</a></li>
            <li><a href="#">DIGITAL CAMERAS</a></li>
            <li><a href="#">HOW IT WORKS</a></li>
            <li><a href="#">PRICING</a></li>
            <li><a href="#">CONTACT US</a></li>
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
