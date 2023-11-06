import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    const foundItem = doc(db, "inventory", itemId);
    getDoc(foundItem)
      .then((response) => {
        const data = response.data();
        const newItem = { id: response.id, ...data };
        setItem(newItem);
      })
      .catch((error) => console.log(error));
  }, [itemId]);

  return (
    <section>
      <div className="container py-4">
        <div className="common-wrapper container">
          {<ItemDetail {...item} />}
        </div>
      </div>
    </section>
  );
};

export default ItemDetailContainer;
