import { IState } from "./../store/interfaces";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<IState> = useSelector;
