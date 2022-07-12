import { IMainPage } from "./interfaces";
import { TMainPageActions } from "./mainPageActionCreators";
import {
  SET_BASKET,
  SET_PRODUCTS,
  SORT_BY_CATEGORY,
  SORT_BY_PRICE_HIGH,
  SORT_BY_PRICE_LOW,
  SORT_BY_RATING,
  SORT_BY_TITLE_DOWN,
  SORT_BY_TITLE_UP,
  TOGGLE_SORT_VISIBLE
} from "./mainPage-actions";

const INITIAL_STATE: IMainPage = {
  isActive: false,
  products: [],
  basket: [],
  count: 0,
  categories: []
};

export const mainPageReducer = (
  state = INITIAL_STATE,
  action: TMainPageActions
): IMainPage => {
  switch (action.type) {
    case TOGGLE_SORT_VISIBLE:
      return { ...state, isActive: !state.isActive };
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        categories: [...new Set(action.payload.map((a) => a.category).sort())]
      };
    case SET_BASKET: {
      return {
        ...state,
        basket: [...state.basket, action.payload],
        count: state.basket.length
      };
    }
    case SORT_BY_RATING: {
      return {
        ...state,
        products: [...state.products].sort((a, b) =>
          a.rating > b.rating ? -1 : 1
        )
      };
    }
    case SORT_BY_TITLE_UP: {
      return {
        ...state,
        products: [...state.products].sort((a, b) =>
          a.title > b.title ? 1 : -1
        )
      };
    }
    case SORT_BY_TITLE_DOWN: {
      return {
        ...state,
        products: [...state.products].sort((a, b) =>
          a.title > b.title ? -1 : 1
        )
      };
    }
    case SORT_BY_PRICE_HIGH: {
      return {
        ...state,
        products: [...state.products].sort((a, b) =>
          a.price > b.price ? 1 : -1
        )
      };
    }
    case SORT_BY_PRICE_LOW: {
      return {
        ...state,
        products: [...state.products].sort((a, b) =>
          a.price > b.price ? -1 : 1
        )
      };
    }
    case SORT_BY_CATEGORY: {
      const copy = state.products.map((a) => a);
      return {
        ...state,
        products: copy.filter((a) => a.category === action.payload)
      };
    }
    default:
      return state;
  }
};
