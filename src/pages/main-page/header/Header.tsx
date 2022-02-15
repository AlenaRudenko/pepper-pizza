import React from "react";
import { OrderButton } from "../../../components/OrderButton";
import "./styles.css";

export class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='header__container'>
          <div className='header__logo'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='22'
              height='22'
              fill='currentColor'
              className='bi bi-lightning-fill'
              viewBox='0 0 16 16'
            >
              <path d='M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z' />
            </svg>
          </div>
          <div className='header__text'>
            <h1>Pepper Pizza</h1>
            <h3>Самая вкусная пицца во вселенной</h3>
          </div>
        </div>
        <OrderButton></OrderButton>
      </div>
    );
  }
}
