import React, { useState } from "react";
import '../styles/saveButton.css';

function SaveButton() {
  const [isConsentGiven, setConsentGiven] = useState(false);

  const handleConsentChange = () => {
    setConsentGiven((prev) => !prev);
  };
  
  return (
    <div className="form-group">
      <div className="consent-container">
        <button
          className={`toggle-button ${isConsentGiven ? 'active' : ''}`}
          onClick={handleConsentChange}
          aria-label="Toggle Consent"
        ></button>
        <span className="consent-text">Remember me</span>
      </div>
    </div>
  );
}

export default SaveButton;
