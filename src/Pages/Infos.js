import React, { useState } from "react";

import data from "../Pages/data";
import {
  DeviceInfoSubSection,
  Path,
  ProductImages,
  DeviceHighlights,
  DevicePriceAndColors
} from "../components";
const product = data[0];

const Infos = () => {
  const { brand, title, capacity, desc, price, colors, image } = product;
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  return (
    <div class="container">
      <Path />
      <div class="row">
        <ProductImages
          images={Object.keys(image).map(el => image[el])}
          className="col-sm"
        />
        <DeviceHighlights
          brand={brand}
          title={title}
          className="col-sm mt-4"
          content={["One", "Two", "Three"]}
        />
        <DevicePriceAndColors
          colors={colors}
          storageOptions={["128 Go", "256 Go"]}
          price={price}
          handleColorChange={setSelectedColor}
          className="col-sm mt-4"
          inStock
        />
      </div>
      <div className="mt-5">
        <p class="subtitle fancy fonttitle1 mb-5">
          <span>Fiche Technique</span>
        </p>
        <DeviceInfoSubSection
          color="orange"
          title="CARACTÉRISTIQUES TECHNIQUES"
          content={[
            "This is the first item",
            "This is the second item",
            "This is the third item"
          ]}
        />
        <DeviceInfoSubSection
          color="blue"
          title="AFFICHAGE"
          content={[
            "This is the first item",
            "This is the second item",
            "This is the third item"
          ]}
        />
        <DeviceInfoSubSection
          color="black"
          title="ENTRÉES & SORTIES"
          content={[
            "This is the first item",
            "This is the second item",
            "This is the third item"
          ]}
        />
        <DeviceInfoSubSection
          color="yellow"
          title="MULTIMÉDIA"
          content={[
            "This is the first item",
            "This is the second item",
            "This is the third item"
          ]}
        />
        <DeviceInfoSubSection
          color="red"
          title="COMMUNICATION"
          content={[
            "This is the first item",
            "This is the second item",
            "This is the third item"
          ]}
        />
        <DeviceInfoSubSection
          color="pink"
          title="ALIMENTATION"
          content={[
            "This is the second item",
            "This is the first item",
            "This is the first item",
            "This is the third item"
          ]}
        />
        <DeviceInfoSubSection
          color="lightblue"
          title="DIMENSIONS"
          content={[
            "This is the first item",
            "This is the second item",
            "This is the first item",
            "This is the second item",
            "This is the third item"
          ]}
        />
      </div>
    </div>
  );
};

export default Infos;
