import React, { useState, useEffect } from 'react';
import './salesPage.css';
import winterSale from '../images/winter-sales.png';

const SalesPage = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countdownToNewYear = setInterval(() => {
      const now = new Date();
      const newYear = new Date('January 1, 2025 00:00:00');
      const timeDifference = newYear - now;

      if (timeDifference <= 0) {
        clearInterval(countdownToNewYear);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(countdownToNewYear);
  }, []);

  return (
    <div className="sales-page">
      <img src={winterSale} alt="" />
      <h1>Winter Discounts Coming Soon!</h1>
      <p>Only a few days left until the winter sales begin!</p>
      <div className="countdown-timer">
        <h2>Until the New Year:</h2>
        <div>
          <span>{timeLeft.days} days</span>:
          <span>{timeLeft.hours} hours</span>:
          <span>{timeLeft.minutes} minutes</span>:
          <span>{timeLeft.seconds} seconds</span>
        </div>
      </div>
    </div>
  );
};

export default SalesPage;
