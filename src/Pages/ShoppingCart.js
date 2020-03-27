import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Navbar, Product, Footer } from "../components/Cart/";

const ShoppingCart = () => {
  return (
    <div className="container mt-5 ">
      <Navbar />
      <div class="card shopping-cart">
        <Product />
      </div>
      <div class="card-footer">
        <Footer />
      </div>
    </div>
  );
};
export default ShoppingCart;
