import React from "react";
import { Link } from "react-router-dom";
import '../styles/cartPage.css';

const CartPage = ({ cartItems, removeFromCart }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Start shopping to add items!</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img src={item.imageUrl || "/placeholder-image.jpg"} alt={item.title} />
                <div>
                  <strong>{item.title}</strong>
                </div>
                <div>${item.price.toFixed(2)}</div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="cartPage-total">
            Total: ${calculateTotal()}
            <Link to={{ pathname: "/orderPage", state: { cartItems } }} className="clear-cart-button">Go to Order</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
