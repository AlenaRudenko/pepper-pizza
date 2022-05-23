import { IMainPage } from "./interfaces";
import { IAction } from "./mainPageActionCreators";
import {
  SET_BASKET,
  SET_PRODUCTS,
  TOGGLE_SORT_VISIBLE,
} from "./mainPage-actions";

const INITIAL_STATE: IMainPage = {
  isActive: false,
  products: [],
  basket: [],
};

export const mainPageReducer = (
  state = INITIAL_STATE,
  action: IAction
): IMainPage => {
  switch (action.type) {
    case TOGGLE_SORT_VISIBLE:
      return { ...state, isActive: !state.isActive };
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_BASKET: {
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    }

    default:
      return state;
  }
};
