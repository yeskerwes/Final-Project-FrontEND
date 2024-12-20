import React from "react";
import "../styles/modal.css";

const FavoritesModal = ({ isOpen, closeModal, favoriteItems }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        <h2>Favorites</h2>
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
    </div>
  );
};

export default FavoritesModal;
