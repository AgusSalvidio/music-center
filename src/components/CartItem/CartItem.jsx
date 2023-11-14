import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartItem.css";

const CartItem = ({ item, quantity }) => {
  const { removeProduct } = useContext(CartContext);

  return (
    <>
      <div className="d-flex align-items-start col-12">
        <img src={item.image} className="img-thumbnail"></img>
        <div className="px-3 py-1">
          <p>
            <strong>{item.name}</strong>
          </p>
          <p>Cantidad: {quantity}</p>
          <p>${item.price}</p>
        </div>
      </div>
      {/* <div className="col-6 col-md-4 col-lg-3 offset-md-3">
        <button className="btn btn-custom shadow-0 me-1 w-100">Contador </button>
      </div> */}
      <div className="col-6 col-md-4 col-lg-4 offset-md-4 py-3">
        <button
          className="btn btn-custom shadow-0 me-1 w-100"
          onClick={() => removeProduct(item.id)}
        >
          Eliminar
        </button>
      </div>
      <hr></hr>
    </>
  );
};

export default CartItem;
