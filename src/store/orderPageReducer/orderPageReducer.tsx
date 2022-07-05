import { IAction } from "../mainPageReducer/mainPageActionCreators";
import { IOrderState } from "./interfaces";
import { OPEN_ORDER_PAGE } from "./orderPage-actions";

const INITIAL_STATE: IOrderState = {
  isActive: false,
};

export const orderPageReducer = (state = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case OPEN_ORDER_PAGE: {
      return {
        ...state,
        isActive: !state.isActive,
      };
    }
    default:
      return state;
  }
};
