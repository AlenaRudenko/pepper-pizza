import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/typed-selector";
import { toggleSortVisibles } from "../../../store/mainPageReducer/mainPageActionCreators";

import "./styles.css";

export default function SortComponent() {
  const dispatch = useDispatch();
  const isActive = useTypedSelector(({ mainPage }) => mainPage.isActive);
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
            <li className='sort__select'>Популярности</li>
            <li className='sort__select'>Цене</li>
            <li className='sort__select'>Алфавиту</li>
          </ul>
        )}
      </div>
    </div>
  );
}
