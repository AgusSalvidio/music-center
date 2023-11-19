import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import "./Checkout.css";
import Swal from "sweetalert2";
import { trackPromise } from "react-promise-tracker";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const { cart, clearCart, total, totalQuantity } = useContext(CartContext);

  const renderPurchaseOrderNotification = (anId) => {
    Swal.fire({
      title: "¡Gracias por tu compra!",
      text: `El ID de tu orden es ${anId}`,
      icon: "success",
      showCancelButton: false,
      confirmButtonColor: "#84734d",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        window.location = "/";
      }
    });
  };

  const formHandler = handleSubmit((data) => {
    const order = {
      items: cart.map((product) => ({
        id: product.item.id,
        name: product.item.name,
        quantity: product.quantity,
      })),
      total: total,
      date: new Date(),
      name: data.name,
      lastName: data.lastName,
      phone: data.phone,
      customerId: data.customerId,
      email: data.email,
    };

    trackPromise(
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
              renderPurchaseOrderNotification(docRef.id);
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error))
    );
  });

  return (
    <div className="container pt-4">
      <div className="row">
        <div className="col-12 col-lg-8">
          <h5 className="mb-3 pb-2 border-bottom">Información de Contacto</h5>
          <form>
            <div className="row g-3 py-2">
              <div className="col-6">
                <label htmlFor="" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Nombre"
                  className="form-control default"
                  name="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Nombre es requerido",
                    },
                  })}
                />
                {errors.name && (
                  <p className="error-label">{errors.name.message}</p>
                )}
              </div>
              <div className="col-6">
                <label htmlFor="" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  placeholder="Apellido"
                  className="form-control default"
                  name="lastName"
                  {...register("lastName", {
                    required: {
                      value: true,
                      message: "Apellido es requerido",
                    },
                  })}
                />
                {errors.lastName && (
                  <p className="error-label">{errors.lastName.message}</p>
                )}
              </div>
              <div className="col-6">
                <label htmlFor="" className="form-label">
                  Teléfono
                </label>
                <input
                  type="text"
                  placeholder="Teléfono"
                  className="form-control default"
                  name="phone"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Teléfono es requerido",
                    },
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Teléfono no válido",
                    },
                    minLength: {
                      value: 8,
                      message: "Teléfono debe ser mayor a 8 digitos",
                    },
                  })}
                />
                {errors.phone && (
                  <p className="error-label">{errors.phone.message}</p>
                )}
              </div>
              <div className="col-6">
                <label htmlFor="" className="form-label">
                  DNI
                </label>
                <input
                  type="text"
                  placeholder="DNI"
                  className="form-control default"
                  name="customerId"
                  {...register("customerId", {
                    required: {
                      value: true,
                      message: "Documento es requerido",
                    },
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Documento no válido",
                    },
                  })}
                />
                {errors.customerId && (
                  <p className="error-label">{errors.customerId.message}</p>
                )}
              </div>
              <div className="col-6">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control default"
                  name="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Correo es requerido",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Correo no válido",
                    },
                  })}
                />
                {errors.email && (
                  <p className="error-label">{errors.email.message}</p>
                )}
              </div>
              <div className="col-6">
                <label htmlFor="" className="form-label">
                  Confirmar Email
                </label>
                <input
                  type="email"
                  placeholder="Confirmar Email"
                  className="form-control default"
                  name="confirmationEmail"
                  {...register("confirmationEmail", {
                    required: {
                      value: true,
                      message: "Confirmar email es requerido",
                    },
                    validate: (value) =>
                      value === watch("email") || "Los emails no coinciden",
                  })}
                />
                {errors.confirmationEmail && (
                  <p className="error-label">
                    {errors.confirmationEmail.message}
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-4 d-none d-lg-block">
          <div>
            <h5 className="mb-2 pb-2 border-bottom">Resumen Carrito</h5>
            {cart.map((product) => (
              <div className="row no-gutters my-1 align-items-top border-bottom py-2">
                <div className="col-2" key={product.item.id}>
                  <img
                    src={product.item.image}
                    className="img-small-thumbnail"
                  ></img>
                </div>
                <div className="col-6 text-left py-2">
                  <small>
                    {product.item.name} (x{product.quantity})
                  </small>
                </div>
                <div className="col-4 text-right font-weight-bold py-2">
                  ${product.item.price}
                </div>
              </div>
            ))}
            <div className="col-12 align-bottom text-center py-2">
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
