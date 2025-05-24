import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Protected({ children }) {
    const { token, user } = useContext(AuthContext);
    // const navigate = useNavigate();
    if (token) {
        return children
    }
    else {
        return <Navigate to={"/"} />
    }
}

