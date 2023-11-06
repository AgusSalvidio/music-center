import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <Link to="/cart" className="nav-link">
      <i className="fa-solid fa-cart-shopping"></i>
      <span id="cart-item-count" className="px-1">
        {totalQuantity > 0 && <strong>{totalQuantity}</strong>}
      </span>
    </Link>
  );
};

export default CartWidget;
