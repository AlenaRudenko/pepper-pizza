import React from "react";

import PizzaComponent from "./pages/main-page/content/PizzaComponent";
import { Header } from "./pages/main-page/header/Header";
import { NavigationComponent } from "./pages/main-page/navigation/NavigationComponent";
import { Api } from "./services/api";

import "./styles.css";
import { connect } from "react-redux";
import { IMainPage } from "./store/mainPageReducer/interfaces";
import { setProducts } from "./store/mainPageReducer/mainPageActionCreators";

interface IState {
  isLoading: boolean;
}
interface IProps {
  pizzas: IMainPage["products"];
  setProducts: (value: any) => void;
}

class MainComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }
  async componentDidMount() {
    console.log(1);

    console.log(2);
    // console.log(response);
    const res = await Api.getProducts();
    console.log(res.data);
    this.setState({ isLoading: false });
    this.props.setProducts(res.data);
  }

  render() {
    return (
      <div className='app__container'>
        <Header />
        <NavigationComponent />
        <h2 className='app__title'>Все пиццы</h2>
        {this.state.isLoading ? (
          <span>loading</span>
        ) : (
          <div className='content__container'>
            {this.props.pizzas.map((item) => (
              <PizzaComponent
                name={item.title}
                img={item.img}
                price={item.price}
                id={item.id}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state: IMainPage) => {
  return {
    pizzas: state.products,
  };
};
export const Main = connect(mapStateToProps, { setProducts })(MainComponent);
