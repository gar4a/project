import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Navbar, Product, Footer } from "../components/Cart/";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="container mt-5 ">
      <Navbar />
      <div class="card shopping-cart">
        {cart.items.map((el) => (
          <Product product={el} key={el.id} />
        ))}
      </div>
      <div class="card-footer">
        <Footer />
      </div>
    </div>
  );
};
export default ShoppingCart;
