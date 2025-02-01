import {useState,useEffect} from "react"
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();
export const ContextProvider =({children})=>{
    const[token , setToken] = useState(null);
    const [isLogin, setIsLogin] = useState(()=>{localStorage.getItem("token")? true : false});
    const navigate = useNavigate();

    const login=(token)=>{
         setIsLogin(true);
         setToken(token)
         navigate("/")

    }
    const logout=()=>{
        setIsLogin(false)
        navigate("/login")

    }
    return(
        <UserContext.Provider value={{login,logout,isLogin}}>
            {children}
        </UserContext.Provider>
    )
}