import React from "react";
import { OrderButton } from "../../../components/OrderButton";
import "./styles.css";
import { AccountButton } from "./../../../components/AccountButton";
import { NavLink } from "react-router-dom";
import {myContext} from './../../../App.js'
export class Header extends React.Component {
  render() {
    return (
    <myContext.Consumer>
        {({background}) => <div className="header">
        <div className="header__container">
          <div className="header__logo">
            <img src={require("./image.png")} />
          </div>
          <div className="header__text">
            <NavLink className="Link-decoration--logo" to='/'><h1>Pepper Pizza</h1></NavLink>
            <h3>Самая вкусная пицца во вселенной</h3>
          </div>
        </div>
        <div>
            <button style={{backgroundColor: background}}>CHANGE THEME</button>
          <AccountButton />
          <OrderButton></OrderButton>
        </div>
      </div>}
            
        </myContext.Consumer>
      
    );
  }
}
