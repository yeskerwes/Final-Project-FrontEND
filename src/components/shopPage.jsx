import React from 'react';
import startVideo from '../images/shop-video.mp4';
import startPicture from '../images/shop-img.png';
import '../styles/shopPage.css';

const ShopPage = () => {
  return (
    <div className="shop-page">
      {/* Video Section */}
      <div className="shop-media-section shop-video-section">
        <video
          src={startVideo}
          autoPlay
          loop
          playsInline
          className="shop-media shop-video"
        />
        <div className="shop-media-overlay">
          <h1 className="shop-media-title">The Evolution of Air Jordan</h1>
          <p className="shop-media-description">
            Witness the journey of innovation and style, starting from the court to becoming a cultural icon.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="shop-media-section shop-image-section">
        <img src={startPicture} alt="Air Jordan Legacy" className="shop-media shop-image" />
        <div className="shop-media-overlay">
          <h1 className="shop-media-title">A Legacy That Transcends Generations</h1>
          <p className="shop-media-description">
            Air Jordan sneakers have shaped sports, streetwear, and pop culture, redefining excellence.
          </p>
        </div>
      </div>

      {/* History Section */}
      <div className="shop-history-section">
        <h2 className="history-title">The History of Air Jordan</h2>
        <p className="history-content">
          Air Jordan sneakers were first introduced in 1984 by Nike, designed specifically for the basketball legend Michael Jordan. 
          The original Air Jordan I broke the mold with bold designs and colors, making them stand out both on and off the court. 
          Over the years, the line has evolved with groundbreaking technology and timeless designs, becoming a cultural phenomenon 
          embraced by athletes, sneakerheads, and fashion enthusiasts worldwide.
        </p>
        <p className="history-content">
          From the banned black and red colorway of the Air Jordan I to the revolutionary Air Jordan XI, each model tells a story 
          of innovation and excellence. Today, the legacy of Air Jordan continues, inspiring new generations with its iconic style 
          and unparalleled performance.
        </p>
      </div>
    </div>
  );
};

export default ShopPage;
