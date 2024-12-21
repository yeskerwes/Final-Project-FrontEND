import React, { useState, useEffect } from "react";
import { FaHeart, FaShoppingCart, FaFilter } from "react-icons/fa";
import "./genderPage.css";

const KidPage = ({ addToCart, favoriteItems, toggleFavorite }) => {
  const [sneakers, setSneakers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [sortOption, setSortOption] = useState("price-asc");
  const [selectedSneaker, setSelectedSneaker] = useState(null);
  const [activeFilterIndex, setActiveFilterIndex] = useState(null); 
  const [showFilters, setShowFilters] = useState(true);

  useEffect(() => {
    const fetchSneakers = async () => {
      try {
        const response = await fetch("http://localhost:8081/api/sneakers?gender=kid");
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

  const toggleFilterVisibility = () => {
    setShowFilters(!showFilters); 
  };

  const toggleFilter = (index) => {
    setActiveFilterIndex(activeFilterIndex === index ? null : index); 
  };

  return (
    <div className="gender-page">
      <button className="filter-icon-button" onClick={toggleFilterVisibility}>
        <FaFilter />
      </button>
      {showFilters && (
        <div className="filters">
          <button className="filter-header">Filters</button>
          <ul>
            {[
              { name: "Product Type", options: ["Sneakers", "Boots", "Sandals"] },
              { name: "Mens Footwear Size", options: ["7", "8", "9", "10", "11", "12"] },
              { name: "Gender Neutral Footwear Size", options: ["5", "6", "7", "8", "9"] },
              { name: "Width", options: ["Narrow", "Medium", "Wide"] },
              { name: "Mens Clothing Size", options: ["S", "M", "L", "XL"] },
              { name: "Accessory Size", options: ["Small", "Medium", "Large"] },
              { name: "Accessory Type", options: ["Bags", "Hats", "Belts"] },
              { name: "Color", options: ["Black", "White", "Red", "Blue", "Green"] },
              { name: "Model", options: ["Model A", "Model B", "Model C"] },
              { name: "Technology", options: ["Air Cushion", "Memory Foam", "Waterproof"] },
              { name: "Fit", options: ["Regular", "Slim", "Loose"] },
              { name: "Price", options: ["Under $50", "$50-$100", "$100-$200", "Above $200"] },
            ].map((filter, index) => (
              <li
                key={index}
                className={activeFilterIndex === index ? "active" : ""}
                onClick={() => toggleFilter(index)}
              >
                {filter.name}
                {activeFilterIndex === index ? (
                  <span className="filter-toggle">▲</span>
                ) : (
                  <span className="filter-toggle">▼</span>
                )}
                {activeFilterIndex === index && (
                  <div className="filter-options">
                    <ul>
                      {filter.options.map((option, i) => (
                        <li key={i}>{option}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <button>Apply Filters</button>
        </div>
      )}
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
                  <div className="modalDescription-size">24</div>
                  <div className="modalDescription-size">25</div>
                  <div className="modalDescription-size">26</div>
                  <div className="modalDescription-size">27</div>
                  <div className="modalDescription-size">28</div>
                  <div className="modalDescription-size">29</div>
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
                  <button className="add-to-cart-button" onClick={() => addToCart(selectedSneaker)}>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="modalDescription-bottom">pokupai broooo</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KidPage;
