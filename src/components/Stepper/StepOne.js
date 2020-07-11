import React from "react";
import { useSelector } from "react-redux";

const StepOne = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div class="form-card">
      <h5 class="sub-heading">Votre panier contient :</h5>
      {cart.items.map((el) => (
        <div>{el.title}</div>
      ))}
      <div class="row px-1 radio-group"></div>
    </div>
  );
};

export default StepOne;
