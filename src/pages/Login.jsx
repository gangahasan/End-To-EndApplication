import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useContext}  from "react";
import { UserContext } from '../components/ContextProvider';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const{login} = useContext(UserContext);

    const handleLogin = async(e) => {
        console.log("submitted")
        e.preventDefault();
        try{
            let response = await axios.post("https://giddy-melon-lumber.glitch.me/login",{
                username,password
            });
            console.log(response, 'response')

            if(response.data.success) {
                const {token} = response.data;
                localStorage.setItem('token', token);
                login(token);
            
            }
        }
        catch(err) {
            console.error(err);
            // Display error message to user
        }
    
    }

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <input type="text" value={username} placeholder='Enter username' onChange={(e)=>{setUsername(e.target.value)}}required/>
            <input type="password" value={password} placeholder='Enter password' onChange={(e)=>{setPassword(e.target.value)}} required/>
            <input type="submit" value="Login" />
        </form>
    </div>

    
  )
}

export default Login