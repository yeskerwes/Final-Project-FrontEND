import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import "../styles/genderPage.css";

const WomenPage = ({ addToCart, favoriteItems, toggleFavorite }) => {
  const [sneakers, setSneakers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [sortOption, setSortOption] = useState("price-asc");
  const [selectedSneaker, setSelectedSneaker] = useState(null); 

  useEffect(() => {
    const fetchSneakers = async () => {
      try {
        const response = await fetch("http://localhost:8081/api/sneakers?gender=women");
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

  const handleSortChange = (e) => {
    setSortOption(e.target.value);

    const sortedSneakers = [...sneakers].sort((a, b) => {
      if (e.target.value === "price-asc") {
        return a.currentPrice - b.currentPrice;
      } else if (e.target.value === "price-desc") {
        return b.currentPrice - a.currentPrice;
      } else if (e.target.value === "title-asc") {
        return a.title.localeCompare(b.title);
      } else if (e.target.value === "title-desc") {
        return b.title.localeCompare(a.title);
      }
      return 0;
    });
    setSneakers(sortedSneakers);
  };

  const isFavorite = (id) =>
    Array.isArray(favoriteItems) && favoriteItems.some((item) => item.id === id);

  const openModal = (sneaker) => {
    setSelectedSneaker(sneaker);
  };

  const closeModal = () => {
    setSelectedSneaker(null);
  };

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
        <div className="sort-dropdown">
          <label htmlFor="sort">Sort:</label>
          <select
            id="sort"
            className="sort-select"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="title-asc">Title: A to Z</option>
            <option value="title-desc">Title: Z to A</option>
          </select>
        </div>
        <div className="product-grid">
          {isLoading && <p>Loading sneakers...</p>}
          {hasError && <p>Error loading sneakers. Please try again later.</p>}
          {!isLoading &&
            !hasError &&
            sneakers.map((sneaker) => (
              <div key={sneaker.id} className="product-card">
                <img
                  src={sneaker.imageUrl || "/placeholder-image.jpg"}
                  alt={sneaker.title}
                  className="product-image"
                  onClick={() => openModal(sneaker)}
                />
                <h3>{sneaker.title}</h3>
                <p>{sneaker.category}</p>
                <p>${sneaker.currentPrice.toFixed(2)}</p>
                <div className="product-actions">
                  <button
                    className={`favorite-button ${
                      isFavorite(sneaker.id) ? "active" : ""
                    }`}

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

      {selectedSneaker && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modalDescription" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              &times;
            </button>
            <div className="modalDescription-top">
              <h2>{selectedSneaker.title}</h2>
            </div>
            <div className="modalDescription-main">
              <img
                src={selectedSneaker.imageUrl || "/placeholder-image.jpg"}
                alt={selectedSneaker.title}
                className="modalDescription-image"
              />
              <div className="sneaker-description">
                <p>
                  <strong>Price:</strong> {selectedSneaker.currentPrice.toFixed(2)} $.
                </p>
                
                <div className="modalDescription-sizes">
                  <strong>Size:</strong>
                  <div className="modalDescription-size">
                    34
                  </div>
                  <div className="modalDescription-size">
                    35
                  </div>
                  <div className="modalDescription-size">
                    36
                  </div>
                  <div className="modalDescription-size">
                    37
                  </div>
                  <div className="modalDescription-size">
                    38
                  </div>
                  <div className="modalDescription-size">
                    39
                  </div>
                </div>

                <p>
                  <strong>Description:</strong> {selectedSneaker.description}
                </p>

                <div className="modalDescription-buttons">
                  <button
                      className={`favorite-button ${
                        isFavorite(selectedSneaker.id) ? "active" : ""
                      }`}

                      onClick={() => toggleFavorite(selectedSneaker)}
                    >
                      <FaHeart />
                  </button>
                  <button className="add-to-cart-button"
                    onClick={() => addToCart(selectedSneaker)}>
                    Add To Cart
                  </button> 
                </div>               
              </div>
            </div>
            <div className="modalDescription-bottom">
              pokupai broooo
            </div>
          </div>
        </div>

      )}
    </div>
  );
};

export default WomenPage;