import React, { useState } from 'react';
import '../styles/myCabinet.css';
import { ReactComponent as Profile } from '../images/icon-profile.svg';
import { ReactComponent as TriangleDown } from '../images/arrow-down-triangle.svg';
import { ReactComponent as Logout } from '../images/logout.svg';

function MyCabinet() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="profile-container">
        <div className="profile-trigger"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <Profile className="icon-myProfile" /> My Profile
            <TriangleDown className='icon-triangleDown'/>
          </div>
      {isOpen && (
        <div
          className="profile-panel"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul>
            <li>Current orders</li>
            <li>Personal Account</li>
            <li>Personal Details</li>
            <li>Change password</li>
            <li>Order history</li>
            <li>Basket</li>
            <li>Favorites</li>
            <li>Contacts</li>
            <li className="logout"><Logout 
            className='icon-logout'/>Log Out</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MyCabinet;
