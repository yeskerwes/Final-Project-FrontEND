import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "../styles/cartSidebar.css";
import { Link } from "react-router-dom";

const CartSidebar = ({ isOpen, closeSidebar, cartItems }) => {
  const calculateTotal = () => {
    return (cartItems || []).reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <div className="cart-sidebar-header">
        <h2>Shopping Cart</h2>
        <button className="close-btn" onClick={closeSidebar}>
          &times;
        </button>
      </div>

      <div className="cart-sidebar-content">
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <FaShoppingCart size={50} className="cart-empty-icon" />
            <h3>Your cart is empty</h3>
            <p>
              Fix this easily: select an interesting product in the catalog and
              click the "Add to Cart" button.
            </p>
            <button className="catalog-btn" onClick={() => alert('Redirect to catalog')}>Go to Catalog</button>
          </div>
        ) : (
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.title}</h4>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="cart-sidebar-footer">
          <div className="cart-total">
            <span>Total:</span>
            <span>${calculateTotal()}</span>
          </div>
          <Link to="/cartPage">Go to Cart</Link>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
