import { useTypedSelector } from "../../hooks/typed-selector";
import { OrderComponent } from "./OrderComponent";

export const OrderedPizzaComponent = () => {
  const order = useTypedSelector(({ mainPage }) => mainPage.basket);
  return (
    <div>
      {order.map((a) => (
        <OrderComponent title={a.title} variant={a.variant} count={a.variant} />
      ))}
    </div>
  );
};
