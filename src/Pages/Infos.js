import React, { useState, useEffect } from "react";
import _ from "lodash";
import {
  DeviceInfoSubSection,
  Path,
  ProductImages,
  DeviceHighlights,
  DevicePriceAndColors,
} from "../components";
import { useSelector, useDispatch, connect } from "react-redux";
import { useParams } from "react-router-dom";
import {
  SELECT_PRODUCT,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
} from "../constants/types";
import { getProduct } from "../actions/products";

const Infos = () => {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(params.id));
  }, [params.id]);
  const { selectedProduct, productList, loading } = useSelector(
    (state) => state.products
  );
  const { items: cartItems } = useSelector((state) => state.cart);
  const [selectedColor, setSelectedColor] = useState();
  useEffect(() => {
    if (_.isEmpty(selectedProduct)) return;
    console.log();
    setIsItemInCart(
      typeof cartItems.find(
        (el) =>
          el.id === selectedProduct.id && el.selectedColor === selectedColor
      ) === "object"
    );
  }, [selectedProduct, cartItems, selectedColor]);

  useEffect(() => {
    if (_.isEmpty(selectedProduct)) return;
    const colorArray = selectedProduct.images.map((el) => el.color);
    setColors(colorArray);
    setSelectedColor(colorArray[0]);
  }, [selectedProduct]);

  const [colors, setColors] = useState([]);

  const [isItemInCart, setIsItemInCart] = useState(false);
  if (_.isEmpty(selectedProduct) || !colors || !selectedColor) return <div />;
  const {
    brand,
    title,
    stockage,
    description,
    price,
    images,
    id,
    ecran,
    stock,
    perfor,
    audio,
    batt,
    affichage,
    se,
    photo,
    reseau,
    connec,
    capteur,
    poids,
    divers,
  } = selectedProduct;

  const onAddToCart = () => {
    dispatch({
      type: isItemInCart ? REMOVE_ITEM_FROM_CART : ADD_ITEM_TO_CART,
      payload: {
        title,
        description,
        brand,
        price,
        images: images.find((el) => el.color === selectedColor).images[0],
        quantity: 1,
        id,
        selectedColor,
      },
    });
  };

  return loading ? (
    <h1>loading</h1>
  ) : (
    <div class="container">
      <Path />
      <div class="row">
        <ProductImages
          images={
            images && images.find((el) => el.color === selectedColor)?.images
          }
          className="col-sm"
        />
        <DeviceHighlights
          brand={brand}
          title={title}
          color={selectedColor}
          className="col-sm mt-4"
          content={description}
        />
        <DevicePriceAndColors
          colors={colors}
          storageOptions={stockage}
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
        <DeviceInfoSubSection color="#de2554" title="ÉCRAN" content={ecran} />
        <DeviceInfoSubSection
          color="#007BFF"
          title="STOCKAGE"
          content={stock}
        />
        <DeviceInfoSubSection
          color="#de2554"
          title="PERFORMANCE"
          content={perfor}
        />
        <DeviceInfoSubSection color="#007BFF" title="AUDIO" content={audio} />
        <DeviceInfoSubSection color="#de2554" title="BATTERIE" content={batt} />
        <DeviceInfoSubSection
          color="#007BFF"
          title="AFFICHAGE"
          content={affichage}
        />
        <DeviceInfoSubSection
          color="#de2554"
          title="APPAREIL PHOTO"
          content={photo}
        />
        <DeviceInfoSubSection color="#007BFF" title="RÉSEAU" content={reseau} />
        <DeviceInfoSubSection
          color="#de2554"
          title="CONNECTIVITÉ"
          content={connec}
        />
        <DeviceInfoSubSection
          color="#007BFF"
          title="CAPTEURS"
          content={capteur}
        />
        <DeviceInfoSubSection
          color="#de2554"
          title="POIDS ET DIMENSIONS"
          content={poids}
        />
        <DeviceInfoSubSection
          color="#007BFF"
          title="DIVERS ET DIMENSIONS"
          content={divers}
        />
      </div>
    </div>
  );
};

export default Infos;
