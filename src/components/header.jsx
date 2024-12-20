import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import kzIcon from '../images/kz-icon.svg';
import ukIcon from '../images/uk-icon.svg';
import logo from "../images/nike-logo.png";
import RegistrationForm from "./registrationForm";
import MyCabinet from "./myCabinet";

const Header = () => {
  const texts = ["Soon . . .", "In Our Store", "New Year's Discounts", "Hurry Up To Order"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false); 

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-top">
          <div className="header-top-name">
            <img src={kzIcon} alt="" className="country-flags" />
            <img src={ukIcon} alt="" className="country-flags" />
          </div>
          <div className="header-top-right">
           <RegistrationForm /> 
            {/* <MyCabinet /> */}
          </div>
        </div>

        <div className="header-main">
          <div className="header-logo">
            <NavLink to="/">
              <img src={logo} alt="Logo" width={90} height={30} />
            </NavLink>
          </div>
          <div className={`header-catalog ${isBurgerOpen ? "open" : ""}`}>
            <NavLink
              to="/men"
              className={({ isActive }) =>
                isActive ? "active" : undefined
              }
            >
              Men
            </NavLink>
            <NavLink
              to="/women"
              className={({ isActive }) =>
                isActive ? "active" : undefined
              }
            >
              Women
            </NavLink>
            <NavLink
              to="/kids"
              className={({ isActive }) =>
                isActive ? "active" : undefined
              }
            >
              Kids
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? "active" : undefined
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/sales"
              className={({ isActive }) =>
                isActive ? "active" : undefined
              }
            >
              Sales
            </NavLink>
          </div>

          <div className="header-main-right">
            <div className="header-search">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Search" className="search-input" />
            </div>

            <div className="burger-menu">
              <GiHamburgerMenu className="burger-icon" onClick={toggleBurgerMenu} />
            </div>
          </div>
        </div>

        <div className="header-bottom">
          <div
            className="header-bottom-text"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 1s, transform 1s",
            }}
          >
            {texts[currentIndex]}
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
