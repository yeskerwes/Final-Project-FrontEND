import React, { useState } from 'react';
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
            <div className="form-actions">
              <button type="button" onClick={handlePrevStep} className="back-button">
                Back
              </button>
              <button
                type="button"
                onClick={handleNextStep}
                className="submit-button"
                disabled={!isStep2Valid}
              >
                Save & Continue
              </button>
            </div>
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
              <button type="submit" className="submit-button">
                Submit Order
              </button>
            </div>
          </section>
        )}
      </form>
    </div>
  );
};

export default OrderPage;
