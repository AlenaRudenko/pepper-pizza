import { FC } from "react";

interface IProps {
  name: string;
  isActive?: boolean;
}

export const NavButton: FC<IProps> = ({ name, isActive }) => {
  return (
    <div className='NavButton__container'>
      <span>{name}</span>
    </div>
  );
};
