import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/typed-selector";
import { OrderedPizzaComponent } from "./OrderedPizzaComponent";
import "./styles.css";

export const OrderPageComponent = () => {
  const count = useTypedSelector(({ mainPage }) => mainPage.count);
  return (
    <div className="orderPage">
      <h2 className="app__title">Ваши заказы</h2>
      {count ? (
        <OrderedPizzaComponent />
      ) : (
        <div className="orderPage__container">
          <div className="empty__pizza-container">
            <img
              className="empty__pizza"
              src="https://kartinkin.net/uploads/posts/2022-03/1648069763_18-kartinkin-net-p-kartinki-dlya-srisovki-pitstsa-19.png"
              alt=""
            ></img>
          </div>
          <span>Упс! Ничего нет, закажи пиццу !</span>
        </div>
      )}
    </div>
  );
};
