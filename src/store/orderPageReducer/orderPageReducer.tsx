import { IOrderState } from "./interfaces";
import {
  DELETE_ORDER_PIZZA,
  OPEN_ORDER_PAGE,
  SET_BASKET,
} from "./orderPage-actions";
import { TOrderPageAction } from "./orderPageActionCreators";

const INITIAL_STATE: IOrderState = {
  isActive: false,
  basket: [],
  fullPrice: 0,
};

export const orderPageReducer = (
  state = INITIAL_STATE,
  action: TOrderPageAction
): IOrderState => {
  switch (action.type) {
    case OPEN_ORDER_PAGE: {
      return {
        ...state,
        isActive: !state.isActive,
      };
    }
    case SET_BASKET: {
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    }
    case DELETE_ORDER_PIZZA: {
      return {
        ...state,
        basket: state.basket.filter(
          (item) => item.uniqueKey !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};
