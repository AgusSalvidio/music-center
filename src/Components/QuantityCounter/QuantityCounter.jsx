import React from "react";
import { useState, useEffect } from "react";
import "./QuantityCounter.css";

const QuantityCounter = () => {
  const [quantityCounter, setQuantityCounter] = useState(1);

  useEffect(() => {
    let decreaseButton = document.querySelector("#decrease-button");
    if (quantityCounter == 1) {
      decreaseButton.disabled = true;
    } else decreaseButton.disabled = false;
  }, [quantityCounter]);

  const increaseCounter = () => {
    setQuantityCounter(quantityCounter + 1);
  };
  const decreaseCounter = () => {
    setQuantityCounter(quantityCounter - 1);
  };

  return (
    <>
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
    </>
  );
};

export default QuantityCounter;
