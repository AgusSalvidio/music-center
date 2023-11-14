import { useState, createContext, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [email, setEmail] = useState("");
  const [confirmationEmail, setConfirmationEmail] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  const { cart, clearCart, total, totalQuantity } = useContext(CartContext);

  const formHandler = (event) => {
    event.preventDefault();
    if (
      !name ||
      !lastName ||
      !phone ||
      !customerId ||
      !email ||
      !confirmationEmail
    ) {
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
      customerId,
      email,
    };

    Promise.all(
      order.items.map(async (orderProduct) => {
        const productRef = doc(db, "inventory", orderProduct.id);
        const docProduct = await getDoc(productRef);
        const currentStock = docProduct.data().stock;
        await updateDoc(productRef, {
          stock: currentStock - orderProduct.quantity,
        });
      })
    )
      .then(() => {
        addDoc(collection(db, "orders"), order)
          .then((docRef) => {
            setOrderId(docRef.id);
            clearCart();
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container pt-4">
      <div className="row">
        <div className="col-12 col-lg-8">
          <h5 class="mb-3 pb-2 border-bottom">Información de Contacto</h5>
          <form>
            <div className="row g-3 py-2">
              <div className="col-6">
                <label htmlFor="name" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Nombre"
                  required="required"
                  className="form-control default"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-6">
                <label htmlFor="lastName" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  placeholder="Apellido"
                  required="required"
                  className="form-control default"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="col-6">
                <label htmlFor="" className="form-label">
                  Teléfono
                </label>
                <input
                  type="text"
                  placeholder="Teléfono"
                  required="required"
                  className="form-control default"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="col-6">
                <label htmlFor="" className="form-label">
                  DNI
                </label>
                <input
                  type="text"
                  placeholder="DNI"
                  required="required"
                  className="form-control default"
                  onChange={(e) => setCustomerId(e.target.value)}
                />
              </div>
              <div className="col-6">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  required="required"
                  className="form-control default"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-6">
                <label htmlFor="" className="form-label">
                  Confirmar Email
                </label>
                <input
                  type="email"
                  placeholder="Confirmar Email"
                  required="required"
                  className="form-control default"
                  onChange={(e) => setConfirmationEmail(e.target.value)}
                />
              </div>
              {error && <p className="error-label">{error}</p>}
              {orderId && (
                <strong>
                  Gracias por tu compra, tu numero de compra es {orderId}
                </strong>
              )}
            </div>
          </form>
        </div>
        <div className="col-lg-4 d-none d-lg-block">
          <div>
            <h5 class="mb-2 pb-2 border-bottom">Resumen Carrito</h5>
            {cart.map((product) => (
              <div className="row no-gutters my-1 align-items-top border-bottom py-2">
                <div className="col-2" key={product.item.id}>
                  <img src={product.item.image} className="img-small-thumbnail"></img>
                </div>
                <div className="col-6 text-left py-2">
                  <small>
                    {product.item.name} (x{product.quantity})
                  </small>
                </div>
                <div class="col-4 text-right font-weight-bold py-2">
                  ${product.item.price}
                </div>
              </div>
            ))}
            <div class="col-12 align-bottom text-center py-2">
              <button
                className="btn btn-custom shadow-0 me-1 w-50"
                type="submit"
                onClick={formHandler}
              >
                Confirmar compra
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
