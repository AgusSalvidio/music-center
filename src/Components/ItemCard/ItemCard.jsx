import React from "react";
import "./ItemCard.css";

const ItemCard = (props) => {
  const { name, image, price } = props.item;
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
        <div className="card w-100 my-2">
          <div className="item-card">
            <img src={image} className="card-img-top" />
            <a href="#!" className="btn btn-custom quick-view-btn">
              Vista rápida
            </a>
          </div>
          <div className="card-body d-flex flex-column">
            <p className="card-text">{name}</p>
            <h5 className="card-title">{price}</h5>
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

export default ItemCard;
