import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import { getItems, getItemsCategorizedBy } from "../../asyncmock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const foundItems = categoryId ? getItemsCategorizedBy : getItems;
    foundItems(categoryId)
      .then((response) => setItems(response))
      .catch((error) => console.log(error));
  }, [categoryId]);

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
