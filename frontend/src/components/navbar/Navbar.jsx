import React, { useState } from 'react'
import GoogleLogin from 'react-google-login';
import {NavLink} from 'react-router-dom'

import './navbar.css'
import { useEffect } from 'react';
import { Button, Nav } from 'reactstrap';
import {authenticateUser} from "../login/Login"


const nav_links=[
  {
    path:'/',
    display:'Home'
  },
  {
    path:'/save',
    display:'Saved Articles'
  },
  
  {
    path:'/search',
    display:'Search'
  },
  {
    path:'/write',
    display:'Write Article'
  },
  
  {
    path:'/login',
    display:'Login'
  },

]

const nav_links2=[
  {
    path:'/',
    display:'Home'
  },
  {
    path:'/save',
    display:'Saved Articles'
  },
  
  {
    path:'/search',
    display:'Search'
  },
  {
    path:'/write',
    display:'Write Article'
  },
  


]







const Navbar = props => {

   const { oidc } = props;
  // const userLoggedIn = oidc.user;

//   const [user, setUser] = useState({});
// useEffect(() => {
//     setInterval(() => {
//         const userString = localStorage.getItem("user");
//         const user = JSON.parse(userString);
        
//         setUser(user);
//         }, [])
        
// }, 5000);


// const logout = () => {
//     return localStorage.removeItem("user");
// }
const logout = () => {
  localStorage.setItem('token', null);
  // this.props.history.push('/');
  this.props.navigate("/");
}



// if (!user) {
//   return (
//    <div className='head'>
//     <div className='text'>
//         News Scrapping
//     </div>
//     <ul className="menu">

//       {
//         nav_links.map((item,index)=>
//         (<li className="nav_item" key={index}>
//             <NavLink to={item.path} className={navClass => navClass.isActive ? "active__link":""}>
//               {item.display}
//             </NavLink>
//           </li>
//         ))
//       }

//     </ul>
    
    

             
//   </div>
//   )
//     }

    // if (user) {

   



      return (
      
       <div className='head'>
        <div className='text'>
            News Scrapping
        </div>
        <ul className="menu">
    
          {
            nav_links2.map((item,index)=>
            (<li className="nav_item" key={index}>
                <NavLink to={item.path} className={navClass => navClass.isActive ? "active__link":""}>
                  {item.display}
                </NavLink>
              </li>
            ))
          }


        

    
        </ul>
        
        
    
                 
      </div>
  
      )
        // }
}

export default Navbar