import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = () => {
  return (
    <section className="">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
