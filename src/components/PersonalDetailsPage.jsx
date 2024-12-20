import React, { useState } from 'react';
import '../styles/personalDetailsPage.css';
import { Link, useNavigate} from 'react-router-dom';

function PersonalDetailsPage() {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSaveChanges = () => {
    // Логика сохранения данных
    alert('Changes saved!');
    // Здесь можно добавить реальную логику сохранения данных, например, отправку на сервер
  };

  return (
    <div className="personal-details-page">
      <div className="reg-container">
        <div className="reg-main">
            <h2>Personal Details</h2>
            <div className="addresses">
            <Link to="/" className="address">Main</Link>
            <span> — </span>
            <Link to="/profile" className="address">Profile</Link>
            <span> — </span>
            <span> Details </span>
            </div>
        </div>
        </div>

      <div className="personal-info">
        <h3>Fill out the details to help us address you properly</h3>

        <div className="form-group">
          <label htmlFor="login">Login <span>*</span></label>
          <input
            type="text"
            id="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email <span>*</span></label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone <span>*</span></label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <button onClick={handleSaveChanges} className="save-btn">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default PersonalDetailsPage;
