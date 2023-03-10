import React from 'react'
import './navbarStyles.css';
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='nav'>
    <Link to="/" ><h3>Short<span>.ly</span></h3></Link>
    <ul>
      <CustomLink to="/about">About</CustomLink>
      <CustomLink to="/contact">Contact</CustomLink>
    </ul>
    </nav>
  )
}

function CustomLink({to, children, ...props}){
  const path = window.location.pathname

  return (

    <li className={path === to ? "active" :""}>
      <Link to = {to} {...props}>
        {children}
      </Link>
    </li>

  )
}

export default NavBar