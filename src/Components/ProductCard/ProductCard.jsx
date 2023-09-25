import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
        <div class="card w-100 my-2">
          <div class="product-card">
            <img
              src="https://media.guitarcenter.com/is/image/MMGS7/L54573000002000-00-2000x2000.jpg"
              class="card-img-top"
            />
            <a href="#!" class="btn btn-custom quick-view-btn">
              Vista rápida
            </a>
          </div>

          <div class="card-body d-flex flex-column">
            <p class="card-text">Gibson SG Standard Ebony</p>
            <h5 class="card-title">$1,799.00</h5>
            <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
              <a href="#!" class="btn btn-custom shadow-0 me-1">
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
