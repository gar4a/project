import React, { useState } from "react";
import Quantity from "./Quantity";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <div class="card-body">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-2 text-center">
            <img
              class="img-responsive"
              src="http://placehold.it/120x80"
              alt="prewiew"
              width="120"
              height="80"
            />
          </div>
          <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
            <h4 class="product-name">
              <strong>Product Name</strong>
            </h4>
            <h4>
              <small>Product description</small>
            </h4>
          </div>
          <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row align-items-center">
            <div class="col-3 col-sm-3 col-md-6 text-md-right">
              <h6>
                <strong className="d-flex justify-content-center">
                  {quantity * 25} <span class="text-muted">x</span>
                </strong>
              </h6>
            </div>

            <div className="quantity">
              <Quantity onChange={setQuantity} />
            </div>

            <div class="col-2 col-sm-2 col-md-2 text-right">
              <button type="button" class="btn btn-outline-danger btn-xs">
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
