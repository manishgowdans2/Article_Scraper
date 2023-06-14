import React from 'react'
import Navbar from './navbar/Navbar'
import Home from './home/Home'
import About from './about/About'
import Search from "../components/search/Search"
import Saved from './Saved/Saved'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    {/* <Saved/> */}
    </>
  )
}

export default Layout