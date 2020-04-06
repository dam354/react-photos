import React, { useContext, useState } from 'react';
import { PicContext } from '../PicContext';
import useHover from '../hooks/useHover';

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(PicContext);
  const [hovered, ref] = useHover();

  const trashIcon = hovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line';

  return (
    <div className="cart-item">
      <i
        className={trashIcon}
        onClick={() => removeFromCart(item)}
        ref={ref}
      ></i>
      <img src={item.url} width="130px" alt={item.url} />
      <p>$5.99</p>
    </div>
  );
};

export default CartItem;
