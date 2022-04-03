import { IPizza } from "../../models/pizza";

export interface IRootState {
  isActive: boolean;
  products: IPizza[];
}
