import React from 'react';
import './styles/footer.css'; 
import { FaInstagram, FaTelegram, FaTiktok } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Catalog</h3>
          <ul>
            <li>Promotions</li>
            <li>Brands</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Our Team</li>
            <li>Contacts</li>
            <li>Partnership</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Retail Store</h3>
          <ul>
            <li>Payment via Kaspi QR</li>
            <li>Offer</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Customer Help</h3>
          <ul>
            <li>Frequently Asked Questions</li>
            <li>Delivery and Payment</li>
            <li>Feedback</li>
            <li>Exchange / Return / Warranty</li>
            <li>Products</li>
            <li>Discounts and Loyalty Program</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contacts</h3>
          <ul>
            <li>+7 778 774 34 71</li>
            <li>230107029@sdu.edu.kz</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
            <FaInstagram />
          </a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="social-icon telegram">
            <FaTelegram />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon tiktok">
            <FaTiktok />
          </a>
        </div>
        <p>2024 © Kicks Avenue</p>
      </div>
    </footer>
  );
};

export default Footer;
