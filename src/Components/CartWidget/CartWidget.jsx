import React from "react";

const CartWidget = () => {
  return (
    <a id="cart" class="nav-link " href="#">
      <i class="fa-solid fa-cart-shopping"></i>
      <span id="cart-item-count" class="px-1">
        5
      </span>
    </a>
  );
};

export default CartWidget;
