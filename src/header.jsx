import React from 'react';
import './styles/header.css'; 
import { FaUser, FaShoppingCart, FaBell, FaStar, FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-top">
              <div className="header-top-name">
                PROJECT
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
              <h1>OUR LOGO</h1>
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
                {/* <FaUser className="icon" title="Profile" /> */}
                <FaShoppingCart className="icon" title="Cart" />
                <FaStar className="icon" title="Favorites" />
                <FaBell className="icon" title="Notifications" />
              </div>       
            </div>

          </div>

          <div className="header-bottom">
              bla bla bla bla bla
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
