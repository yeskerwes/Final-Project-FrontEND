import React, { useState } from 'react';
import '../styles/orderPage.css';
import { Link } from 'react-router-dom'; 

const OrderPage = () => {
  const [step, setStep] = useState(1); 
  const [customerData, setCustomerData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    email: '',
    phone: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const shippingAddress = `${customerData.address}, ${customerData.city}`;
    const phone = `${customerData.phone}`;

    const emailContent = {
      to: customerData.email,
      subject: "Thank you for your purchase from Nike!",
      text: `
        Dear Customer,

        We appreciate your choice to shop with us. Your order is on its way, and we’re excited to have been a part of your journey.

        Here are the details of your order:
        Order Details:

        Shipping Address: ${shippingAddress}
        Payment Method: ${paymentMethod}
        Phone Number: ${phone}

        Should you have any questions or need assistance, don’t hesitate to reach out to us. We look forward to seeing you again soon! Stay active, stay strong, and keep moving forward.

        Nike Team
      `,
    };

    try {
      const response = await fetch('http://localhost:8081/api/email/sendemail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailContent),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      const data = await response.json();
      console.log('Email sent successfully:', data);
    } catch (error) {
      console.error('Error sending email:', error);
    }
};


  const isStep1Valid = Object.values(customerData).every((value) => value.trim() !== '');

  const isStep2Valid = paymentMethod !== '';

  return (
    <div className="order-page">
      <h1>Delivery Options</h1>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <section className="delivery-info-container centered-form">
            <h2>Delivery Information</h2>
            <div className="form-group">
              <label htmlFor="firstName" className="form-label">First Name<span>*</span></label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={customerData.firstName}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName" className="form-label">Last Name<span>*</span></label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={customerData.lastName}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address" className="form-label">Address Line 1<span>*</span></label>
              <input
                type="text"
                id="address"
                name="address"
                value={customerData.address}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city" className="form-label">Town/City<span>*</span></label>
              <input
                type="text"
                id="city"
                name="city"
                value={customerData.city}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email<span>*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={customerData.email}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone Number<span>*</span></label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={customerData.phone}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
            <button
              type="button"
              onClick={handleNextStep}
              className="submit-button"
              disabled={!isStep1Valid}
            >
              Save & Continue
            </button>
          </section>
        )}

        {step === 2 && (
          <section className="payment-info-container centered-form">
            <h2>Payment</h2>
            <div className="form-group">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="creditCard"
                  onChange={handlePaymentChange}
                  required
                />
                Credit Card
              </label>
            </div>
            <div className="form-group">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  onChange={handlePaymentChange}
                />
                PayPal
              </label>
            </div>
            <button type="button" onClick={handlePrevStep} className="back-button">
              Back
            </button>
            <button
              type="button"
              onClick={handleNextStep}
              className="continue-button"
              disabled={!isStep2Valid} 
            >
              Save & Continue
            </button>
          </section>
        )}

        {step === 3 && (
          <section className="order-review-container centered-form">
            <h2>Order Review</h2>
            <p><strong>First Name:</strong> {customerData.firstName}</p>
            <p><strong>Last Name:</strong> {customerData.lastName}</p>
            <p><strong>Address:</strong> {customerData.address}</p>
            <p><strong>City:</strong> {customerData.city}</p>
            <p><strong>Email:</strong> {customerData.email}</p>
            <p><strong>Phone:</strong> {customerData.phone}</p>
            <p><strong>Payment Method:</strong> {paymentMethod}</p>
            <div className="form-actions">
              <button type="button" onClick={handlePrevStep} className="back-button">
                Back
              </button>
              <button type="submit" className="continue-button" onClick={handleNextStep}>
                Submit Order
              </button>
            </div>
          </section>
        )}
        {step === 4 && (
          <section className="ordered-last-content">
            <div className="succesfully-text">
              <span className="checkmark">✔</span> Your order has been successfully placed!
            </div>
            <div className="leave-review">
              <p>Leave your feedback:</p>
              <div className="star-rating">
                <span className="star" data-value="1">★</span>
                <span className="star" data-value="2">★</span>
                <span className="star" data-value="3">★</span>
                <span className="star" data-value="4">★</span>
                <span className="star" data-value="5">★</span>
              </div>
            </div>
            <div className="thank-you-message">
              <p>
                Thank you for choosing our store! We appreciate your trust and hope you are happy with your purchase.
              </p>
              <p>
                You can <Link to="/orders">check your order status</Link> or continue shopping.
              </p>
            </div>
            <button type="button" className="back-button">
              <Link to="/">Back to Home</Link>
            </button>
          </section>

        )}
      </form>
    </div>
  );
};

export default OrderPage;
