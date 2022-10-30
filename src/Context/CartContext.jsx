import React from "react";
import { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const cartQuantity = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0);
  };

  const totalPriceCart = () => {
    return cart.reduce(
      (acc, items) => Math.abs(items.precio * items.cantidad + acc),
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeItemCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        cartQuantity,
        clearCart,
        totalPriceCart,
        removeItemCart,
        isInCart,
        setCart,
        
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
