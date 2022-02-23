import React from "react";
import { NavButton } from "../../../components/NavButton";
import "./styles.css";

export class NavigationComponent extends React.Component {
  render() {
    return (
      <div className='navigation__container'>
        <NavButton name='Все' />
        <NavButton name='Мясные' />
        <NavButton name='Вегетарианские' />
        <NavButton name='Гриль' />
        <NavButton name='Острые' />
        <NavButton name='Закрытые' />
      </div>
    );
  }
}
