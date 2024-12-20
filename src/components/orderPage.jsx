import React, { useState, useEffect } from 'react';
import '../styles/orderPage.css';

const OrderPage = () => {
  const [step, setStep] = useState(1); // State to track the current step
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
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted', customerData, paymentMethod);
  };

  // Check if all required fields are filled for step 1
  const isStep1Valid = Object.values(customerData).every((value) => value.trim() !== '');

  // Check if a payment method is selected for step 2
  const isStep2Valid = paymentMethod !== '';

  return (
    <div className="order-page">
      <h1>Delivery Options</h1>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <section className="delivery-info-container">
            <h2>Delivery Information</h2>
            <div className="input-group">
              <label htmlFor="firstName">First Name*</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={customerData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="lastName">Last Name*</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={customerData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="address">Address Line 1*</label>
              <input
                type="text"
                id="address"
                name="address"
                value={customerData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="city">Town/City*</label>
              <input
                type="text"
                id="city"
                name="city"
                value={customerData.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={customerData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone Number*</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={customerData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <button
              type="button"
              onClick={handleNextStep}
              className="save-continue"
              disabled={!isStep1Valid} // Disable if fields are empty
            >
              Save & Continue
            </button>
          </section>
        )}

        {step === 2 && (
          <section className="payment-info-container">
            <h2>Payment</h2>
            <div className="input-group">
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
            <div className="input-group">
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
              className="save-continue"
              disabled={!isStep2Valid} // Disable if no payment method is selected
            >
              Save & Continue
            </button>
          </section>
        )}

        {step === 3 && (
          <section className="order-review-container">
            <h2>Order Review</h2>
            <p><strong>First Name:</strong> {customerData.firstName}</p>
            <p><strong>Last Name:</strong> {customerData.lastName}</p>
            <p><strong>Address:</strong> {customerData.address}</p>
            <p><strong>City:</strong> {customerData.city}</p>
            <p><strong>Email:</strong> {customerData.email}</p>
            <p><strong>Phone:</strong> {customerData.phone}</p>
            <p><strong>Payment Method:</strong> {paymentMethod}</p>
            <button type="button" onClick={handlePrevStep} className="back-button">
              Back
            </button>
            <button type="submit" className="submit-order">
              Submit Order
            </button>
          </section>
        )}
      </form>
    </div>
  );
};

export default OrderPage;
