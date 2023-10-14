import "./App.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import { useState, useEffect } from "react";
import { getItems } from "./asyncmock";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems()
      .then((response) => setItems(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Navbar />
      <ItemListContainer items={items} />
    </>
  );
}

export default App;
