import { IBasketPizza, IPizza } from "./interfaces";

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

export interface IAction {
  type: string;
  payload?: any;
}
export const toggleSortVisible = (value: boolean) => ({
  type: TOGGLE_SORT_VISIBLE,
  payload: value,
});

export const toggleSortVisibles = () => ({
  type: TOGGLE_SORT_VISIBLE,
});

export const setProducts = (pizzas: IPizza[]) => ({
  type: SET_PRODUCTS,
  payload: pizzas,
});
export const setBasket = (pizza: IBasketPizza) => {
  return {
    type: SET_BASKET,
    payload: pizza,
  };
};
export const sortByRating = () => {
  return {
    type: SORT_BY_RATING,
  };
};
export const sortByTitleUp = () => {
  return {
    type: SORT_BY_TITLE_UP,
  };
};
export const sortByTitleDown = () => {
  return {
    type: SORT_BY_TITLE_DOWN,
  };
};
export const sortByPriceHigh = () => {
  return {
    type: SORT_BY_PRICE_HIGH,
  };
};
export const sortByPriceLow = () => {
  return {
    type: SORT_BY_PRICE_LOW,
  };
};
