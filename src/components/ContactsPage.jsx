import React from 'react';
import '../styles/contactsPage.css';
import { Link } from 'react-router-dom';

function ContactsPage() {
  return (
    <div className="contacts-page">
      <div className="reg-container">
        <div className="reg-main">
          <h2>Contacts</h2>
          <div className="addresses">
            <Link to="/" className="address">Main</Link>
            <span> — </span>
            <Link to="/profile" className="address">Account</Link>
            <span> — </span>
            <span> Contacts </span>
          </div>
        </div>
      </div>

      <div className="contacts-content">
        <div className="left-info">
          <div className="working-hours">
            <h3>Working Hours</h3>
            <ul>
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          <div className="contact-info">
            <h3>Contact Information</h3>
            <p><strong>Phone:</strong> +7 (727) 123-45-67</p>
            <p><strong>Email:</strong> info@example.kz</p>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=76.669682%2C43.207633&mode=search&oid=1606734818&ol=biz&z=16"
            width="600"
            height="400"
            frameBorder="0"
            title="Almaty Map"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactsPage;
