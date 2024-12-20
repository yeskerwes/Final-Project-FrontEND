import React, { useState } from 'react';
import '../styles/myCabinet.css';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Profile } from '../images/icon-profile.svg';
import { ReactComponent as TriangleDown } from '../images/arrow-down-triangle.svg';
import { ReactComponent as Logout } from '../images/logout.svg';

function MyCabinet() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleNavigate = (path) => {
    navigate(path); // Перенаправление на указанный путь
  };
  

  return (
    <div className="profile-container">
      <div
        className="profile-trigger"
        onClick={() => handleNavigate('/profile')} // Перенаправление на страницу профиля
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Profile className="icon-myProfile" /> My Profile
        <TriangleDown className="icon-triangleDown" />
      </div>

      {isOpen && (
        <div
          className="profile-panel"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul>
            <li onClick={() => handleNavigate('/current-orders')}>Current orders</li>
            <li onClick={() => handleNavigate('/personal-account')}>Personal Account</li>
            <li onClick={() => handleNavigate('/person-details')}>Personal Details</li>
            <li onClick={() => handleNavigate('/change-password')}>Change password</li>
            <li onClick={() => handleNavigate('/basket')}>Basket</li>
            <li onClick={() => handleNavigate('/contacts')}>Contacts</li>
            <li className="logout" onClick={() => handleNavigate('/logout')}>
              <Logout className="icon-logout" /> Log Out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MyCabinet;
