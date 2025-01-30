import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className='nav-left'>
        <NavLink to="/" className="navlink">Home</NavLink>
        <NavLink to="/movies" className="navlink">Movies</NavLink>
      </div>
      <div className='nav-right'>
        <NavLink to="/login" className="navlink">Login</NavLink>
      </div>
    </div>
  );
}

export default Navbar