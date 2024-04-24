import React from "react";
import "./Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="home">
        <img src={require('./Images/home.png')} alt="Home" />
      </a>
      <a href="login">
        <img alt="Login" />
      </a>
    </div>
  );
};

export default Navbar;