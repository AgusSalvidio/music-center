import React from "react";
import ItemCard from "../ItemCard/ItemCard";

const ItemListContainer = (props) => {
  return (
    <section>
      <div className="container py-2">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <ItemCard product={props.product} />
              <ItemCard product={props.product} />
              <ItemCard product={props.product} />
              <ItemCard product={props.product} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemListContainer;
