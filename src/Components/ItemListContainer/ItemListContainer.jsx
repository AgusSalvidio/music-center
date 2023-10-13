import React from "react";
import ItemCard from "../ItemCard/ItemCard";

const ItemListContainer = (props) => {
  const { item } = props;
  return (
    <section>
      <div className="container py-2">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <ItemCard item={item} />
              <ItemCard item={item} />
              <ItemCard item={item} />
              <ItemCard item={item} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemListContainer;
