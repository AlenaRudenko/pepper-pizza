import React, { Component } from "react";
import { IPizza } from "../../../models/pizza";
import BasketComponent from "./BasketComponent";
import DicriptionComponent from "./DiscriptionComponent";
import { PriseComponent } from "./PriseComponent";
import "./styles.css";

interface IProps {
  name: string;
  img: string;
  price: IPizza["price"];
}

export class PizzaComponent extends Component<IProps> {
  render() {
    return (
      <div className="pizza__cont">
        <div className='pizza__container'>
          <img src={this.props.img} alt='' />
          <div className='pizza__content'>
            <h3>{this.props.name}</h3>
          </div>
          <DicriptionComponent />
          <div className='pizza__priseAndBasket'>
            <PriseComponent price={this.props.price} />
            <BasketComponent />
          </div>
        </div>
      </div>
    );
  }
}
