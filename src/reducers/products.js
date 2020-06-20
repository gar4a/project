import { SELECT_PRODUCT, FETCH_PRODUCTS_SUCCESS } from "../constants/types";
import data from "../Pages/data";

const initialState = {
  selectedProduct: {},
  productList: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_PRODUCT:
      return { ...state, selectedProduct: payload };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, productList: payload };
    default:
      return state;
  }
};
