import React from 'react';
import startVideo from '../images/shop-video.mp4';
import startPicture from '../images/shop-img.png';
import jordanShoes from '../images/jordan-shoes.png'; 
import '../styles/shopPage.css';

const ShopPage = () => {
  return (
    <div className="shop-page">
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

      <div className="shop-media-section shop-image-section">
        <img src={startPicture} alt="Air Jordan Legacy" className="shop-media shop-image" />
        <div className="shop-media-overlay">
          <h1 className="shop-media-title">A Legacy That Transcends Generations</h1>
          <p className="shop-media-description">
            Air Jordan sneakers have shaped sports, streetwear, and pop culture, redefining excellence.
          </p>
        </div>
      </div>

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
        <p className="history-content">
          The evolution of Air Jordans is more than just shoes. It's a lifestyle, a statement of success, and a testament to the 
          powerful intersection of sport, fashion, and culture.
        </p>
      </div>

      <div className="shop-product-showcase">
        <h2 className="product-title">Featured Air Jordan Sneakers</h2>
        <div className="product-items">
          <div className="product-item">
            <img src={jordanShoes} alt="Air Jordan 1" className="product-image" />
            <h3 className="product-name">Air Jordan 1</h3>
            <p className="product-description">The classic that started it all. Iconic design and unmatched comfort.</p>
            <p className="product-price">$169.99</p>
            <button className="product-cta">Buy Now</button>
          </div>
          <div className="product-item">
            <img src={jordanShoes} alt="Air Jordan 11" className="product-image" />
            <h3 className="product-name">Air Jordan 11</h3>
            <p className="product-description">Revolutionary in both style and technology. A true game-changer.</p>
            <p className="product-price">$220.00</p>
            <button className="product-cta">Buy Now</button>
          </div>
          <div className="product-item">
            <img src={jordanShoes} alt="Air Jordan 4" className="product-image" />
            <h3 className="product-name">Air Jordan 4</h3>
            <p className="product-description">Known for its durability and cutting-edge tech, a staple of the collection.</p>
            <p className="product-price">$180.00</p>
            <button className="product-cta">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="shop-lifestyle-section">
        <h2 className="lifestyle-title">The Air Jordan Lifestyle</h2>
        <p className="lifestyle-content">
          Wearing Air Jordans is more than just sporting a pair of shoes—it's a lifestyle. With each new release, the 
          Jordan brand continues to push boundaries, blending style and performance. Whether on the court, in the streets, or 
          at the office, Air Jordans offer unmatched comfort and design that speaks to all walks of life.
        </p>
        <p className="lifestyle-content">
          From the iconic Jumpman logo to the revolutionary Air cushioning technology, every detail is crafted to elevate 
          your experience. Discover why Air Jordans continue to be at the forefront of sportswear and fashion.
        </p>
      </div>

      <div className="shop-cta">
        <h2>Ready to Step into History?</h2>
        <p>Explore the latest releases and find your perfect pair of Air Jordans.</p>
        <button className="cta-button">Shop Now</button>
      </div>
    </div>
  );
};

export default ShopPage;
