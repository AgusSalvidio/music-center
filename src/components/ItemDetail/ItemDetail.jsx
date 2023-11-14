import "./ItemDetail.css";
import QuantityCounter from "../QuantityCounter/QuantityCounter";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({
  id,
  categoryId,
  name,
  image,
  price,
  stock,
  title,
  description,
}) => {
  const [addQuantity, setAddQuantity] = useState(0);
  const { addProduct } = useContext(CartContext);

  const quantityHandler = (quantity) => {
    setAddQuantity(quantity);
    const item = { id, name, price };
    addProduct(item, quantity);
  };
  return (
    <>
      <div className="row no-gutters my-4 pb-4">
        <div className="col-12 col-sm-8 text-center">
          <div className="item-detail">
            <img src={image} className="card-img-top" />
          </div>
        </div>
        <div className="col-12 col-sm-4 info-section">
          <div className="description mb-4">
            <h2 className="text-125r item-title">{name}</h2>
          </div>
          <hr></hr>
          <div>
            <h5 className="item-price">${price}</h5>
            <strong className="item-quantity">Stock: {stock}</strong>
            <hr></hr>
            {addQuantity > 0 ? (
              <div className="d-flex purchase-button-box">
                <Link to="/">
                  <button className="btn btn-custom shadow-0 me-1 w-100">
                    Continuar Comprando
                  </button>
                </Link>
                <Link to="/cart">
                  <button className="btn btn-custom shadow-0 me-1 w-100">
                    Finalizar Compra
                  </button>
                </Link>
              </div>
            ) : (
              <QuantityCounter
                start={1}
                stock={stock}
                addProduct={quantityHandler}
              />
            )}
          </div>
        </div>
      </div>
      <div className="no-gutters my-4 pb-4">
        <div className="item-description">
          <h2 className="text-pre font-weight-bold">
            <span>{title}</span>
          </h2>
          <div className="item-description-body">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
