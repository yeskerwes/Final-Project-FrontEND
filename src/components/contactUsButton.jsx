import React from 'react';
import './styles/contactUsButton.css'; 
import { FaWhatsapp } from 'react-icons/fa'; 

const ContactUsButton = () => {
  return (
    <a 
      href="https://wa.me/87787743471" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="help-button"
    >
      <FaWhatsapp className="whatsapp-icon" />
      Сontact Us
    </a>
  );
};

export default ContactUsButton;
