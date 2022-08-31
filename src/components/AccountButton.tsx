import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./../pages/main-page/header/styles.css";

export const AccountButton = () => {


  return (
    <div className='account-button'>
              <NavLink className="Link-decoration--logo" to='/auth'>Войти</NavLink>
    </div>
  );
};
