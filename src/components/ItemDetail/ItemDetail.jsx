import React from "react";
import "./ItemDetail.css";
import QuantityCounter from "../QuantityCounter/QuantityCounter";

const ItemDetail = ({
  id,
  categoryId,
  name,
  image,
  price,
  title,
  description,
}) => {
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
