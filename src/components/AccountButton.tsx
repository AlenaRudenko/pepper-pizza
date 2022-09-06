import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./../pages/main-page/header/styles.css";

export const AccountButton = () => {


  return (

              <NavLink className="Link-decoration--logo" to='/auth'><div className="account-button">Войти</div></NavLink>

  );
};
