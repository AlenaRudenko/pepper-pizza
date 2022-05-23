import React, { Component } from "react";
import { connect } from "react-redux";
import { IPizza } from "../../../store/mainPageReducer/interfaces";
import { setBasket } from "../../../store/mainPageReducer/mainPageActionCreators";
import { BasketComponent } from "./BasketComponent";
import { DicriptionComponent } from "./DiscriptionComponent";
import { PriseComponent } from "./PriseComponent";
import "./styles.css";

interface IProps {
  name: string;
  img: string;
  price: IPizza["price"];
  id: string;
  setBasket: typeof setBasket;
  changeCount: () => void;
}

interface IState {
  variant: string;
  size: string;
}

const variants = ["Тонкое", "Традиционное"];
const sizes = ["26", "30", "40"];

class PizzaComponent extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      variant: variants[0],
      size: sizes[0],
    };
  }
  changeVariant = (value: string) => {
    this.setState({ variant: value });
  };
  changeSize = (value: string) => {
    this.setState({ size: value });
  };
  choosePizza = () => {
    this.props.setBasket({
      id: this.props.id,
      name: this.props.name,
      img: this.props.img,
      price: this.props.price,
      size: +this.state.size,
      variant: this.state.variant,
      count: 1,
    });
  };
  render() {
    return (
      <div className='pizza__cont'>
        <div className='pizza__container'>
          <img src={this.props.img} alt='' />
          <div className='pizza__content'>
            <h3>{this.props.name}</h3>
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
            <PriseComponent
              currentSize={this.state.size}
              price={this.props.price}
            />
            <BasketComponent choosePizza={this.choosePizza} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { setBasket })(PizzaComponent);
