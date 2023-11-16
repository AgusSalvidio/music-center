import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { getDoc, doc } from "firebase/firestore";
import { trackPromise } from "react-promise-tracker";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    const foundItem = doc(db, "inventory", itemId);
    trackPromise(
      getDoc(foundItem)
        .then((response) => {
          const data = response.data();
          const newItem = { id: response.id, ...data };
          setItem(newItem);
        })
        .catch((error) => console.log(error))
    );
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
