import React from "react";
import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
        <div className="card w-100 my-2">
          <div className="product-card">
            <img src={props.product.image} className="card-img-top" />
            <a href="#!" className="btn btn-custom quick-view-btn">
              Vista rápida
            </a>
          </div>

          <div className="card-body d-flex flex-column">
            <p className="card-text">{props.product.name}</p>
            <h5 className="card-title">{props.product.price}</h5>
            <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
              <a href="#!" className="btn btn-custom shadow-0 me-1">
                Agregar al Carrito
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
