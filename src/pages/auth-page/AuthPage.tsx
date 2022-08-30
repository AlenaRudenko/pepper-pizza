import { NavLink } from "react-router-dom"

export const AuthPage = () => {
    return <div>
        <input placeholder="e-mail"></input>
        <input placeholder="password"></input>
        <button>Submit</button>
        <span>Нет аккаунта?</span>
        <NavLink to='/logon'>Зарегистрироваться</NavLink>
    </div>
}