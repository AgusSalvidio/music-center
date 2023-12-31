import { useState, createContext } from "react";

export const CartContext = createContext({
  cart: [],
  total: 0,
  totalQuantity: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

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
      setCart(updatedCart);
    }
    setTotalQuantity((prev) => prev + quantity);
    setTotal((prev) => prev + item.price * quantity);
  };

  const removeProduct = (id) => {
    const productToRemove = cart.find((prod) => prod.item.id === id);
    const updatedCart = cart.filter((prod) => prod.item.id !== id);

    setCart(updatedCart);
    setTotalQuantity((prev) => prev - productToRemove.quantity);
    setTotal(
      (prev) => prev - productToRemove.item.price * productToRemove.quantity
    );
  };

  const clearCart = () => {
    setCart([]);
    setTotalQuantity(0);
    setTotal(0);
  };

  const productIdentifiedBy = (id) => {
    return cart.find((prod) => prod.item.id === id);
  };

  const currentSelectedQuantity = (anId) => {
    const currentProduct = productIdentifiedBy(anId);
    const currentSelectedQuantity = currentProduct?.quantity;
    return currentSelectedQuantity != undefined ? currentSelectedQuantity : 0;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        totalQuantity,
        addProduct,
        removeProduct,
        clearCart,
        currentSelectedQuantity,
        productIdentifiedBy,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
