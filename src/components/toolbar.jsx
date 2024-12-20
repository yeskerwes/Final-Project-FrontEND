import React from "react";
import { FaShoppingCart, FaHeart, FaBell } from "react-icons/fa";
import "../styles/toolbar.css";

const Toolbar = ({ cartItems, favoriteItems, onCartClick, onFavoritesClick }) => {
  return (
    <div className="toolbar">
      <div className="toolbar-item" onClick={onCartClick}>
        <FaShoppingCart className="icon" />
        <span className="badge">{cartItems.length}</span>
      </div>
      <div className="toolbar-item" onClick={onFavoritesClick}>
        <FaHeart className="icon" />
        <span className="badge">{favoriteItems.length}</span>
      </div>
      <div className="toolbar-item">
        <FaBell className="icon" />
        <span className="badge">0</span>
      </div>
    </div>
  );
};

export default Toolbar;
