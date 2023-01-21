import React from "react";
import report1 from "./../../../../Images/list-2389219_1280.png";
const Report = () => {
  return (
    <div className="upperBanner">
      <div className="text">
        <h2>Make Monthly Report</h2>
        <p>
          By analysis, All the stored data and basis of the other information
          make individual monthly report .
        </p>
      </div>
      <div className="upperBanner-img">
        <img className="images" src={report1} alt="" />
      </div>
    </div>
  );
};

export default Report;
