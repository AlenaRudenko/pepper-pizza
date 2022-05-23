import { FC, useState } from "react";
import { CountComponent } from "./CountComponent";
import "./styles.css";

interface IProps {
  choosePizza: () => void;
}

export const BasketComponent: FC<IProps> = ({ choosePizza }) => {
  return (
    <div
      className={`pizzaBacket__container ${
        "" ? "pizzaBacket__container--active" : ""
      }`}
      onClick={() => {
        choosePizza();
      }}
    >
      <span>+ Добавить</span>
      {/* <CountComponent countPizza={count} /> */}
    </div>
  );
};
