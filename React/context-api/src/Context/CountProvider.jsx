import { useState } from "react"
import { CountContext } from "./CountContext";

export const CountProvider = ({ children }) => {
    const [user, setUser] = useState('Shivam');

    return (
        <CountContext.Provider value= {{user, setUser}}>
            {children}
        </CountContext.Provider>
    )
}