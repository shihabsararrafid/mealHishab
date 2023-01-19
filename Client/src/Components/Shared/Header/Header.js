import React from "react";
import logo1 from "./../../../Images/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="sidebar">
      <div className="left-part">
        <img className="logoImage" src={logo1} alt="Logo" />
        <p> MealHishab</p>
      </div>
    </div>
  );
};

export default Header;
