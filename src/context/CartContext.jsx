import React from "react";
import { useState, createContext } from "react";

export const CartContext = createContext({
  cart: [],
  total: 0,
  totalAmount: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  console.log(cart);

  const addProduct = (item, quantity) => {
    const hasProductAlreadyBeenAdded = cart.find(
      (prod) => prod.item.id === item.id
    );

    if (!hasProductAlreadyBeenAdded) {
      setCart((prev) => [...prev, { item, quantity }]);
    } else {
      const updatedCart = cart.map((prod) => {
        if (prod.item.id === item.id) {
          return { ...prod, quantity: prod.quantity + quantity };
        } else {
          return prod;
        }
      });
    }
    setTotalAmount((prev) => prev + quantity);
    setTotal((prev) => prev + item.price * quantity);
  };

  const removeProduct = (id) => {
    const productToRemove = cart.find((prod) => prod.item.id === id);
    const updatedCart = cart.filter((prod) => prod.item.id !== id);

    setCart(updatedCart);
    setTotalAmount((prev) => prev - productToRemove.quantity);
    setTotal(
      (prev) => prev - productToRemove.item.price * productToRemove.quantity
    );
  };

  const clearCart = () => {
    setCart([]);
    setTotalAmount(0);
    setTotal(0);
  };

  return (
    <CartContext.Provider
      value={{ cart, total, totalAmount, addProduct, removeProduct, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
