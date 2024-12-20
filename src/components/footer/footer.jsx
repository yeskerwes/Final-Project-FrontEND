import React from 'react';
import './footer.css'; 
import { Link } from 'react-router-dom'; 
import { FaInstagram, FaTelegram, FaTiktok } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/about">Our Team</Link></li>
            <li><Link>Contacts</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Customer Service</h3>
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/faq">Delivery and Payment</Link></li>
            <li><Link to="/faq">Feedback</Link></li>
            <li><Link to="/faq">Exchange / Return / Warranty</Link></li>
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
        <p>2024 © Nike</p>
      </div>
    </footer>
  );
};

export default Footer;
