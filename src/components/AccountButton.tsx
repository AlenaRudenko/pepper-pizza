import { NavLink } from "react-router-dom";
import "./../pages/main-page/header/styles.css";

export const AccountButton = () => {
  return (
    <div className='account-button'>
      <NavLink to='/account'>Войти</NavLink>
    </div>
  );
};
