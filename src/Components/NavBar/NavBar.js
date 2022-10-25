import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { logout } from '../../config/firebase'

const NavBar = () => {
  return (
    <div className="navbar">
        <div>Home</div>
        <Link to="/login"><button className="">Login</button></Link>
        <button onClick={logout} >SignOut</button>
    </div>
  )
}

export default NavBar