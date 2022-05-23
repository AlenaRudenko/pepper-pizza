import { FC } from "react";
import "./styles.css";

interface IProps {
  countPizza: number;
}

export const CountComponent: FC<IProps> = ({ countPizza }) => {
  return countPizza >= 1 ? (
    <div className='count__container'>{countPizza}</div>
  ) : null;
};
