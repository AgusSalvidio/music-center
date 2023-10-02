import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = (props) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ProductCard product={props.product} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
