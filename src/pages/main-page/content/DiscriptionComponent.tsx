import { FC } from "react";
import "./styles.css";

interface IProps {
  changeVariant: (value: string) => void;
  changeSize: (value: string) => void;
  variants: string[];
  sizes: string[];
  currentVariant: string;
  currentSize: string;
}

export const DicriptionComponent: FC<IProps> = ({
  changeVariant,
  changeSize,
  variants,
  sizes,
  currentVariant,
  currentSize,
}) => {
  return (
    <div className='discription__container'>
      {variants.map((item) => {
        return (
          <div
            className={`discription__pizza ${
              currentVariant === item ? "discription__pizza--current" : ""
            }  `}
            onClick={() => {
              changeVariant(item);
            }}
          >
            {item}
          </div>
        );
      })}
      {sizes.map((item) => (
        <div
          className={`discription__pizza discription__width ${
            currentSize === item ? "discription__pizza--current" : ""
          }`}
          onClick={() => {
            changeSize(item);
          }}
        >
          {item}см
        </div>
      ))}
    </div>
  );
};
