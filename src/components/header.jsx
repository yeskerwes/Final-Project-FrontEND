import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/header.css';
import { FaUser, FaShoppingCart, FaBell, FaStar, FaSearch } from 'react-icons/fa';
import logo from '../images/nike-logo.png';
import RegistrationForm from './registrationForm';

const Header = () => {
  const texts = [
    "Soon . . .",
    "In Our Store",
    "New Year's Discounts",
    "Hurry Up To Order"
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
    <header className="header">
      <div className="header-container">
        <div className="header-top">
          <div className="header-top-name">kz</div>
          <div className="header-top-right">
            <RegistrationForm />
          </div>
        </div>

        <div className="header-main">
          <div className="header-logo">
            <Link to="/">
              <img src={logo} alt="Logo" width={90} height={30} />
            </Link>
          </div>
          <div className="header-catalog">
            <Link to="/men">Men</Link>
            <Link to="/women">Women</Link>
            <Link to="/kids">Kids</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/sales">Sales</Link>
          </div>
          <div className="header-main-right">
            <div className="header-search">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Search" className="search-input" />
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
