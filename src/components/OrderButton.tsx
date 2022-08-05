import { useDispatch } from "react-redux";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/typed-selector";
import { openOrderPage } from "../store/orderPageReducer/orderPageActionCreators";
import "./../pages/main-page/header/styles.css";

export const OrderButton = () => {
  const dispatch = useDispatch();
  const isActive = useTypedSelector(({ orderPage }) => orderPage.isActive);
  const countPizzas = useTypedSelector(({ orderPage }) => orderPage.basket);
  const fullPrice = countPizzas.reduce(function (sum, item) {
    return sum + item.price;
  }, 0);
  const newF = () => {
    dispatch(openOrderPage());
  };
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
  return (
    <div className="orderButton" onClick={() => newF()}>
      {isActive ? (
        <NavLink to="/" className={"Link-decoration"}>
          <div className="orderButton__container">вернуться к пиццам</div>
        </NavLink>
      ) : (
        <NavLink to="/basket" className={"Link-decoration"}>
          <div className="orderButton__container">
            <span className="price">{fullPrice} ₽</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="white"
              className="bi bi-basket"
              viewBox="0 0 20 20"
            >
              <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
            </svg>
            <span>{countPizzas.length}</span>
          </div>
        </NavLink>
      )}
    </div>
  );
};
