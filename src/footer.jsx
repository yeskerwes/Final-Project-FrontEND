import React from 'react';
import './styles/footer.css'; 
import { FaInstagram, FaTelegram, FaTiktok } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Каталог</h3>
          <ul>
            <li>Акции</li>
            <li>Бренды</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Компания</h3>
          <ul>
            <li>О компании</li>
            <li>Наша команда</li>
            <li>Контакты</li>
            <li>Сотрудничество</li>
            <li>Вакансии</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Розничный магазин</h3>
          <ul>
            <li>Оплата Kaspi QR</li>
            <li>Оферта</li>
            <li>Контакты</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Помощь покупателю</h3>
          <ul>
            <li>Частые вопросы по заказам</li>
            <li>Доставка и оплата</li>
            <li>Обратная связь</li>
            <li>Обмен / Возврат / Гарантия</li>
            <li>Товары</li>
            <li>Скидки и программа лояльности</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contacts</h3>
          <ul>
            <li>+7 778 774 34 71</li>
            <li>230107029@sdu.edu.kz</li>
          </ul>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
              <FaInstagram />
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="social-icon telegram">
              <FaTelegram />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon tiktok">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>2024 © Kicks Avenue</p>
      </div>
    </footer>
  );
};

export default Footer;
