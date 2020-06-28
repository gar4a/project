import api from "../api";
import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  INCREMENT_CARD_ITEM,
  DECREMENT_CARD_ITEM,
} from "../constants/types/cart";

export const addCart = () => async (dispatch) => {
  try {
    const response = await api.get("/Articles");
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_FAILURE, error });
  }
};
