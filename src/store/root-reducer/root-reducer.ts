import { IRootState } from "./interfaces";
import { SET_PRODUCTS, TOGGLE_SORT_VISIBLE } from "./root-action-types";
import { IRootActions } from "./root-actions";

const INITIAL_STATE: IRootState = {
  isActive: false,
  products: [],
};

export default function rootReducer(
  state = INITIAL_STATE,
  action: IRootActions
) {
  switch (action.type) {
    case TOGGLE_SORT_VISIBLE:
      return { ...state, isActive: !state.isActive };
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
}
