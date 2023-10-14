import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = (props) => {
  const { item } = props;
  return (
    <section>
      <div className="container py-4">
        <div className="common-wrapper container">
          <ItemDetail item={item} />
        </div>
      </div>
    </section>
  );
};

export default ItemDetailContainer;
