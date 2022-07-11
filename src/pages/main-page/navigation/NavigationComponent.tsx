import React from "react";
import {
  INavigationDispatchProps,
  INavigationStoreProps,
} from "./NavigationComponentContainer";

import SortComponent from "./SortComponent";
import "./styles.css";

type IProps = INavigationStoreProps & INavigationDispatchProps;

export class NavigationComponent extends React.Component<IProps> {
  types: { [key: number]: string } = {
    1: "Мясные",
    2: "Вегетарианские",
    3: "Гриль",
    4: "Острые",
    5: "Закрытые",
  };

  render() {
    return (
      <div className='navigation__container'>
        <div className='navigation__block'>
          {this.props.categories.map((a) => (
            <button>{this.types[a]}</button>
          ))}
        </div>
        <SortComponent />
      </div>
    );
  }
}
