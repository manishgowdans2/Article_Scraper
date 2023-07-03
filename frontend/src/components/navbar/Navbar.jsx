import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'
import { useAuth} from "../../context/AuthContext"
import './navbar.css'


const Navbar = () => {
   const { authUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };


   return (
      <div className='navbar'>
         <div className='title1'>
            Article Scraping
         </div>

         <ul className="menu">
            <li className="nav_item" >
               <NavLink to='/' className={navClass => navClass.isActive ? "active__link" : ""}>
                  Home
               </NavLink>
            </li>

            <li className="nav_item" >
               <NavLink to='/save' className={navClass => navClass.isActive ? "active__link" : ""}>
                  Saved Article
               </NavLink>
            </li>

            <li className="nav_item" >
               <NavLink to='/search' className={navClass => navClass.isActive ? "active__link" : ""}>
                  Search
               </NavLink>
            </li>
            {authUser? <li className="nav_item" >
               <NavLink onClick={(e)=>logout(e)} to='/write' className={navClass => navClass.isActive ? "active__link" : ""}>
                  Logout
               </NavLink>
            </li> : 
            <li className="nav_item" >
            <NavLink   to='/write' className={navClass => navClass.isActive ? "active__link" : ""}>
               Login
            </NavLink>
         </li> }

            


         </ul>


      </div>
   )
}


export default Navbar