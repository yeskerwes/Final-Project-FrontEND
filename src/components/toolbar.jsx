import React from "react";
import { FaShoppingCart, FaHeart, FaBell } from "react-icons/fa";
import "../styles/toolbar.css";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <div className="toolbar-item">
        <FaShoppingCart className="icon" />
        <span className="badge">0</span>
      </div>
      <div className="toolbar-item">
        <FaHeart className="icon" />
        <span className="badge">0</span>
      </div>
      <div className="toolbar-item">
        <FaBell className="icon" />
        <span className="badge">0</span>
      </div>
    </div>
  );
};

export default Toolbar;
