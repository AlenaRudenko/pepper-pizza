import React, { Component } from "react";
import BasketComponent from "./BasketComponent";
import DicriptionComponent from "./DiscriptionComponent";
import PriseComponent from "./PriseComponent";
import "./styles.css";

interface IProps {
  name: string;
}

export class PizzaComponent extends Component<IProps> {
  render() {
    return (
      <div className='pizza__container'>
        <img src={require("../../../images/cheezeburger.png")} alt='' />
        <div className='pizza__content'>
          <h3>{this.props.name}</h3>
        </div>
        <DicriptionComponent />
        <div className='pizza__priseAndBasket'>
          <PriseComponent />
          <BasketComponent />
        </div>
      </div>
    );
  }
}
