import { InputComponent } from "../../components/InputComponent";
import "./styles.css";

export const RegPage = () => {
  interface IInputData {
    placeholder: string;
    type?: string;
    classname?: string;
  }
  const sendForm = () => {};
  const inputData: IInputData[] = [
    {
      placeholder: "Имя",
    },
    {
      placeholder: "Фамилия",
    },
    { placeholder: "e-mail", type: "email" },
    { placeholder: "Пароль", type: "password" },
    { placeholder: "Повторите пароль", type: "password" },
  ];
  return (
    <div className="registration__container">
      <h2>Введите данные</h2>
      <form className="registration__container">
        {inputData.map((item) => (
          <InputComponent
            type={item.type ? item.type : ""}
            placeholder={item.placeholder}
            name={item.classname ? item.classname : ""}
          />
        ))}
        <button>Зарегистрироваться</button>
      </form>
    </div>
  );
};
