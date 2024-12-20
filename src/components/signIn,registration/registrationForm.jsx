import React, { useState } from 'react';
import './registrationForm.css';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as EyeOpen } from '../images/eye_open.svg';
import { ReactComponent as EyeClosed } from '../images/eye_close.svg';
import { ReactComponent as Profile } from '../images/icon-profile.svg';
import loadingGif from '../images/preloader.gif';

function RegistrationForm({ onSignUpSuccess }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(true);
    }, 1000);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
    const newErrors = { email: '', password: '' };

    if (!formData.email.trim()) {
      newErrors.email = 'Please fill out this field.';
      hasError = true;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Please fill out this field.';
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      onSignUpSuccess();  // Вызов функции из родительского компонента
      navigate('/');  // Перенаправление на главную страницу
    }
  };

  const handleSignUp = () => {
    // Эта функция вызывается при клике на кнопку "Sign Up"
    if (formData.email && formData.password) {
      handleSubmit();  // Вызываем submit вручную
    } else {
      alert('Please fill in both fields.');
    }
  };

  return (
    <>
      <section className="registration">
        {!isLoading && !isModalOpen && (
          <div className="sign-in-btn" onClick={openModal} title="My cabinet">
            <Profile className="icon-profile" /> Sign in
          </div>
        )}
        {isLoading && (
          <div className="loading-overlay">
            <img src={loadingGif} alt="Loading..." className="loading-gif" />
          </div>
        )}
      </section>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <span className="close-button" onClick={closeModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                  <path d="M334.411,138l6.3,6.3a1,1,0,0,1,0,1.414,0.992,0.992,0,0,1-1.408,0l-6.3-6.306-6.3,6.306a1,1,0,0,1-1.409-1.414l6.3-6.3-6.293-6.3a1,1,0,0,1,1.409-1.414l6.3,6.3,6.3-6.3A1,1,0,0,1,340.7,131.7Z" transform="translate(-325 -130)" />
                </svg>
              </span>
              <h2>Personal Account</h2>
              <form className="modal-form" onSubmit={handleSubmit}>
                <label>
                  Login <span>*</span>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    maxLength={50}
                  />
                  {errors.email && <div className="error-message">{errors.email}</div>}
                </label>
                <label>
                  Password <span>*</span>
                  <div className="password-container">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={errors.password ? 'error' : ''}
                      maxLength={50}
                    />
                    <span
                      className="toggle-password"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowPassword(!showPassword);
                      }}
                    >
                      {showPassword ? <EyeOpen /> : <EyeClosed />}
                    </span>
                  </div>
                  {errors.password && <div className="error-message">{errors.password}</div>}
                </label>
                <div className="must-have">
                  <span>*</span> – required fields
                </div>
                <div className="submit-btns">
                  <button type="submit" className="submit-sign">Sign In</button>
                  <button type="button" onClick={handleSignUp} className="submit-registration">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RegistrationForm;
