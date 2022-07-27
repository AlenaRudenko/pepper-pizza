import { useTypedSelector } from "../../hooks/typed-selector";
import { IBasket } from "../../store/orderPageReducer/interfaces";
import { OrderComponent } from "./OrderComponent";

export const OrderedPizzaComponent = () => {
  const orderedPizzas = useTypedSelector(({ orderPage }) => orderPage.basket);
  // const newFunc = () => {
  //   orderedPizzas.reduce((acc, value) => {
  //     acc.set(`${value.title} ${value.size} ${value.variant}`);
  //     return acc;
  //   }, new Map<string, IBasket>());
  //   return [];
  // };

  return (
    <div>
      {orderedPizzas.map((pizza: IBasket) => (
        <OrderComponent {...pizza} />
      ))}
    </div>
  );
};
