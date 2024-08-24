import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, decreaseItemQuantity, increaseItemQuantity, removeItem } from './CartSlice';
import './CartItem.css';

const CartItem = () => {
  const cart = useSelector(state => state.cart.items);
  

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let totalAmount = 0;
    cart.forEach((item) => {
        totalAmount += item.cost * item.quantity;
    });
    return totalAmount;

  };
  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    let totalCost = 0;
    totalCost = item.price * item.quantity;
    return totalCost;
  };

  //const handleContinueShopping = (e) => {
   
  //};


  const dispatch = useDispatch();
  const handleIncrement = (item) => {
    dispatch(increaseItemQuantity(item));
  };

  const handleDecrement = (item) => {
    dispatch(decreaseItemQuantity(item));
  };

  const handleRemove = (plant) => {
    dispatch(removeItem(plant));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item.name)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item.name)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item.name)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      {/*<div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
    </div>*/}
    <div>
        <button className = "get-started-button" onClick={handleClearCart}>Clear Cart</button>
    </div>
    </div>
  );
};

export default CartItem;


