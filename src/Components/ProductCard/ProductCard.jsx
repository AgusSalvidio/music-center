import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
        <div className="card w-100 my-2">
          <div className="product-card">
            <img
              src="https://media.guitarcenter.com/is/image/MMGS7/L54573000002000-00-2000x2000.jpg"
              className="card-img-top"
            />
            <a href="#!" className="btn btn-custom quick-view-btn">
              Vista rápida
            </a>
          </div>

          <div className="card-body d-flex flex-column">
            <p className="card-text">Gibson SG Standard Ebony</p>
            <h5 className="card-title">$1,799.00</h5>
            <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
              <a href="#!" className="btn btn-custom shadow-0 me-1">
                Agregar al Carrito
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
