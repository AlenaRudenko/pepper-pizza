import { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/typed-selector";
import {
  sortByPriceHigh,
  sortByPriceLow,
  sortByRating,
  sortByTitleDown,
  sortByTitleUp,
  toggleSortVisibles
} from "../../../store/mainPageReducer/mainPageActionCreators";

import "./styles.css";

const sortList = {
  1:'Популярности',
  2:'Цене',
  3:'Алфавиту',  
}
export default function SortComponent() {
  const dispatch = useDispatch();
  const isActive = useTypedSelector(({ mainPage }) => mainPage.isActive);
  const [title, setTitle] = useState(true);
  const [sortChoise, setSortChoise] = useState('Популярности')
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
    <div className="sort__container">
      <div className="sort__list">
        <span>Сортировать по:</span>
        <span
          className="sort__choise"
          onClick={() => dispatch(toggleSortVisibles())}
        >
          {sortChoise}
        </span>

        <ul className={isActive ? "sort__selects" : "sort__selects--hidden"}>
          <li
            className="sort__select"
            onClick={() => {
              setSortChoise('Популярности')
              dispatch(sortByRating());
              dispatch(toggleSortVisibles());
            }}
          >
            Популярности
          </li>
          <li
            className="sort__select"
            onClick={() => {
              setSortChoise(price ? `Цене ⇧` : `Цене ⇩`)
              dispatch(toggleSortVisibles());
              changeSortPrice();
            }}
          >
            {price ? `Цене ⇧` : `Цене ⇩`}
          </li>
          <li
            className="sort__select"
            onClick={() => {
              setSortChoise(title ? "Алфавиту Ая" : "Алфавиту Яа")
              dispatch(toggleSortVisibles());
              changeSortTitle();
            }}
          >
            {title ? "Алфавиту Ая" : "Алфавиту Яа"}
          </li>
        </ul>
      </div>
    </div>
  );
}
