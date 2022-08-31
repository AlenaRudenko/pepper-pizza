import React, { useState } from 'react'
import { Main } from './Main'

export interface IContext {
    colors: IColors;
    setColors: () => void;
}
export interface IColors {
    backgroundCApp:string;
    backgroundCAppContainer:string;
}
export const Context = React.createContext<IContext>({colors:{backgroundCApp:'#ffdf8c',
backgroundCAppContainer:'white'}, setColors: () => {}})
export const App = () => {
    const [colors, setColors] = useState({
        backgroundCApp:'#ffdf8c',
        backgroundCAppContainer:'white'

    });
    const setColorEditor = () => {
        setColors((prevState) => ({...prevState,backgroundCApp: colors.backgroundCApp === '#ffdf8c' ? '1f304e' : '#ffdf8c' }))
    }
    const context:IContext = {colors,setColors:setColorEditor};
    return <Context.Provider value={context}><div style={{backgroundColor:colors.backgroundCApp}}className='app'><Main /></div>
        </Context.Provider>
        
}
