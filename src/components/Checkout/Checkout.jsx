import { useState, createContext, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmationEmail, setConfirmationEmail] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  const { cart, clearCart, total, totalQuantity } = useContext(CartContext);

  const formHandler = (event) => {
    event.preventDefault();
    if (!name || !lastName || !phone || !email || !confirmationEmail) {
      setError("Por favor completa todos los datos!");
      return;
    }

    if (email != confirmationEmail) {
      setError("Los campos del email no coinciden");
      return;
    }

    const order = {
      items: cart.map((product) => ({
        id: product.item.id,
        name: product.item.name,
        quantity: product.quantity,
      })),
      total: total,
      date: new Date(),
      name,
      lastName,
      phone,
      email,
    };
    addDoc(collection(db, "orders"), order)
      .then((docRef) => {
        setOrderId(docRef.id);
        clearCart();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={formHandler}>
        {cart.map((product) => (
          <div key={product.item.id}>
            <p>
              {product.item.name} x {product.quantity}
            </p>
            <p>${product.item.price}</p>
            <hr></hr>
          </div>
        ))}
        <div>
          <label htmlFor="name">Nombre</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Apellido</label>
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Teléfono</label>
          <input type="text" onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Confirmar Email</label>
          <input
            type="email"
            onChange={(e) => setConfirmationEmail(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Confirmar compra</button>
        {orderId && (
          <strong>
            Gracias por tu compra, tu numero de compra es {orderId}
          </strong>
        )}
      </form>
    </div>
  );
};

export default Checkout;
