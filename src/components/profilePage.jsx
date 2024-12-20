import React, { useState } from 'react';
import '../styles/profilePage.css';
import '../styles/personalAccount.css';  // Добавьте свой CSS файл для стилизации
import { Link, useNavigate} from 'react-router-dom';
import { ReactComponent as CurrentOrder } from '../images/order1.svg';
import { ReactComponent as PersonalAccount } from '../images/wallet.svg';
import { ReactComponent as PersonalDetails } from '../images/person.svg';
import { ReactComponent as HistoryOrder } from '../images/order2.svg';
import { ReactComponent as Basket } from '../images/basket.svg';
import { ReactComponent as Contacts } from '../images/contacts.svg';
import FAQSection from './FAQSection';
import Delivery from './Delivery';
import FeedBackSection from './feedbackSection';
import Warranty from './warranty';
import Product from './product';

function PersonalAccountPage() {
  const [balance, setBalance] = useState(0);
  const [amountToAdd, setAmountToAdd] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleAddAmount = () => {
    if (amountToAdd > 0) {
      setBalance(balance + Number(amountToAdd));
      setAmountToAdd('');
    }
  };

  const handlePresetAmount = (amount) => {
    setAmountToAdd(amount);
    setBalance(balance + amount);
  };

  return (
    <div className="personal-account">
      <h2>Personal account</h2>
      <div className="account-summary">
        <h3>Current balance</h3>
        <p className="balance">{balance} KZT</p>
      </div>

      <div className="top-up-section">
        <h4>Fixed payment</h4>
        <div className="preset-amounts">
          <button onClick={() => handlePresetAmount(100)} className="amount-btn">100 KZT</button>
          <button onClick={() => handlePresetAmount(200)} className="amount-btn">200 KZT</button>
          <button onClick={() => handlePresetAmount(500)} className="amount-btn">500 KZT</button>
          <button onClick={() => handlePresetAmount(1000)} className="amount-btn">1000 KZT</button>
          <button onClick={() => handlePresetAmount(5000)} className="amount-btn">5000 KZT</button>
        </div>

        <div className="custom-amount">
          <input
            type="number"
            placeholder="0.00"
            value={amountToAdd}
            onChange={(e) => setAmountToAdd(e.target.value)}
          />
          <h4>KZT.</h4>
        </div>
      </div>

      <div className="payment-method">
        <h4>Payment method</h4>
        <select onChange={(e) => setPaymentMethod(e.target.value)} value={paymentMethod}>
          <option value="">Choose a payment method</option>
          <option value="credit-card">Credit card</option>
          <option value="cash">In cash</option>
        </select>
      </div>

      <div className="confirmation">
        <button onClick={handleAddAmount}>Подтвердить</button>
      </div>
    </div>
  );
}

function ProfilePage() {
  const [selectedSection, setSelectedSection] = useState(null);
  const navigate = useNavigate();

  const leftMenuItems = [
    { label: "FAQ", component: <FAQSection /> },
    { label: "Delivery and Payment", component: <Delivery /> },
    { label: "Feedback", component: <FeedBackSection /> },
    { label: "Exchange/Return/Warranty", component: <Warranty /> },
    { label: "Products", component: <Product /> },
  ];

  const items = [
    { title: 'Current Orders', description: 'View your current orders.', icon: <CurrentOrder /> },
    { title: 'Personal Account', description: 'Manage your finances.', icon: <PersonalAccount />, link: null },
    { title: 'Personal Details', description: 'Update your personal information.', icon: <PersonalDetails />, link: '/person-details'},
    { title: 'Basket', description: 'Look at the contents of your shopping cart.', icon: <Basket /> },
    { title: 'Contacts', description: 'Contact us for support.', icon: <Contacts />, link: '/contacts' },

  ];

  const handleCardClick = (title, link) => {
    if (title === 'Personal Account') {
      setSelectedSection('Personal Account');
    } else if (link) {
      navigate(link); // Navigate to the Contacts page if the link is defined
    }
  };

  return (
    <div className="profile-page">
      <div className="left-menu">
        <h3>Categories</h3>
        <ul>
          {leftMenuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => setSelectedSection(item.label)}
              className={selectedSection === item.label ? "active" : ""}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="main-content">
        <div className="reg-container">
          <div className="reg-main">
            <h2>Personal Cabinet</h2>
            <div className="addresses">
              <Link to="/" className="address">Main</Link>
              <span> — </span>
              <Link to="/profile" className="address">Personal account</Link>
            </div>
          </div>
        </div>

        {selectedSection ? (
          selectedSection === 'Personal Account' ? (
            <PersonalAccountPage />
          ) : (
            leftMenuItems.find(item => item.label === selectedSection)?.component
          )
        ) : (
          <div className="cards-container">
            {items.map((item, index) => (
              <div
                className="card"
                key={index}
                onClick={() => handleCardClick(item.title, item.link)}
              >
                <div className="card-icon">{item.icon}</div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
