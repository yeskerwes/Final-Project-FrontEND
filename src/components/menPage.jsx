import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import "../styles/genderPage.css";

const MenPage = ({ addToCart, favoriteItems, toggleFavorite }) => {
  const [sneakers, setSneakers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchSneakers = async () => {
      try {
        const response = await fetch("http://localhost:8081/api/sneakers?gender=men");
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setSneakers(data);
      } catch (err) {
        setHasError(true);
        console.error("Error fetching sneaker data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSneakers();
  }, []);

  const isFavorite = (id) =>
    Array.isArray(favoriteItems) && favoriteItems.some((item) => item.id === id);

  return (
    <div className="gender-page">
      <div className="filters">
        <button className="filter-header">Filters</button>
        <ul>
          <li className="active">Product Type</li>
          <li>Mens Footwear Size</li>
          <li>Gender Neutral Footwear Size</li>
          <li>Width</li>
          <li>Mens Clothing Size</li>
          <li>Accessory Size</li>
          <li>Accessory Type</li>
          <li>Color</li>
          <li>Model</li>
          <li>Technology</li>
          <li>Fit</li>
          <li>Price</li>
        </ul>
        <button>Apply Filters</button>
      </div>
      <div className="products">
        <div className="product-grid">
          {isLoading && <p>Loading sneakers...</p>}
          {hasError && <p>Error loading sneakers. Please try again later.</p>}
          {!isLoading &&
            !hasError &&
            sneakers.map((sneaker) => (
              <div key={sneaker.id} className="product-card">
                <Link to={`/sneakers/${sneaker.id}`}>
                  <img
                    src={sneaker.imageUrl || "/placeholder-image.jpg"}
                    alt={sneaker.title}
                    className="product-image"
                  />
                </Link>
                <h3>{sneaker.title}</h3>
                <p>{sneaker.category}</p>
                <p>${sneaker.currentPrice.toFixed(2)}</p>
                <div className="product-actions">
                  <button
                    className={`favorite-button ${isFavorite(sneaker.id) ? "active" : ""}`}
                    onClick={() => toggleFavorite(sneaker)}
                  >
                    <FaHeart />
                  </button>
                  <button className="cart-button" onClick={() => addToCart(sneaker)}>
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MenPage;
