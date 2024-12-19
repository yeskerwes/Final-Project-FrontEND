import React, { useState } from 'react';
import '../styles/signIn.css';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as EyeOpen } from '../images/eye_open.svg';
import { ReactComponent as EyeClosed } from '../images/eye_close.svg';
import SaveButton from './saveButton';

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isConsentGiven, setIsConsentGiven] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Please fill out this field.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Please fill out this field.';
    }

    if (!isConsentGiven) {
      newErrors.consent = 'You must give your consent to proceed.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Login successful!');
      navigate('/');
    }
  };

  const handleSignUp = () => {
    navigate('/registration'); 
  };

  const handleConsentChange = (consent) => {
    setIsConsentGiven(consent);
  };

  return (
    <div className="App">
      <div className="reg-container">
        <div className="reg-main">
          <h2>Sign In</h2>
          <div className="adresses">
            <Link to="/" className="address">Main</Link>
            <span>—</span>
            <span>Sign In</span>
          </div>
        </div>
        <div className="reg-info">
          <p>
            After logging in, you will be able to manage your personal data and monitor the status of orders.
          </p>
        </div>
      </div>

      <form className="centered-form" onSubmit={handleSubmit}>
        <div className="form-group">
            <label className="form-label">
                Login <span>*</span>
            </label>
            <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'input-error' : 'form-input'}
                maxLength={50}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label className="form-label">
            Password <span>*</span>
          </label>
          <div className="input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'input-error' : 'form-input'}
              maxLength={50}
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOpen /> : <EyeClosed />}
            </span>
          </div>
          {errors.password && <div className="error-message">{errors.password}</div>}
        </div>

        <SaveButton onConsentChange={handleConsentChange} />

        <div className="must-have">
            <span>*</span> – required fields
        </div>
        <div className="submit-btns">
            <button type="submit" className="submit-sign">Sign In</button>
            <button type="button" className="submit-registration" onClick={handleSignUp}>Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
