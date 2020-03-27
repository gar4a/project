import React from "react";
import Navbar from "../components/Cart/Navbar";
import Product from "../components/Cart/Product";
import { Footer } from "../components/Cart";

export const ShoppingCart = () => {
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
