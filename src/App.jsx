import "./App.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";

const guitar = {
  name: "Gibson SG Standard Ebony",
  image:
    "https://media.guitarcenter.com/is/image/MMGS7/L54573000002000-00-2000x2000.jpg",
  price: "$1,799.00",
};

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer product={guitar} />
    </>
  );
}

export default App;
