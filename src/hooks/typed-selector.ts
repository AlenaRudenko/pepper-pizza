import { IStore } from "./../store/interfaces";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<IStore> = useSelector;
