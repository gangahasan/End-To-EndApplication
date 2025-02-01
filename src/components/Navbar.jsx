import React from 'react'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './ContextProvider';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const{isLogin,logout} = useContext(UserContext);
    const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className='nav-left'>
        <NavLink to="/" className="navlink">Home</NavLink>
        <NavLink to="/movies" className="navlink">Movies</NavLink>
      </div>

      {isLogin? <button onClick={logout}>Logout</button>:<button onClick={()=>{navigate("/login")}}>Login</button>} 

    </div>
  );
}

export default Navbar