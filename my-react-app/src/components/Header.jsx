import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='Nav'> 
        <div className="img"></div>
        <ul className="navlist">
          <Link to="/" className="innerele">Home</Link>
          <Link to="/Services" className="innerele">Services</Link>
          <Link to="/About" className="innerele">About</Link>
          <Link to="/LogIn" className="innerele">LogIn</Link>
        </ul>
    </div>
  )
}

export default Header