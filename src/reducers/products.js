import {
  SELECT_PRODUCT,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  LOADING,
} from "../constants/types";
import data from "../Pages/data";

const initialState = {
  selectedProduct: {},
  productList: [],
  loading: false,
};

export default (state = initialState, { type, payload, error }) => {
  switch (type) {
    case SELECT_PRODUCT:
      return { ...state, selectedProduct: payload, loading: false };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, productList: payload, loading: false };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, error, loading: false };
    case LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};
