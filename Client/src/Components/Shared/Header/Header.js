import React from "react";
import Button from "../Button/Button";
import logo1 from "./../../../Images/logo.png";
import "./Header.css";
import { IonIcon } from "@ionic/react";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { ImMenu } from "react-icons/im";
const Header = () => {
  return (
    <div className="sidebar">
      <div className="left-part">
        <img className="logoImage" src={logo1} alt="Logo" />
        <p> MealHishab</p>
      </div>
      <div className="right-part">
        <ul>
          <li>Home</li>
          <li>User Guide</li>
          <li>My Meal</li>
          <li>
            Contact
            <IonIcon name="person" />
          </li>
          <span>
            <Button text="Log In"></Button>
          </span>
        </ul>

        <span className="extra-btn">
          <Button text="Log In"></Button>
          <ImMenu className="menuIcon"></ImMenu>
        </span>
      </div>
    </div>
  );
};

export default Header;
