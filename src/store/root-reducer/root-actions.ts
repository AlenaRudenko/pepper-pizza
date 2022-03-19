import { TOGGLE_SORT_VISIBLE } from "./root-action-types";

export const toggleSortVisible = (value: boolean) =>
  ({
    type: TOGGLE_SORT_VISIBLE,
    payload: value,
  } as const);

export const toggleSortVisibles = () =>
  ({
    type: TOGGLE_SORT_VISIBLE,
  } as const);

export type IRootActions =
  | ReturnType<typeof toggleSortVisible>
  | ReturnType<typeof toggleSortVisibles>;
