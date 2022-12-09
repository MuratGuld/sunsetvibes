
import { useState, createContext } from "react";

export const Context = createContext([]);


const CardContext = ({children}) => {
    const [cart, updateCart] = useState([]);
    
    return (
        <Context.Provider value={[cart, updateCart]}>
            {children}
        </Context.Provider>
    )
}

export default CardContext