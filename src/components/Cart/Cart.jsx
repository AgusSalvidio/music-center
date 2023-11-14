import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import cartIcon from "../../assets/cart-icon.svg";

const Cart = () => {
  const { cart, clearCart, total, totalQuantity } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className="container py-5 text-center">
        <img src={cartIcon}></img>
        <h2>El carrito está vacío</h2>
        <div className="pt-3">
          <Link to="/">
            <button
              onClick={() => addProduct(quantityCounter)}
              className="btn btn-custom shadow-0 me-1 w-50"
            >
              Continuar Comprando
            </button>
          </Link>
        </div>
      </div>
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
