import { IBasket } from "./interfaces";
import {
  DELETE_ORDER_PIZZA,
  OPEN_ORDER_PAGE,
  SET_BASKET,
} from "./orderPage-actions";

export const openOrderPage = () =>
  ({
    type: OPEN_ORDER_PAGE,
  } as const);
export const setBasket = (value: IBasket) =>
  ({
    type: SET_BASKET,
    payload: value,
  } as const);

export const deleteOrderPizza = (uniqueKey: IBasket["uniqueKey"]) =>
  ({
    type: DELETE_ORDER_PIZZA,
    payload: uniqueKey,
  } as const);
export type TOrderPageAction =
  | ReturnType<typeof setBasket>
  | ReturnType<typeof openOrderPage>
  | ReturnType<typeof deleteOrderPizza>;
