import { useState } from "react";
import { Main } from "./Main";

interface IContext {
    background:string
}
interface IState {
    theme:IContext;
    toggleTheme:() => void;
}
export const App = () => {
    [state, setState] = useState(themes.light);
    const toggleThemeFunc = () = {
        setState(state => {(theme: if (state.theme === themes.light) {
            return themes.dark
            else return themes.light
        }  )})
    }
        return (
      <myContext.Provider value={this.state}>
        <div className='app'>
          <Main />
        </div> 
      </myContext.Provider>)
}      




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

