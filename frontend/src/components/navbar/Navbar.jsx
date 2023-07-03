import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'
import { useAuth} from "../../context/AuthContext"
import './navbar.css'


const Navbar = () => {
   const { authUser,
      setAuthUser,
      isLoggedIn,
      setIsLoggedIn} = useAuth();


      const login = (e)=>{
         e.preventDefault();
         setIsLoggedIn(true);
         setAuthUser({
            Name:"Me"
         });
      }

      const logout = (e)=>{
         e.preventDefault();
         setIsLoggedIn(false);
         setAuthUser(null);
      }


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
            {isLoggedIn? <li className="nav_item" >
               <NavLink onClick={(e)=>logout(e)} to='/write' className={navClass => navClass.isActive ? "active__link" : ""}>
                  Logout
               </NavLink>
            </li> : 
            <li className="nav_item" >
            <NavLink onClick={(e)=>login(e)}  to='/write' className={navClass => navClass.isActive ? "active__link" : ""}>
               Login
            </NavLink>
         </li> }

            


         </ul>


      </div>
   )
}


export default Navbar