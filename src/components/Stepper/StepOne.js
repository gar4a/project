import React from "react";
import { useSelector } from "react-redux";
import Product from "../Cart/Product";

const StepOne = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div class="form-card">
      <h5 class="sub-heading">Votre panier contient :</h5>
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
