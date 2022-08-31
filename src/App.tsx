import React, { useState } from 'react'
import { Main } from './Main'

export interface IContext {
    color: string;
    setColor: () => void;
}
export const Context = React.createContext<IContext>({color:'red', setColor: () => {}})
export const App = () => {
    const [colore, setColor] = useState('red');
    const setColorEditor = () => {
        setColor(colore === 'red' ? 'blue' : "red")
    }
    const context:IContext = {color:colore, setColor:setColorEditor};
    return <Context.Provider value={context}><div className='app'><Main /></div>
        </Context.Provider>
        
}
