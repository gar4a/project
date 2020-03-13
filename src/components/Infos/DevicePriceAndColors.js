import React from "react";
import PropTypes from "prop-types";

const DevicePriceAndColors = ({
  colors,
  price,
  handleColorChange,
  storageOptions,
  inStock,
  className
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
        <div class="col row">
          {colors.map(el => (
            <button
              className="bcc2"
              onClick={() => handleColorChange(el)}
              style={{ backgroundColor: el }}
            ></button>
          ))}
        </div>
      </div>
      <hr data-content="AND" class="hr-text" />
      <div className="row">
        <div className="col fonttitle1 ">Mémoire</div>
        <div class="col">
          {storageOptions.map(el => (
            <button className="bmem">{el}</button>
          ))}
        </div>
      </div>
      <hr data-content="AND" class="hr-text" />
      <div className="mt-5">
        <center>
          <button class="addcart">
            <i class="fa fa-shopping-cart fa-2x mr-3" aria-hidden="true"></i>
            <a className="fonttitle1">Ajouter au panier</a>
          </button>
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
  className: PropTypes.string
};

export default DevicePriceAndColors;
