import React, { useState, useEffect, useContext } from 'react';
import { PicContext } from '../PicContext';
import useHover from '../hooks/useHover';
import PropTypes from 'prop-types';

function Image({ className, img }) {
  const [hovered, ref] = useHover();

  const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(
    PicContext
  );

  const favoriteIcon = () => {
    if (img.isFavorite) {
      return (
        <i
          onClick={() => toggleFavorite(img.id)}
          className={`ri-heart-fill favorite`}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          onClick={() => toggleFavorite(img.id)}
          className={`ri-heart-line favorite`}
        ></i>
      );
    }
  };

  const cartIcon = () => {
    const isInCart = cartItems.find(item => item.id === img.id);
    if (isInCart) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFromCart(img)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          onClick={() => {
            addToCart(img);
          }}
          className="ri-add-circle-line cart"
        ></i>
      );
    }
  };

  return (
    <div ref={ref} className={`${className} image-container`}>
      <img src={img.url} className="image-grid" alt={img.url} />
      {favoriteIcon()}
      {cartIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  })
};

export default Image;
