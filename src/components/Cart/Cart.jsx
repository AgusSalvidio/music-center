import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, clearCart, total, totalQuantity } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <>
        <h2>No hay productos</h2>
        <Link to="/">Ver productos</Link>
      </>
    );
  } else {
    return (
      <div>
        {cart.map((product) => (
          <CartItem key={product.id} {...product} />
        ))}
        <h3>Cantidad Total: {totalQuantity}</h3>
        <h3>Total: ${total}</h3>
        <button onClick={() => clearCart()}>Vaciar carrito</button>
        <Link to="/checkout">Finalizar compra</Link>
      </div>
    );
  }
};

export default Cart;
