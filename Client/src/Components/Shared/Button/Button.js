import React from "react";
import "./Button.css";
const Button = ({ text = "Button" }) => {
  return <button className="btn">{text}</button>;
};

export default Button;
