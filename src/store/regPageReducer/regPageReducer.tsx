import { IAction } from "../mainPageReducer/mainPageActionCreators";
import { INewUserReducer, IRegPage } from "./interfaces";

const INITIAL_STATE: INewUserReducer = {
  newUser: [],
};

export const regPageReducer = (state = INITIAL_STATE, action: IAction) => {
  return state;
};
