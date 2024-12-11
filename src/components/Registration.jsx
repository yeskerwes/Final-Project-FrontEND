import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/registration.css';

function Registration() {
    return (
      <div className="App">
        <div className="reg-container">
          <h2>Sign Up</h2>
          <div className="adresses">
          <Link to="/">Main</Link>
          <p>—</p>
          <Link to="/">Sign In</Link>
          <p>—</p>
          <p>Sign Up</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Registration;