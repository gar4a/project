import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DevicePriceAndColors = ({
  colors,
  price,
  handleColorChange,
  storageOptions,
  inStock,
  className,
  handleAddToCart,
  isItemInCart,
}) => {
  return (
    <div className={className}>
      <h2 className="price">{price} dt</h2>
      <div className="mt-3">
        <i class="fa fa-shopping-basket" aria-hidden="true">
          <a className="fonttitle1 ml-2">
            {inStock ? "En Stock" : "Non disponible"}
          </a>
        </i>
      </div>
      <div class="row mt-4">
        <div class="col fonttitle1">Couleurs</div>
        <div class="col-7 row">
          {colors.map((el) => (
            <button
              className="bcc2"
              onClick={() => handleColorChange(el)}
              style={{ backgroundColor: el }}
            ></button>
          ))}
        </div>
      </div>
      <hr data-content="AND" class="hr-text" />
      {storageOptions[0] && (
        <div>
          <div className="row">
            <div className="col fonttitle1 ">Mémoire</div>
            <div class="col-7">
              {storageOptions.map((el) => (
                <button className="bmem">{el}</button>
              ))}
            </div>
          </div>
          <div>
            <hr data-content="AND" class="hr-text" />
          </div>
        </div>
      )}
      <div className="mt-5">
        <center>
          <button
            class={`addcart ${isItemInCart && "bg-primary"}`}
            onClick={handleAddToCart}
          >
            <i
              class={`fa ${
                isItemInCart ? "fa-shopping-cart" : "fa-cart-plus"
              }  fa-2x mr-3`}
              aria-hidden="true"
            ></i>
            <a className="fonttitle1">
              {isItemInCart ? "Supprimer du panier" : "Ajouter au panier"}{" "}
            </a>
          </button>
          <Link to="/cart">
            <button class="addcart fa fa-shopping-cart fa-2x text-black bg-primary">
              <a class="fonttitle1"> Accéder au Panier</a>
            </button>
          </Link>
        </center>
      </div>
    </div>
  );
};

DevicePriceAndColors.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  storageOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleColorChange: PropTypes.func.isRequired,
  inStock: PropTypes.bool.isRequired,
  className: PropTypes.string,
  handleAddToCart: PropTypes.func.isRequired,
  isItemInCart: PropTypes.bool.isRequired,
};

export default DevicePriceAndColors;
