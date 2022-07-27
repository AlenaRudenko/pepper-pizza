import { FC } from "react";
import "./styles.css";

interface IProps {
  count: number;
}

export const CountComponent: FC<IProps> = ({ count }) => {
  return count >= 1 ? <div className='count__container'>{count}</div> : null;
};
