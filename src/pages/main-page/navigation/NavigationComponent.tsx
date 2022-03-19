import React from "react";
import { NavButton } from "../../../components/NavButton";
import SortComponent from "./SortComponent";
import "./styles.css";

export class NavigationComponent extends React.Component {
  render() {
    return (
      <div className='navigation__container'>
        <div className='navigation__block'>
          <NavButton name='Все' />
          <NavButton name='Мясные' />
          <NavButton name='Вегетарианские' />
          <NavButton name='Гриль' />
          <NavButton name='Острые' />
          <NavButton name='Закрытые' />
        </div>
        <SortComponent />
      </div>
    );
  }
}
