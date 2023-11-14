import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import cartIcon from "../../assets/cart-icon.svg";
import "./Cart.css";

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
      <div className="container pt-4">
        <div className="row no-gutters">
          <div className="col-12 col-md-8">
            <div className="row pb-2">
              {cart.map((product) => (
                <CartItem key={product.id} {...product} />
              ))}
            </div>
            <div className="text-center">
              <button
                className="btn btn-custom shadow-0 me-1 w-25"
                onClick={() => clearCart()}
              >
                Vaciar carrito
              </button>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="cart-total">
              <div className="d-flex cart-total-detailed py-1">
                <span>Cantidad Total</span>
                <span>{totalQuantity}</span>
              </div>
              <div className="d-flex cart-total-detailed py-1">
                <span> Total</span>
                <span>${total}</span>
              </div>
              <div className="py-2">
                <Link to="/checkout">
                  <button className="btn btn-custom shadow-0 me-1 w-100">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;
