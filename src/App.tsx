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
        <PizzaComponent />
      </div>
    </div>
  );
}

export default App;
