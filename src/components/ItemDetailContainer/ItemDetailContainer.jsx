import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItemIdentifiedBy } from "../../asyncmock";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    getItemIdentifiedBy(itemId)
      .then((response) => setItem(response))
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
