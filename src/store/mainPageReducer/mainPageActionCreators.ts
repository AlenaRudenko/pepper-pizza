import { IBasketPizza, IPizza } from "./interfaces";

import {
  SET_BASKET,
  SET_PRODUCTS,
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
