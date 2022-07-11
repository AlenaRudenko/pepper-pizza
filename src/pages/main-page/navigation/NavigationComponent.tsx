import { connect } from "react-redux";
import React from "react";
import { NavButton } from "../../../components/NavButton";
import {
  sortByAll,
  sortByMeat,
  sortByVegan
} from "../../../store/mainPageReducer/mainPageActionCreators";
import SortComponent from "./SortComponent";
import "./styles.css";

export class NavigationComponent extends React.Component {
  types = ["Все", "Мясные", "Вегетарианские", "Гриль"];
  clickHendler(name: string) {
    if (name === "Все") {
      sortByAll();
    } else if (name === "Вегетарианские") {
      sortByVegan();
    } else if (name === "Мясные") {
      sortByMeat();
    }
  }
  render() {
    return (
      <div className="navigation__container">
        <div className="navigation__block">
          <div onClick={() => sortByMeat()}>Мясные</div>
          <NavButton name="Все" />
          <NavButton name="Мясные" />
        </div>
        <SortComponent />
      </div>
    );
  }
}
export const NavigationComponentContainer = connect(
  null,
  sortByMeat
)(NavigationComponent);
