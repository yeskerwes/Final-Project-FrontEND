import React from "react";
import "../styles/modal.css"; 

const Modal = ({ content, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Modal;
