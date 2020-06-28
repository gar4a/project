import api from "../api";
import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SELECT_PRODUCT,
  LOADING,
} from "../constants/types/product";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await api.get("/Articles");
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_FAILURE, error });
  }
};
export const getProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await api.get(`/Articles/${id}`);
    dispatch({ type: SELECT_PRODUCT, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_FAILURE, error });
  }
};
