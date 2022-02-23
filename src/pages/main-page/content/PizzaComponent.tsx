import React from "react";
import "./styles.css";

export class PizzaComponent extends React.Component {
  render() {
    return (
      <div className='pizza__container'>
        <img src={require("../../../images/cheezeburger.png")} alt='' />
      </div>
    );
  }
}
