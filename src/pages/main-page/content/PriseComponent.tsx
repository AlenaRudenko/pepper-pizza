import { FC } from "react";
import { IPizza } from "../../../models/pizza";
import "./styles.css";
interface IProps {
  price: IPizza["price"];
}

export const PriseComponent: FC<IProps> = ({ price }) => {
  return <div className='prise__container'>от {price} руб</div>;
};
