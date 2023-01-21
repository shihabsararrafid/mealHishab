import React from "react";
import "./UpperBanner.css";
import uimg from "./../../../../Images/upperBanner.jpg";
import Button from "../../../Shared/Button/Button";
import Button2 from "../../../Shared/Button/Button2";
const UpperBanner = () => {
  return (
    <div className="upperBanner">
      <div className="text upperBanner-text ">
        <p>
          Everyone who studys outside his/her home have to stay in hostel or
          mess in a certain period of life.Not only students but also different
          categories of employee also stay in hostel . It is quite a hectic to
          manage and calculate all the necessary needs in hostel . Here comes{" "}
          <b>MealHishab </b> to save your time by calculating and storing all
          necessary data in one place .
        </p>
        <p>
          Are You still confused to use it ?<span>It is totally free!!!!</span>
        </p>
        <p className="bn">
          <Button text="User Guide -_-"></Button>
          <Button2 text="Log In"></Button2>
        </p>
      </div>
      {/* <div className="upperBanner-img ">
        <img className="images" src={uimg} alt="" srcset="" />
      </div> */}
    </div>
  );
};

export default UpperBanner;
