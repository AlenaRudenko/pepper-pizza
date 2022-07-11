import { IBasketPizza, IPizza } from "./interfaces";

import {
  SET_BASKET,
  SET_PRODUCTS,
  SORT_BY_CATEGORY,
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
export const toggleSortVisible = (value: boolean) =>
  ({
    type: TOGGLE_SORT_VISIBLE,
    payload: value,
  } as const);

export const toggleSortVisibles = () =>
  ({
    type: TOGGLE_SORT_VISIBLE,
  } as const);

export const setProducts = (pizzas: IPizza[]) =>
  ({
    type: SET_PRODUCTS,
    payload: pizzas,
  } as const);
export const setBasket = (pizza: IBasketPizza) =>
  ({
    type: SET_BASKET,
    payload: pizza,
  } as const);
export const sortByRating = () =>
  ({
    type: SORT_BY_RATING,
  } as const);
export const sortByTitleUp = () =>
  ({
    type: SORT_BY_TITLE_UP,
  } as const);
export const sortByTitleDown = () =>
  ({
    type: SORT_BY_TITLE_DOWN,
  } as const);
export const sortByPriceHigh = () =>
  ({
    type: SORT_BY_PRICE_HIGH,
  } as const);
export const sortByPriceLow = () =>
  ({
    type: SORT_BY_PRICE_LOW,
  } as const);
export const sortByCategory = (category: number) =>
  ({
    type: SORT_BY_CATEGORY,
    payload: category,
  } as const);

export type TMainPageActions =
  | ReturnType<typeof sortByPriceLow>
  | ReturnType<typeof sortByPriceHigh>
  | ReturnType<typeof sortByTitleDown>
  | ReturnType<typeof sortByTitleUp>
  | ReturnType<typeof sortByRating>
  | ReturnType<typeof setBasket>
  | ReturnType<typeof setProducts>
  | ReturnType<typeof toggleSortVisibles>
  | ReturnType<typeof toggleSortVisible>
  | ReturnType<typeof sortByCategory>;
