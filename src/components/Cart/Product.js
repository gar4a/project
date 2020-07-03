import React, { useState } from "react";
import Quantity from "./Quantity";
import { useDispatch } from "react-redux";
import { removeCart } from "../../actions/cart";

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { title, price, brand, images, description, id } = product;
  const [selectedProduct, setSelectedProduct] = useState();
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeCart({ price, id }));
  };
  return (
    <div>
      <div class="card-body">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-2 text-center">
            <img class=" img-thumbnail border-0" src={images} alt="prewiew" />
          </div>
          <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
            <div className="fonttitle">
              <h4 className="font-weight-bold">{brand}</h4>
            </div>
            <h4 class="product-name fonttitle1">
              <strong>{title}</strong>
            </h4>
            <h4>
              <small>
                {" "}
                {description.map((el) => (
                  <>
                    <h6 class=" text-uppercase">{el}</h6>
                    <hr data-content="AND" class="hr-text" />
                  </>
                ))}
              </small>
            </h4>
          </div>
          <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row align-items-center">
            <div class="col-3 col-sm-3 col-md-6 text-md-right">
              <h6>
                <strong className="d-flex justify-content-center fonttitle1">
                  {quantity * price} <span class="text-muted"> d.t x</span>
                </strong>
              </h6>
            </div>

            <div className=" col-4 col-sm-4 col-md-4">
              <Quantity onChange={setQuantity} />
            </div>

            <div class="col-2 col-sm-2 col-md-2 text-right">
              <button
                type="button"
                class="btn btn-outline-danger btn-xs"
                onClick={handleDelete}
              >
                <i class="fa fa-trash" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};
export default Product;
