import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PicContext } from '../PicContext';

const Header = () => {
  const { isCartEmpty } = useContext(PicContext);

  const cartIcon = () => {
    if (isCartEmpty) {
      return <i className="ri-shopping-cart-line ri-fw ri-2x"></i>;
    } else {
      return <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>;
    }
  };

  return (
    <header>
      <Link to="/">
        <h2>React | Photos</h2>
      </Link>
      <Link to="/cart">{cartIcon()}</Link>
    </header>
  );
};

export default Header;
