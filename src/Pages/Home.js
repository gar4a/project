import React, { useEffect } from "react";

import Card from "../components/Card";
import { getProducts } from "../actions/products";
import Filterr from "../components/Filterr";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const { productList } = useSelector((state) => state.products);
  return (
    <div className="d-flex">
      <div className="col-12 col-lg-2">
        <Filterr />
      </div>

      <div className="col-12 col-lg-8">
        <div className="row">
          {productList.map((el) => (
            <Card {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
