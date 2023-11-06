import ItemCard from "../ItemCard/ItemCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const products = categoryId
      ? query(
          collection(db, "inventory"),
          where("categoryId", "==", categoryId)
        )
      : collection(db, "inventory");
    getDocs(products)
      .then((response) => {
        const foundProducts = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setItems(foundProducts);
      })
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
