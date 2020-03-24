import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  INCREMENT_CARD_ITEM,
  DECREMENT_CARD_ITEM
} from "../constants/types";

const initialState = {
  totalPrice: 0,
  items: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        items: [...state.items, { ...payload, quantity: 1 }],
        totalPrice: state.totalPrice + payload.price
      };

    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        items: state.items.filter(el => el.id !== payload.id),
        totalPrice: state.totalPrice - payload.price
      };

    case DECREMENT_CARD_ITEM:
      const index1 = state.items.find(el => el.id === payload.id);
      if (index1 === -1) return state;
      const itemQuantity1 = state.items[index1].quantity;
      if (itemQuantity1 <= 1) return state;
      const newItemsArray1 = [
        ...state.items,
        ([index1] = { ...state.items[index1], quantity: itemQuantity1 - 1 })
      ];
      return {
        ...state,
        items: newItemsArray1,
        totalPrice: state.totalPrice - payload.price
      };

    case INCREMENT_CARD_ITEM:
      const index2 = state.items.find(el => el.id === payload.id);
      if (index2 === -1) return state;
      const itemQuantity2 = state.items[index2].quantity;
      const newItemsArray2 = [
        ...state.items,
        ([index2] = { ...state.items[index2], quantity: itemQuantity2 + 1 })
      ];

      return {
        ...state,
        items: newItemsArray2,
        totalPrice: state.totalPrice + payload.price
      };

    default:
      return state;
  }
};
