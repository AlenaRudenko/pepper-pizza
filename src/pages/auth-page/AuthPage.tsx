import axios from "axios"
import { createContext, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

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
const Context = createContext({userN:'', userPass:''})
export const AuthPage = () => {
    const navigate = useNavigate();
    const goBack = () => navigate('/');
    
    let ApiUsers:IApiUser[] = [];
    const [user, setUs] = useState({userN:'', userPass:''})
    const eventHandlerEmail = (e:any) => {
       setUs((user) => ({...user, userN:e.target.value})) 
       
    }
     const eventHandlerPassword = (e:any) => {
        setUs((user) => ({...user, userPass:e.target.value}))     
    }
     const checkUser = async () => {
            await axios.get('https://jsonplaceholder.typicode.com/users').then(response => ApiUsers = [...response.data]);
        if (ApiUsers.find(value => value.id === +user.userN && value.id === +user.userPass) ) {
            setUs(user => ({...user, userN:'', userPass:''}));
            goBack()
            
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