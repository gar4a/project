import { SELECT_PRODUCT } from "../constants/types";
import data from "../Pages/data";

const initialState = {
  selectedProduct: {},
  productList: data
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_PRODUCT:
      return { ...state, selectedProduct: payload };

    default:
      return state;
  }
};
