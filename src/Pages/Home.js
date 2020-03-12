import React from "react";
import data from "./data";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Filter from "../components/Filter";

const Home = props => {
  return (
    <div className="container">
      <Filter />
      <div className="row">
        {data.map(el => (
          <Card
            image={el.image}
            DAS={el.DAS}
            brand={el.brand}
            title={el.title}
            price={el.price}
            colors={el.colors}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
