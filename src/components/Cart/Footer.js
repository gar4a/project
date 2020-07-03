import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const totalPrice = (product) => {
  return product.reduce(
    (accumulatorQuantity, currentItem) =>
      accumulatorQuantity + currentItem.quantity * currentItem.price,
    0
  );
};
const Footer = ({ product }) => {
  return (
    <div className="d-flex justify-content-end ">
      <div className="align-items-center d-flex">
        <span>
          Total price: <b>{totalPrice(product)} dt</b>
        </span>
        <Link to="/commandes" class="btn btn-success float-right ml-5 ">
          Commander
        </Link>
      </div>
    </div>
  );
};

export default Footer;
