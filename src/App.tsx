import React from "react";
import { PizzaComponent } from "./pages/main-page/content/PizzaComponent";
import { Header } from "./pages/main-page/header/Header";
import { NavigationComponent } from "./pages/main-page/navigation/NavigationComponent";
import "./styles.css";

function App() {
  return (
    <div className='app'>
      <div className='app__container'>
        <Header />
        <NavigationComponent />
        <h2 className='app__title'>Все пиццы</h2>
        <div className='content__container'>
          <PizzaComponent name='Чизбургер пицца' />
          <PizzaComponent name='Сырная' />
          <PizzaComponent name='Креветки по-азиатски' />
          <PizzaComponent name='Сырный цыпленок' />
          <PizzaComponent name='Пепперони' />
          <PizzaComponent name='React пицца' />
          <PizzaComponent name='Мясная' />
          <PizzaComponent name='Маргарита' />
        </div>
      </div>
    </div>
  );
}

export default App;
