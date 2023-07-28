import React from 'react'
import './navbar.scss'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar'>
  
  <NavLink to='/explore' acttiveClassname='active'>

Explore
   </NavLink>
   <NavLink to='/explore' acttiveClassname='active'>

Explore
   </NavLink>
   <NavLink to='/profile' acttiveClassname='active'>

Profile
   </NavLink>
  


    </nav>
  )
}

export default Navbar