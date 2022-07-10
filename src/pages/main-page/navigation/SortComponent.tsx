import { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/typed-selector";
import {
  sortByPriceHigh,
  sortByPriceLow,
  sortByRating,
  sortByTitleDown,
  sortByTitleUp,
  toggleSortVisibles,
} from "../../../store/mainPageReducer/mainPageActionCreators";

import "./styles.css";

export default function SortComponent() {
  const dispatch = useDispatch();
  const isActive = useTypedSelector(({ mainPage }) => mainPage.isActive);
  const [title, setTitle] = useState(true);
  const [price, setPrice] = useState(true);
  const changeSortTitle = () => {
    if (title) {
      dispatch(sortByTitleUp());
      setTitle(!title);
    } else {
      dispatch(sortByTitleDown());
      setTitle(!title);
    }
  };
  const changeSortPrice = () => {
    if (price) {
      dispatch(sortByPriceHigh());
      setPrice(!price);
    } else {
      dispatch(sortByPriceLow());
      setPrice(!price);
    }
  };
  return (
    <div className='sort__container'>
      <div className='sort__list'>
        <span>Сортировать по:</span>
        <span
          className='sort__choise'
          onClick={() => dispatch(toggleSortVisibles())}
        >
          Популярности
        </span>
        {isActive && (
          <ul className='sort__selects'>
            <li
              className='sort__select'
              onClick={() => {
                dispatch(sortByRating());
                dispatch(toggleSortVisibles());
              }}
            >
              Популярности
            </li>
            <li
              className='sort__select'
              onClick={() => {
                dispatch(toggleSortVisibles());
                changeSortPrice();
              }}
            >
              {price ? `Цене ⇧` : `Цене ⇩`}
            </li>
            <li
              className='sort__select'
              onClick={() => {
                dispatch(toggleSortVisibles());
                changeSortTitle();
              }}
            >
              {title ? "Алфавиту Ая" : "Алфавиту Яа"}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
