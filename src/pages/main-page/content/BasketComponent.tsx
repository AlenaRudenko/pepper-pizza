import CountComponent from "./CountComponent";
import "./styles.css";

export default function BasketComponent() {
  return (
    <div className='pizzaBacket__container'>
      <span>+ Добавить</span>
      <CountComponent />
    </div>
  );
}
