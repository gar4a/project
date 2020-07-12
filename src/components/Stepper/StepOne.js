import React from "react";
import { useSelector } from "react-redux";
import Product from "../Cart/Product";

const StepOne = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div class="form-card mt-5 mb-5">
      <h1 class="sub-heading fonttitle1">Votre panier contient :</h1>
      {cart.items.map((el) => (
        <div className="title">
          <hr data-content="AND" class="hr-text" />
          {el.brand} {el.title} {el.selectedColor}
          <hr data-content="AND" class="hr-text" />
          {el.totalprice}
        </div>
      ))}
      <div class="row px-1 radio-group"></div>
    </div>
  );
};

export default StepOne;
