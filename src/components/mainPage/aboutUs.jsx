import React from 'react';
import './aboutUs.css';
import aboutUsPicture from '../images/aboutUs-picture.png';
import { Link} from 'react-router-dom';

const AboutUs = () => {
    return (
        <>
            <div className="aboutUs-container">
                <div className="aboutUs-photo">
                    <img src={aboutUsPicture} alt="About Us" />
                </div>
                <div className="aboutUs-content">
                    <h1>About Us</h1>
                    <p>
                        Welcome to <span style={{ color: 'blue' }}>Nike</span>, your ultimate destination for premium footwear 
                        and streetwear. Founded with a passion for sneakers and fashion, 
                        we aim to provide a curated selection of the latest and most iconic styles, 
                        blending comfort and innovation for every step you take.
                    </p>
                    <Link to="/about" className="aboutUs-button" >Learn More</Link>
                </div>
            </div>  

            <div className="aboutUs-bottom">
                Join Nike — together, we shape the future of sport!
            </div>      
        </>
    );
};

export default AboutUs;
