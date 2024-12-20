import React from 'react';
import '../styles/profilePage.css';
import { Link, useNavigate } from 'react-router-dom';

function ProfilePage() {
  const items = [
    { title: 'Текущие заказы', description: 'Просмотрите ваши текущие заказы.' },
    { title: 'Личный счет', description: 'Управляйте своими финансами.' },
    { title: 'Личные данные', description: 'Обновите личную информацию.' },
    { title: 'История заказов', description: 'Просмотрите ваши предыдущие заказы.' },
    { title: 'Корзина', description: 'Посмотрите содержимое вашей корзины.' },
    { title: 'Контакты', description: 'Свяжитесь с нами для поддержки.' },
  ];

  return (
    <div className="profile-page">
      <div className="reg-container">
        <div className="reg-main">
          <h2>Sign In</h2>
          <div className="adresses">
            <Link to="/" className="address">Main</Link>
            <span>—</span>
            <span>Sign In</span>
          </div>
        </div>
      </div>
      <div className="cards-container">
        {items.map((item, index) => (
          <div className="card" key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfilePage;
