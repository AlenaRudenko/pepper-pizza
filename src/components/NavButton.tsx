import { FC } from "react";
import { useDispatch } from "react-redux";
import { sortByCategory } from "../store/mainPageReducer/mainPageActionCreators";

interface IProps {
  name: string;
  category: number;
}

export const NavButton: FC<IProps> = ({ name, category }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="NavButton__container"
      onClick={() => dispatch(sortByCategory(category))}
    >
      <span>{name}</span>
    </div>
  );
};
