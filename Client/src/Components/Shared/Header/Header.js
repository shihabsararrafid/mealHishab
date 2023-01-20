import React, { useState } from "react";
import Button from "../Button/Button";
import logo1 from "./../../../Images/logo.png";
import "./Header.css";
import { IonIcon } from "@ionic/react";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { ImMenu } from "react-icons/im";
const Header = () => {
  const [isClicked, setClicked] = useState(false);
  return (
    <div className="sidebar">
      <div className="left-part">
        <img className="logoImage" src={logo1} alt="Logo" />
        <p> MealHishab</p>
      </div>
      <div
        className="right-part"
        style={{ visibility: `${isClicked ? "visible" : "hidden"}` }}
      >
        <ul>
          <li>Home</li>
          <li>User Guide</li>
          <li>My Meal</li>
          <li>Contact</li>
          <span>
            <Button text="Log In"></Button>
          </span>
        </ul>

        <span className="extra-btn">
          <Button text="Log In"></Button>
          <ImMenu
            onClick={() => setClicked(!isClicked)}
            className="menuIcon"
          ></ImMenu>
        </span>
      </div>
    </div>
  );
};

export default Header;
