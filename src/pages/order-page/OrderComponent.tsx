import { useDispatch } from "react-redux";
import { DeleteButton } from "../../components/DeleteButton";
import { useTypedSelector } from "../../hooks/typed-selector";

import { IBasket } from "../../store/orderPageReducer/interfaces";
import { deleteOrderPizza } from "../../store/orderPageReducer/orderPageActionCreators";
import "./styles.css";

export const OrderComponent = (pizza: IBasket) => {
  const dispatch = useDispatch();
  return (
    <div
      className='order__container'
      onClick={() => dispatch(deleteOrderPizza(pizza.uniqueKey))}
    >
      <div className='order__group'>
        <div className='order__pic'>
          <img alt='' src={pizza.imageUrl} />
        </div>
        <div className='order__title'>
          <h3>{pizza.title}</h3>
          <div className='order__discription'>
            <span>{pizza.variant}</span>
            <span>{pizza.size} см</span>
          </div>
        </div>
      </div>
      <span>{pizza.price} ₽</span>
      <DeleteButton />
    </div>
  );
};
