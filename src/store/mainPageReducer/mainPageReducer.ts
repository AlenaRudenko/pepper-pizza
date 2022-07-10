import { IMainPage } from "./interfaces";
import { IAction } from "./mainPageActionCreators";
import {
  SET_BASKET,
  SET_PRODUCTS,
  SORT_BY_PRICE_HIGH,
  SORT_BY_PRICE_LOW,
  SORT_BY_RATING,
  SORT_BY_TITLE_DOWN,
  SORT_BY_TITLE_UP,
  TOGGLE_SORT_VISIBLE,
} from "./mainPage-actions";

const INITIAL_STATE: IMainPage = {
  isActive: false,
  products: [],
  basket: [],
  count: 0,
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
        count: state.basket.length,
      };
    }
    case SORT_BY_RATING: {
      const ratingCopy = state.products.map((a) => a);
      return {
        ...state,
        products: ratingCopy.sort((a, b) => (a.rating > b.rating ? -1 : 1)),
      };
    }
    case SORT_BY_TITLE_UP: {
      const titleCopy = state.products.map((a) => a);
      return {
        ...state,
        products: titleCopy.sort((a, b) => (a.title > b.title ? 1 : -1)),
      };
    }
    case SORT_BY_TITLE_DOWN: {
      const titleCopy = state.products.map((a) => a);
      return {
        ...state,
        products: titleCopy.sort((a, b) => (a.title > b.title ? -1 : 1)),
      };
    }
    case SORT_BY_PRICE_HIGH: {
      const priceCopy = state.products.map((a) => a);
      return {
        ...state,
        products: priceCopy.sort((a, b) => (a.price > b.price ? 1 : -1)),
      };
    }
    case SORT_BY_PRICE_LOW: {
      const priceCopy = state.products.map((a) => a);
      return {
        ...state,
        products: priceCopy.sort((a, b) => (a.price > b.price ? -1 : 1)),
      };
    }
    default:
      return state;
  }
};
