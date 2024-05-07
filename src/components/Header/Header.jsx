import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from  '../../assets/img/Logo.svg'
import './Header.scss'

function Header() {
  const [active, setActive] = useState('/')
  const location = useLocation().pathname 
  return (

    <header className='header'>
      <Link className='nav_logo' to='/'>
      <img src= {logo} alt="" />
      </Link>
      <ul className="nav_list">
        <li className= { location === '/' ? "nav_item active" : "nav_item "}>
          <Link to= '/' >
          <i className="bi bi-house-door"></i>          
          </Link>
        </li>
        <li className= { location === '/precent' ? "nav_item active" : "nav_item "}>
          <Link to= '/precent' >
          <i className="bi bi-percent"></i>
          </Link>
        </li>
        <li className= { location === '/pie-chart' ? "nav_item active" : "nav_item "}>
          <Link to= '/pie-chart' >
          <i className="bi bi-pie-chart-fill"></i>
          </Link>
        </li>
        <li className= { location === '/envelope' ? "nav_item active" : "nav_item "}>
          <Link to= '/envelope' >
          <i className="bi bi-envelope"></i>
          </Link>
        </li>
        <li className= { location === '/bell' ? "nav_item active" : "nav_item "}>
          <Link to= '/bell' >
          <i className="bi bi-bell"></i>
          </Link>
        </li>
        <li className= { location === '/gear' ? "nav_item active" : "nav_item "}>
          <Link to= '/gear' >
          <i className="bi bi-gear"></i>
          </Link>
        </li>
        <li className= { location === '/box' ? "nav_item active" : "nav_item "}>
          <Link to= '/box' >
          <i className="bi bi-box-arrow-left"></i>
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
