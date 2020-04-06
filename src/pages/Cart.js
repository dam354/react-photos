import React, { useContext, useState, useEffect } from 'react';
import { PicContext } from '../PicContext';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cartItems, emptyCart, isCartEmpty } = useContext(PicContext);
  const [buttonText, setButtonText] = useState('Place Order');
  const totalCost = 5.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  const cartItemsElement = cartItems.map((item, i) => {
    return <CartItem key={i} item={item}></CartItem>;
  });

  const placeOrder = () => {
    setButtonText('Ordering');
    setTimeout(() => {
      setButtonText('Order Placed');
      console.log('Order Placed');
      emptyCart();
    }, 3000);
  };

  const placeOrderElement = !isCartEmpty ? (
    <>
      <p className="total-cost">Total: {totalCostDisplay}</p>
      <div className="order-button">
        <button onClick={placeOrder}>{buttonText}</button>
      </div>
    </>
  ) : (
    <p>You have no items in your cart.</p>
  );
  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemsElement}
      {placeOrderElement}
    </main>
  );
};

export default Cart;
