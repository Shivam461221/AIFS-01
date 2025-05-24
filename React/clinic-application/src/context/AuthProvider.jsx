import { useState } from "react";
import { AuthContext } from "./AuthContext";


export const AuthProvider = ({children})=>{
    const [token, setToken] = useState('');
    const [user, setUser] = useState(null);



    return(
        <AuthContext.Provider value = {{token, setToken, user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}