import React from "react";
import ItemCard from "../ItemCard/ItemCard";

const ItemListContainer = ({ items }) => {
  return (
    <section>
      <div className="container py-2">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              {items.map((item) => (
                <ItemCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemListContainer;
