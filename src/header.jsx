import React, { useState, useEffect } from 'react';
import './styles/header.css'; 
import { FaUser, FaShoppingCart, FaBell, FaStar, FaSearch } from 'react-icons/fa';

const Header = () => {
  const texts = [
    "Soon . . .",
    "In Our Store",
    "New Year's Discounts",
    "Hurry p To Order"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

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

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-top">
            <div className="header-top-name">
              Logoo
            </div>
            <div className="header-top-right">
              <a href="#">Contact Us</a>
              |
              <a href="#">Help</a>
              |
              <a href="#">Sign In</a>
              |
              <a href="#">Sign Up</a>
            </div>
          </div>

          <div className="header-main">
            <div className="header-logo">
              <h1>Kicks Avenue</h1>
            </div>
            <div className="header-catalog">
              <a href="#">Samrat</a>
              <a href="#">Ayazhan</a>
              <a href="#">Ruslan</a>
              <a href="#">Bakdaulet</a>
              <a href="#">Abylay</a>
            </div>
            <div className="header-main-right">
              <div className="header-search">
                <FaSearch className="search-icon" /> 
                <input type="text" placeholder="Search" className="search-input"/>     
              </div>
              <div className="header-icons">
                <FaShoppingCart className="icon" title="Cart" />
                <FaStar className="icon" title="Favorites" />
                <FaBell className="icon" title="Notifications" />
              </div>       
            </div>
          </div>

          <div className="header-bottom">
            <div
              className="header-bottom-text"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 1s, transform 1s"
              }}
            >
              {texts[currentIndex]}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
