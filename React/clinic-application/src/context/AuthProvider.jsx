import { useState } from "react";
import { AuthContext } from "./AuthContext";


export const AuthProvider = ({children})=>{
    const [token, setToken] = useState('');

    return(
        <AuthContext.Provider value = {{token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}