import React from "react";
import "./ItemCard.css";
import { Link } from "react-router-dom";

const ItemCard = ({ name, image, price, id, stock }) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
        <div className="card w-100 my-2">
          <div className="item-card" key={id}>
            <Link to={`/item/${id}`}>
              <img src={image} className="card-img-top" />
              {stock > 0 ? (
                <div className="stock-badge">
                  <p>En Stock</p>
                </div>
              ) : (
                <div className="out-of-stock-badge">
                  <p>Sin Stock</p>
                </div>
              )}
            </Link>
          </div>
          <div className="card-body d-flex flex-column">
            <p className="item-card-text text-justify">{name}</p>
          </div>
          <h5 className="card-title p-3 mb-4">${price}</h5>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
