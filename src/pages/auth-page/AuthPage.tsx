import { useState } from "react"
import { NavLink } from "react-router-dom"

import './styles.css'


export const AuthPage = () => {
    const [user, setUs] = useState({userN:'', userPass:''})
    const eventHandlerEmail = (e:any) => {
       setUs((user) => ({...user, userN:e.target.value})) 
       console.log(user)
    }
     const eventHandlerPassword = (e:any) => {
       setUs((user) => ({...user, userPass:e.target.value})) 
       console.log(user)
    }
    const checkUser = () => {
        console.log(user)
        if (user.userN === '123' ) {
            alert('SUPER') 
        }
    }
    return <div className="auth__container">
        <div className="auth__forms">
             <input placeholder="e-mail" onChange={eventHandlerEmail} value={user.userN}></input>
        <input placeholder="password" onChange={eventHandlerPassword} value={user.userPass}></input>
        <button onClick={checkUser}>Submit</button>
        </div>
       
        <span>Нет аккаунта?</span>
        <NavLink to='/logon'>Зарегистрироваться</NavLink>
    </div>
}