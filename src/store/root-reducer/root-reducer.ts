import { IRootState } from "./interfaces";
import { TOGGLE_SORT_VISIBLE } from "./root-action-types";
import { IRootActions } from "./root-actions";

const INITIAL_STATE: IRootState = {
  isActive: false,
};

export default function rootReducer(
  state = INITIAL_STATE,
  action: IRootActions
) {
  switch (action.type) {
    case TOGGLE_SORT_VISIBLE:
      return { ...state, isActive: !state.isActive };
    default:
      return state;
  }
}
