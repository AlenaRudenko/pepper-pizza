import { useState } from "react";
import { Main } from "./Main";
import "./styles.css";
import React from 'react'
interface IContext {
    background:string
}
interface IState {
    theme:IContext;
    toggleTheme:() => void;
}
export class App extends React.Component<IState>{
    constructor(props){
        super(props);
        this.state = {
       theme: themes.light,
       toggleTheme: this.toggleThemeFunc,
       }
       this.toggleThemeFunc = () => {
      this.setState((state) => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
   }; 
       return (
      <myContext.Provider value={this.state}>
        <div className='app'>
          <Main />
        </div> 
      </myContext.Provider>




export const themes = {
        dark:{
            background:'#FA8072',
        },
        light:{
            background:'#FA8072'
        }
    } ;
export const myContext = React.createContext({theme:themes.light,
    toggleThemes:() => {}});

