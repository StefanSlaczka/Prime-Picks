import React from "react";
import "./Styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <a href='home'>
        <Link to='/'>
          <img src={require("./Images/home.png")} alt='Home' />
        </Link>
      </a>
      <Link to='/login'>
        Login
      </Link>
    </div>
  );
};

export default Navbar;
