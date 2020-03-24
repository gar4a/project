import React, { useState, useEffect } from "react";
import _ from "lodash";
import {
  DeviceInfoSubSection,
  Path,
  ProductImages,
  DeviceHighlights,
  DevicePriceAndColors
} from "../components";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  SELECT_PRODUCT,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART
} from "../constants/types";

const Infos = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, productList } = useSelector(state => state.products);
  const { items: cartItems } = useSelector(state => state.cart);
  useEffect(() => {
    dispatch({
      type: SELECT_PRODUCT,
      payload: productList.find(el => el.id.toString() === params.id)
    });
  }, [params]);

  useEffect(() => {
    if (_.isEmpty(selectedProduct)) return;

    setIsItemInCart(
      typeof cartItems.find(el => el.id === selectedProduct.id) === "object"
    );
  }, [selectedProduct, cartItems]);

  useEffect(() => {
    if (_.isEmpty(selectedProduct)) return;
    const colorArray = selectedProduct.images.map(el => el.color);
    setColors(colorArray);
    setSelectedColor(colorArray[0]);
  }, [selectedProduct]);

  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState();
  const [isItemInCart, setIsItemInCart] = useState(false);
  if (_.isEmpty(selectedProduct) || !colors || !selectedColor) return <div />;
  const { brand, title, capacity, desc, price, images } = selectedProduct;

  const onAddToCart = () => {
    dispatch({
      type: isItemInCart ? REMOVE_ITEM_FROM_CART : ADD_ITEM_TO_CART,
      payload: selectedProduct
    });
  };

  return (
    <div class="container">
      <Path />
      <div class="row">
        <ProductImages
          images={images.find(el => el.color === selectedColor).images}
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
          handleAddToCart={onAddToCart}
          isItemInCart={isItemInCart}
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
