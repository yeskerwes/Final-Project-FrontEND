import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/registration.css';
import { ReactComponent as EyeOpen } from '../images/eye_open.svg';
import { ReactComponent as EyeClosed } from '../images/eye_close.svg';
import ConsentToggle from "./ConsentToggle";

function Registration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    code: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [generatedCode, setGeneratedCode] = useState(null);
  const [isConsentGiven] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleGetCode = async (e) => {
    e.preventDefault();

    if (!formData.email.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Please enter your email to get a code.' }));
      return;
    }

    try {
      const label = document.querySelector('label[for="email"]')?.innerText || 'Email';
      const response = await fetch('http://localhost:8081/api/email/sendcode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email, label }),
      });

      if (response.ok) {
        const { code } = await response.json();
        setGeneratedCode(code);
        alert('Verification code sent to your email!');
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || 'Failed to send code.'}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const validateCode = async () => {
    if (!formData.code.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, code: 'Please enter the code.' }));
      return false;
    }

    try {
      const response = await fetch('http://localhost:8081/api/email/checkCode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          userCode: formData.code,
        }),
      });

      const isCorrect = await response.json();
      if (!isCorrect) {
        setErrors((prevErrors) => ({ ...prevErrors, code: 'Incorrect code. Please try again.' }));
        return false;
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
      return false;
    }

    return true;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'Please enter your first name.';
    if (!formData.lastName.trim()) newErrors.lastName = 'Please enter your last name.';
    if (!formData.email.trim()) newErrors.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Please enter your phone number.';
    else if (!/^\+?\d{10,15}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number.';
    }
    if (!formData.password.trim()) newErrors.password = 'Please enter a password.';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }
    if (!validateCode()) {
      newErrors.code = 'Invalid or missing verification code.';
    }
    if (!isConsentGiven) {
      newErrors.consent = 'You must give your consent to proceed.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (await validateForm()) {
      console.log('Form submitted:', formData);
      alert('Registration successful!');
      navigate('/');
    }
  };

  return (
    <div className="App">
      <div className="reg-container">
        <div className="reg-main">
          <h2>Sign Up</h2>
          <div className="adresses">
            <Link to="/" className="address">Main</Link>
            <span>—</span>
            <Link to="/sign-in" className="address">Sign In</Link>
            <span>—</span>
            <span>Sign Up</span>
          </div>
        </div>
        <div className="reg-info">
          <p>
            Register to use all the features of your personal account: tracking orders, 
            setting up subscriptions, connecting with social networks, and more.
          </p>
        </div>
      </div>

      <form className="centered-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName" className="form-label">
            First Name <span>*</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={errors.firstName ? 'input-error' : 'form-input'}
            maxLength={50}
          />
          {errors.firstName && <div className="error-message">{errors.firstName}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="lastName" className="form-label">
            Last Name <span>*</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={errors.lastName ? 'input-error' : 'form-input'}
            maxLength={50}
          />
          {errors.lastName && <div className="error-message">{errors.lastName}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email <span>*</span>
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

        <button className="get-code-btn" onClick={handleGetCode}>Get Code</button>

        <div className="form-group">
          <label htmlFor="code" className="form-label">
            Verification Code <span>*</span>
          </label>
          <input
            type="text"
            name="code"
            value={formData.code}
            onChange={handleChange}
            className={errors.code ? 'input-error' : 'form-input'}
            maxLength={6}
          />
          {errors.code && <div className="error-message">{errors.code}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number <span>*</span>
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={errors.phoneNumber ? 'input-error' : 'form-input'}
            maxLength={15}
          />
          {errors.phoneNumber && <div className="error-message">{errors.phoneNumber}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
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

        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password <span>*</span>
          </label>
          <div className="input-container">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? 'input-error' : 'form-input'}
              maxLength={50}
            />
            <span
              className="toggle-password"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
            >
              {showConfirmPassword ? <EyeOpen /> : <EyeClosed />}
            </span>
          </div>
          {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
        </div>

        <ConsentToggle />

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
}

export default Registration;
