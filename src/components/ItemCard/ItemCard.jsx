import React from "react";
import "./ItemCard.css";
import { Link } from "react-router-dom";

const ItemCard = ({ name, image, price, id }) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
        <div className="card w-100 my-2">
          <div className="item-card" key={id}>
            <Link to={`/item/${id}`}>
              <img src={image} className="card-img-top" />
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
