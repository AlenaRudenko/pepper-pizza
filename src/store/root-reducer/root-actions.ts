import { IPizza } from "./../../models/pizza";
import { SET_PRODUCTS, TOGGLE_SORT_VISIBLE } from "./root-action-types";

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
export type IRootActions =
  | ReturnType<typeof toggleSortVisible>
  | ReturnType<typeof toggleSortVisibles>
  | ReturnType<typeof setProducts>;
