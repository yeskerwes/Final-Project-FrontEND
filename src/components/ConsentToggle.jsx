import React, { useState } from "react";
import '../styles/ConsentToggle.css';

function ConsentToggle() {
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
        <span className="consent-text">I agree to the processing of personal data</span>
      </div>
      {!isConsentGiven && (
        <div className="error-message">You must agree to the terms in order to continue.</div>
      )}
    </div>
  );
}

export default ConsentToggle;
