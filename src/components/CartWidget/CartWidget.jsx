import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <>
      <i className="fa-solid fa-cart-shopping"></i>
      <span id="cart-item-count" className="px-1">
        {totalQuantity > 0 && <strong>{totalQuantity}</strong>}
      </span>
    </>
  );
};

export default CartWidget;
