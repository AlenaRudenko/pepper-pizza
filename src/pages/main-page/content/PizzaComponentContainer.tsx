import React, { Component } from "react";
import { connect } from "react-redux";
import { setBasket } from "../../../store/orderPageReducer/orderPageActionCreators";
import { IPizza } from "../../../store/mainPageReducer/interfaces";
import { BasketComponent } from "./BasketComponent";
import { DicriptionComponent } from "./DiscriptionComponent";
import { PriseComponent } from "./PriseComponent";
import "./styles.css";
import { IBasket } from "../../../store/orderPageReducer/interfaces";
import { IStore } from "../../../store/store";

interface IProps {
  title: string;
  imageUrl: string;
  price: IPizza["price"];
  id: string;
  setBasket: (value: IBasket) => void;
  addedCount: number;
}

interface IState {
  variant: string;
  size: string;
  sum: number;
}

const variants = ["Тонкое", "Традиционное"];
const sizes = ["26", "30", "35"];

class PizzaComponent extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      variant: "Тонкое",
      size: "26",
      sum: this.props.price,
    };
  }

  changeVariant = (value: string) => {
    this.setState({ variant: value });
  };
  changeSize = (value: string) => {
    this.setState({ size: value });
  };
  calculatePrice = () => {
    return Math.ceil((this.props.price / 26) * +this.state.size);
  };
  generateKey = () => {
    return new Date().getTime();
  };
  choosePizza = () => {
    this.props.setBasket({
      id: this.props.id,
      title: this.props.title,
      imageUrl: this.props.imageUrl,
      price: this.calculatePrice(),
      size: this.state.size,
      variant: this.state.variant,
      uniqueKey: this.generateKey(),
    });
  };
  render() {
    return (
      <div className='pizza__cont'>
        <div className='pizza__container'>
          <img src={this.props.imageUrl} alt='' />
          <div className='pizza__content'>
            <h3>{this.props.title}</h3>
          </div>
          <DicriptionComponent
            currentVariant={this.state.variant}
            currentSize={this.state.size}
            variants={variants}
            sizes={sizes}
            changeVariant={this.changeVariant}
            changeSize={this.changeSize}
          />
          <div className='pizza__priseAndBasket'>
            <PriseComponent price={this.calculatePrice()} />
            <BasketComponent
              count={this.props.addedCount}
              choosePizza={this.choosePizza}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: IStore, props: any) => ({
  addedCount: state.orderPage.basket.reduce(
    (acc, value) => (value.id === props.id ? acc + 1 : acc),
    0
  ),
});
export const PizzaComponentContainer = connect(mapStateToProps, {
  setBasket,
})(PizzaComponent);
