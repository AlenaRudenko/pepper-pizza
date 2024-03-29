import React from "react";

import { Header } from "./pages/main-page/header/Header";
import "./styles.css";
import { connect } from "react-redux";
import { IMainPage, IPizza } from "./store/mainPageReducer/interfaces";
import { setProducts } from "./store/mainPageReducer/mainPageActionCreators";
import { IStore } from "./store/store";
import { IOrderState } from "./store/orderPageReducer/interfaces";
import { OrderPageComponent } from "./pages/order-page/OrderPageComponent";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main-page/content/MainPage";
import { AuthPage } from "./pages/auth-page/AuthPage";
import { AccountPage } from "./pages/account-page/AccountPage";
import { RegPage } from "./pages/reg-page/RegPage";

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
      .then((response) => this.props.setProducts(response.data.filter(item => +item.id <= 9)));
    this.setState({ isLoading: !this.state.isLoading });
  }

  render() {
    
    return (
      <div className='app__container'>
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <MainPage
                isLoading={this.state.isLoading}
                pizzas={this.props.pizzas}
              />
            }
          />
          <Route path='/basket' element={<OrderPageComponent />} />
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/userpage' element={<AccountPage />}/>
          <Route path='/registration' element={<RegPage />} />
        </Routes>
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
