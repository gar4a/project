import React from "react";

import Card from "../components/Card";

import Filter from "../components/Filter";
import { useSelector } from "react-redux";

const Home = () => {
  const { productList } = useSelector(state => state.products);

  return (
    <div className="container">
      <Filter />
      <div className="row">
        {productList.map(el => (
          <Card {...el} />
        ))}
      </div>
    </div>
  );
};

export default Home;
