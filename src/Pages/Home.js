import React, { useEffect } from "react";

import Card from "../components/Card";
import { getProducts } from "../actions/products";
import Filter from "../components/Filter";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const { productList } = useSelector((state) => state.products);
  return (
    <div className="container">
      <Filter />
      <div className="row">
        {productList.map((el) => (
          <Card {...el} />
        ))}
      </div>
    </div>
  );
};
export default Home;
