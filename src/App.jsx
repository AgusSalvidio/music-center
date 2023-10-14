import "./App.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Navbar from "./Components/Navbar/Navbar";

const guitar = {
  name: "Gibson SG Standard Ebony",
  image:
    "https://media.guitarcenter.com/is/image/MMGS7/L54573000002000-00-2000x2000.jpg",
  price: "$1,799.00",
  description: {
    title: "Back in Black…and Heritage Cherry!",
    body: "The Gibson SG Standard rocks the classic looks and features associated with the late 60s style SG™ models sought after by many. A rounded profile mahogany neck, bound rosewood fingerboard, long tenon 19th fret neck joint, and a solid mahogany body provide the backbone for singing sustain. The 490R and 490T Alnico 2 pickups provide the power to drive. A black, 5-ply, full-face pickguard set this SG Standard apart from others... a truly versatile classic.",
  },
};

function App() {
  return (
    <>
      <Navbar />
      <ItemDetailContainer item={guitar} />
    </>
  );
}

export default App;
