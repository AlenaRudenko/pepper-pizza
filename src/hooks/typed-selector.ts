import { TypedUseSelectorHook, useSelector } from "react-redux";
import { IStore } from "../store/store";

export const useTypedSelector: TypedUseSelectorHook<IStore> = useSelector;
