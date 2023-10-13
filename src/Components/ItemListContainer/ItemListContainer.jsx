import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ItemListContainer = (props) => {
  return (
    <section>
      <div className="container py-2">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <ProductCard product={props.product} />
              <ProductCard product={props.product} />
              <ProductCard product={props.product} />
              <ProductCard product={props.product} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemListContainer;
