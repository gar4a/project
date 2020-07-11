import React from "react";
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
        <Link
          to="/commandes"
          class="text-white bmem fonttitle1 float-right ml-5 "
          style={{ background: "#de2554" }}
        >
          Commander
        </Link>
      </div>
    </div>
  );
};

export default Footer;
