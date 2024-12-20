import React from "react";
import "../styles/modal.css";

const CartModal = ({ isOpen, closeModal, cartItems }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        <h2>Cart</h2>
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
  );
};

export default CartModal;
