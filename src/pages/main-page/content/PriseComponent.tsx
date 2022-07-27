import { FC } from "react";
import { IPizza } from "../../../store/mainPageReducer/interfaces";

import "./styles.css";
interface IProps {
  price: IPizza["price"];
}
export const PriseComponent: FC<IProps> = ({ price }) => {
  return <div className='prise__container'> {price} руб</div>;
};
