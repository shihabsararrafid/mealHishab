import React from "react";
import "./UpperBanner.css";
import uimg from "./../../../../Images/upperBanner.jpg";
import Button from "../../../Shared/Button/Button";
const UpperBanner = () => {
  return (
    <div className="upperBanner">
      <div className="upperBanner-text">
        <h2>Hello There!,</h2>
        <p>
          Welcome to <b>MealHishab</b> an exciting application to make your
          hostel life very easy . Everyone who studys outside his/her home have
          to stay in hostel or mess in a certain period of life.Not only
          students but also different categories of employee also stay in hostel
          . It is quite a hectic to manage and calculate all the necessary needs
          in hostel . Here comes <b>MealHishab </b> to save your time by
          calculating and storing all necessary data in one place .
        </p>
        <p>
          Are You still confused to use it ?<span>It is totally free!!!!</span>
        </p>
        <p>
          Here is the <Button text="User Guide -_-"></Button>
        </p>
      </div>
      <div className="upperBanner-img">
        <img src={uimg} alt="" srcset="" />
      </div>
    </div>
  );
};

export default UpperBanner;
