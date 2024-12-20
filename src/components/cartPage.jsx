import React from "react";

const CartPage = ({ cartItems = [] }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.title} />
                <div>{item.title}</div>
                <div>${item.price}</div>
              </li>
            ))}
          </ul>
          <div>
            <h3>Total: ${calculateTotal()}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
