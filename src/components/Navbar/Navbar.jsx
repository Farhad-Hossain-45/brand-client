/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Logo from '../Logo/Logo';
import DarkMode from '../DarkMode/DarkMode';

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then()
    .catch()
  }
    const links = <>
        <li className='lg:text-white'><NavLink to="/">Home</NavLink></li>
        <li className='lg:text-white'><NavLink to="/addproduct">Add Product</NavLink></li>
        <li className='lg:text-white'><NavLink to="/cart">My Cart</NavLink></li>
        <li className='lg:text-white'><NavLink to="/register">Register</NavLink></li>
    </>
    return (
        <div className="navbar rounded-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
        <p className='md:text-white '><DarkMode></DarkMode></p>
      </ul>
    </div>
    <Logo></Logo>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
      <p className='text-white ml-10'><DarkMode></DarkMode></p>
    </ul>
  </div>
  <div className="navbar-end">
  
  {
      user && <p className='text-white'>{user.displayName}</p>
      
    }

    {
      user && <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img src={user.photoURL} />
      </div>
    </label>
    
    }

    {
      user ? <button onClick={handleLogOut} className='btn rounded-xl bg-[#1B295C] text-white'>Sing Out</button> : 

    <Link to="/login">
      <button className='btn rounded-xl bg-[#1B295C] text-white'>Login</button>
      </Link>
    }
  </div>
  
</div>
    );
};

export default Navbar;