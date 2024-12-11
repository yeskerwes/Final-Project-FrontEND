import React from 'react';
import '../styles/aboutUs.css';
import aboutUsPicture from '../images/aboutUs-picture.png';

const AboutUs = () => {
    return (
        <div className="aboutUs-container">
            <div className="aboutUs-photo">
                <img src={aboutUsPicture} alt="About Us" />
            </div>
            <div className="aboutUs-content">
                <h1>About Us</h1>
                <p>
                    Welcome to Kicks Avenue, your ultimate destination for premium footwear 
                    and streetwear. Founded with a passion for sneakers and fashion, 
                    we aim to provide a curated selection of the latest and most iconic styles, 
                    blending comfort and innovation for every step you take.
                </p>
                <button className="aboutUs-button">Learn More</button>
            </div>
        </div>
    );
};

export default AboutUs;