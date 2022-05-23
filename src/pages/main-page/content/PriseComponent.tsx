import { FC } from "react";
import { IPizza } from "../../../store/mainPageReducer/interfaces";

import "./styles.css";
interface IProps {
  price: IPizza["price"];
  currentSize: string;
}
export const PriseComponent: FC<IProps> = ({ price, currentSize }) => {
  const sm = price / 26;
  const sum = sm * +currentSize;
  console.log("sum", sum);
  console.log("price", price);
  console.log("sm", sm);
  console.log("currentSize", currentSize);
  return <div className='prise__container'> {Math.ceil(sum)} руб</div>;
};
