import { FC } from "react";

import { CountComponent } from "./CountComponent";
import "./styles.css";

interface IProps {
  choosePizza: () => any;
  count: number;
}

export const BasketComponent: FC<IProps> = ({ choosePizza, count }) => {
  return (
    <div
      className={`pizzaBacket__container ${
        "" ? "pizzaBacket__container--active" : ""
      }`}
      onClick={() => choosePizza()}
    >
      <span>+ Добавить</span>
      <CountComponent count={count} />
    </div>
  );
};
