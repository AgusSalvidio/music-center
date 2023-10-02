import React from "react";
import ProductGrid from "../ProductGrid/ProductGrid";

const ItemListContainer = (props) => {
  return (
    <>
      <ProductGrid product={props.product} />
    </>
  );
};

export default ItemListContainer;
