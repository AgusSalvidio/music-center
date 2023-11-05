import React from "react";
import { useState } from "react";
import "./QuantityCounter.css";

const QuantityCounter = ({ start, stock, addProduct }) => {
  const [quantityCounter, setQuantityCounter] = useState(start);

  const increaseCounter = () => {
    if (quantityCounter < stock) {
      setQuantityCounter(quantityCounter + 1);
    }
  };
  const decreaseCounter = () => {
    if (quantityCounter > start) {
      setQuantityCounter(quantityCounter - 1);
    }
  };

  return (
    <>
      <div className="d-flex">
        <strong className="item-quantity">Cantidad</strong>
        <div className="px-2">
          <button
            id="decrease-button"
            className="btn btn-md btn-custom shadow-0 me-1"
            onClick={decreaseCounter}
          >
            -
          </button>
          <strong className="px-2">{quantityCounter}</strong>
          <button
            id="increase-button"
            className="btn btn-md btn-custom shadow-0 me-1"
            onClick={increaseCounter}
          >
            +
          </button>
        </div>
      </div>
      <div className="pt-3">
        <button
          onClick={() => addProduct(quantityCounter)}
          className="btn btn-custom shadow-0 me-1 w-100"
        >
          Agregar al Carrito
        </button>
      </div>
    </>
  );
};

export default QuantityCounter;
