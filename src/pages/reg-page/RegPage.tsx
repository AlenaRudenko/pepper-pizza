import axios from "axios";
import { error } from "console";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputComponent } from "../../components/InputComponent";
import "./styles.css";
interface IInputData {
  placeholder: string;
  type?: string;
  classname?: string;
}
export interface InewUser {
  name: string;
  surname: string;
  email: string;
  password: string;
  type?: string;
  repPassword: string;
}
export const RegPage = () => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    repPassword: "",
  });
  const generateId = () => {
    return Math.random().toString(16).slice(2);
  };
  const sendForm = () => {
    if (
      newUser.repPassword === newUser.password &&
      newUser.name &&
      newUser.email &&
      newUser.surname &&
      newUser.password
    ) {
      axios
        .post(
          "https://my-json-server.typicode.com/alenarudenko/pepper-pizza-api-server/users",
          {
            name: newUser.name,
            surname: newUser.surname,
            id: generateId(),
            email: newUser.email,
            password: newUser.password,
          }
        )
        .then(() => navigate("/userpage"))
        .finally(() => {
          setNewUser((user) => ({
            ...user,
            name: "",
            surname: "",
            email: "",
            password: "",
            repPassword: "",
          }));
        });
    } else if (
      !newUser.name ||
      !newUser.email ||
      !newUser.surname ||
      !newUser.password ||
      !newUser.repPassword
    ) {
      alert("Заполните все поля ввода !");
    } else if (newUser.password !== newUser.repPassword) {
      alert("Проверьте правильность введенного пароля !");
      setNewUser((user) => ({ ...user, repPassword: "" }));
    }
  };
  const onHandleNameChange = (e: any) => {
    setNewUser((user) => ({ ...user, name: e.target.value }));
  };
  const onHandleSurameChange = (e: any) => {
    setNewUser((user) => ({ ...user, surname: e.target.value }));
  };
  const onHandleEmailChange = (e: any) => {
    setNewUser((user) => ({ ...user, email: e.target.value }));
  };
  const onHandlePasswordChange = (e: any) => {
    setNewUser((user) => ({ ...user, password: e.target.value }));
  };
  const onHandlerepPasswordChange = (e: any) => {
    setNewUser((user) => ({ ...user, repPassword: e.target.value }));
  };
  return (
    <div className="registration__container">
      <h2>Введите данные</h2>
      <form className="registration__container">
        <InputComponent
          onChange={onHandleNameChange}
          value={newUser.name}
          placeholder={"Имя"}
        />
        <InputComponent
          onChange={onHandleSurameChange}
          value={newUser.surname}
          placeholder={"Фамилия"}
        />
        <InputComponent
          onChange={onHandleEmailChange}
          value={newUser.email}
          type={"email"}
          placeholder={"e-mail"}
        />
        <InputComponent
          onChange={onHandlePasswordChange}
          value={newUser.password}
          type={"password"}
          placeholder={"Пароль"}
        />
        <InputComponent
          onChange={onHandlerepPasswordChange}
          value={newUser.repPassword}
          type={"password"}
          placeholder={"Повторите пароль"}
        />
      </form>
      <button onClick={sendForm}>Зарегистрироваться</button>
    </div>
  );
};
