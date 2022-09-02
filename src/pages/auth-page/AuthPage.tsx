import axios from "axios"
import { useState } from "react"
import { NavLink } from "react-router-dom"

import './styles.css'
interface IApiUser {
    id:number;
    name:string;
    username:string;
    email:string;
    adress: IAdress
}
interface IAdress {
    street:string;
    suite:string;
    city:string;
    zipcode:string;
    geo:IGeo
}
interface IGeo {
    lat:string;
    lng:string;
}
export const AuthPage = () => {
    let ApiUsers:IApiUser[] = [];
    const [user, setUs] = useState({userN:'', userPass:''})
    const eventHandlerEmail = (e:any) => {
       setUs((user) => ({...user, userN:e.target.value})) 
       
    }

     const eventHandlerPassword = (e:any) => {
       setUs((user) => ({...user, userPass:e.target.value})) 
       
    }
    const checkUser = () => {
            axios.get('https://jsonplaceholder.typicode.com/users').then(response => ApiUsers = [...response.data]);

        if (ApiUsers.find(value => value.email === user.userN) ) {
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