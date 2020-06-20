import api from "../api";
import {
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from "../constants/types";

export const signin = (username, password, history) => async (dispatch) => {
  try {
    const response = await api.post("/Clients/login", { username, password });
    dispatch({ type: SIGNIN_SUCCESS, payload: response.data });
    history.push("/home");
  } catch (error) {
    dispatch({ type: SIGNIN_FAILURE, error });
  }
};
export const signout = (history) => async (dispatch, getState) => {
  try {
    const state = getState();
    const token = state.user.user.id;
    const config = {
      headers: {
        Authorization: token,
      },
    };
    await api.post("/Clients/logout", undefined, config);
    dispatch({ type: LOGOUT_SUCCESS });
    history.push("/login");
  } catch (error) {
    dispatch({ type: LOGOUT_FAILURE, error });
  }
};
