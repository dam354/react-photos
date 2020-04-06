import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const PicContext = React.createContext();

const PicContextProvider = ({ children }) => {
  const [allPics, setAllPics] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios(
        'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
      );
      setAllPics(result.data);
    };
    fetchData();
  }, []);

  const addToCart = img => {
    setCartItems(oldCart => [...oldCart, img]);
  };
  const removeFromCart = img => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== img.id));
  };

  const toggleFavorite = id => {
    const newPics = allPics.map(pic => {
      if (pic.id === id) {
        return {
          ...pic,
          isFavorite: !pic.isFavorite
        };
      }
      return pic;
    });

    setAllPics(newPics);
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    console.log(cartItems.length > 0);
    setIsCartEmpty(cartItems.length < 1);
  }, [cartItems]);

  return (
    <PicContext.Provider
      value={{
        allPics,
        toggleFavorite,
        cartItems,
        addToCart,
        removeFromCart,
        isCartEmpty,
        emptyCart
      }}
    >
      {children}
    </PicContext.Provider>
  );
};

export { PicContextProvider, PicContext };

// url: "https://github.com/bobziroll/scrimba-react-bootcamp-images/blob/master/pic1.jpg?raw=true"
// id: '1';
// isFavorite: false;
