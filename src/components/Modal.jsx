import React from "react";
import "../styles/modal.css"; 

const Modal = ({ content, onClose }) => {
  return (
    <div className="modal-overlay-icons" onClick={onClose}>
      <div className="modal-content-icons" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-icons" onClick={onClose}>
          &times;
        </button>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Modal;
