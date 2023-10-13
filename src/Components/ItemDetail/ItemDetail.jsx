import React from "react";
import "./ItemDetail.css";
import QuantityCounter from "../QuantityCounter/QuantityCounter";

const ItemDetail = (props) => {
  const { name, image, price } = props.item;
  return (
    <>
      <div className="col-12 col-sm-8 text-center">
        <div className="item-detail">
          <img src={image} className="card-img-top" />
        </div>
      </div>
      <div className="col-12 col-sm-4 info-section">
        <div class="description mb-4">
          <h2 class="text-125r item-title">{name}</h2>
        </div>
        <hr></hr>
        <div>
          <h5 className="item-price">{price}</h5>
          <div className="d-flex">
            <QuantityCounter />
          </div>
          <div className="pt-3">
            <a href="#!" className="btn btn-custom shadow-0 me-1 w-100">
              Agregar al Carrito
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
