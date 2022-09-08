import axios from "axios";
import { createContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./styles.css";
interface IApiUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

const Context = createContext({ userN: "", userPass: "" });
export const AuthPage = () => {
  const navigate = useNavigate();
  const goAccount = () => navigate("/userpage");

  let ApiUsers: IApiUser[] = [];
  const [user, setUs] = useState({ userN: "", userPass: "" });
  const eventHandlerEmail = (e: any) => {
    setUs((user) => ({ ...user, userN: e.target.value }));
  };
  const eventHandlerPassword = (e: any) => {
    setUs((user) => ({ ...user, userPass: e.target.value }));
  };
  const checkUser = async () => {
    await axios
      .get(
        "https://my-json-server.typicode.com/alenarudenko/pepper-pizza-api-server/users"
      )
      .then((response) => (ApiUsers = [...response.data]));
    if (
      ApiUsers.find(
        (value) =>
          value.email === user.userN && value.password === user.userPass
      )
    ) {
      setUs((user) => ({ ...user, userN: "", userPass: "" }));
      goAccount();
    } else {
      alert("неправильный логин и/или пароль!");
    }
  };
  return (
    <div className="auth__container">
      <div className="auth__forms">
        <input
          placeholder="e-mail"
          onChange={eventHandlerEmail}
          value={user.userN}
        ></input>
        <input
          placeholder="password"
          onChange={eventHandlerPassword}
          value={user.userPass}
        ></input>
        <button
          disabled={user.userN && user.userPass ? false : true}
          onClick={checkUser}
        >
          Submit
        </button>
      </div>

      <span>Нет аккаунта?</span>
      <NavLink to="/registration">Зарегистрироваться</NavLink>
    </div>
  );
};
