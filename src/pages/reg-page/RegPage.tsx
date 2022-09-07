import { InputComponent } from "../../components/InputComponent";
import './styles.css'


export const RegPage = () => {
  interface IInputData {
    placeholder: string;
    type?: string;
    classname?:string;
  }
  const inputData:IInputData[] = [{
    placeholder:'Имя'
  }, {
    placeholder:'Фамилия',
  },
  {placeholder:'e-mail',
type:'email'},
{placeholder:'Пароль',
type:'password'},
{placeholder:'Повторите пароль',
type:'password'},
]
  return <div>
    <form className="registration__container">
      {inputData.map(item => <InputComponent type={item.type ? item.type : ''} placeholder={item.placeholder} name={item.classname ? item.classname : ''} />)}
    </form>
  </div>
}