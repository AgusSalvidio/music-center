import React from "react";

const CartWidget = () => {
  return (
    <a id="cart" className="nav-link " href="#">
      <i className="fa-solid fa-cart-shopping"></i>
      <span id="cart-item-count" className="px-1">
        5
      </span>
    </a>
  );
};

export default CartWidget;
