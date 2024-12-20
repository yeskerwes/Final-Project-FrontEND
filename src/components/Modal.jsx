import React from "react";
import "../styles/modal.css"; 

const Modal = ({ isOpen, closeModal, cartItems, favoriteItems }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        <h2>Favorites & Cart</h2>
        
        <div className="modal-section">
          <h3>Favorites</h3>
          <ul>
            {favoriteItems.length > 0 ? (
              favoriteItems.map((item) => (
                <li key={item.id}>
                  <img
                    src={item.imageUrl || "/placeholder-image.jpg"}
                    alt={item.title}
                    className="modal-image"
                  />
                  <p>{item.title}</p>
                </li>
              ))
            ) : (
              <p>No items in favorites.</p>
            )}
          </ul>
        </div>

        <div className="modal-section">
          <h3>Cart</h3>
          <ul>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <li key={item.id}>
                  <img
                    src={item.imageUrl || "/placeholder-image.jpg"}
                    alt={item.title}
                    className="modal-image"
                  />
                  <p>{item.title}</p>
                </li>
              ))
            ) : (
              <p>No items in cart.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;

