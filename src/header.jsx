import React from 'react';
import './styles/header.css'; 

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-top">
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
            <h1>PROJECT</h1>
          </div>
          <div className="header-catalog">
            <a href="#">Samrat</a>
            <a href="#">Ayazhan</a>
            <a href="#">Ruslan</a>
            <a href="#">Bakdaulet</a>
          </div>
          <div className="header-right">
            <input type="text" placeholder="search" />
            <div className="icon">

            </div>
            <div className="icon">

            </div>            
          </div>

        </div>

        <div className="header-bottom">
            bla bla bla bla bla
        </div>
      </header>

    </>
  );
};

export default Header;
