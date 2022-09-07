import './../pages/reg-page/styles.css'

interface IProps {
  type:string;
  name:string;
  placeholder:string;
}


export const InputComponent = ({type, name, placeholder}:IProps) => {
  return <div><input type={type ? type : 'text'} placeholder={placeholder} className={name ? name : 'default__input'} /></div>
}