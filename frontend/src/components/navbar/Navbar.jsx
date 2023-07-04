import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'

import './navbar.css'


const Navbar = () => {



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
          
            <li className="nav_item" >
            <NavLink   to='/login' className={navClass => navClass.isActive ? "active__link" : ""}>
                Author
            </NavLink>
         </li> 

            


         </ul>


      </div>
   )
}


export default Navbar