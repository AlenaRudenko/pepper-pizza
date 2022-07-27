import React from "react";

import { PizzaComponentContainer } from "./pages/main-page/content/PizzaComponentContainer";
import { Header } from "./pages/main-page/header/Header";

import "./styles.css";
import { connect } from "react-redux";
import { IMainPage, IPizza } from "./store/mainPageReducer/interfaces";
import { setProducts } from "./store/mainPageReducer/mainPageActionCreators";
import { IStore } from "./store/store";
import { IOrderState } from "./store/orderPageReducer/interfaces";
import { OrderPageComponent } from "./pages/order-page/OrderPageComponent";
import axios from "axios";
import { NavigationComponentContainer } from "./pages/main-page/navigation/NavigationComponentContainer";

interface IState {
  isLoading: boolean;
}
interface IProps {
  pizzas: IMainPage["products"];
  setProducts: (value: any) => void;
  isActive: IOrderState["isActive"];
}

class MainComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }
  async componentDidMount() {
    await axios
      .get<IPizza[]>("https://626d16545267c14d5677d9c2.mockapi.io/items")
      .then((response) => this.props.setProducts(response.data));
    this.setState({ isLoading: !this.state.isLoading });
  }

  render() {
    return (
      <div className='app__container'>
        <Header />

        {this.props.isActive ? (
          <OrderPageComponent />
        ) : (
          <div>
            <NavigationComponentContainer />
            <h2 className='app__title'>Все пиццы</h2>
            {this.state.isLoading ? (
              <span>loading</span>
            ) : (
              <div className='content__container'>
                {this.props.pizzas.map((item) => (
                  <PizzaComponentContainer
                    title={item.title}
                    imageUrl={item.imageUrl}
                    price={item.price}
                    id={item.id}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state: IStore) => {
  return {
    pizzas: state.mainPage.products,
    isActive: state.orderPage.isActive,
  };
};
export const Main = connect(mapStateToProps, { setProducts })(MainComponent);
