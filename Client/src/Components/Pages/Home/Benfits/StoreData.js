import React from "react";
import store from "./../../../../Images/store.jpg";
const StoreData = () => {
  return (
    <div className="upperBanner">
      <div className="text">
        {" "}
        <h2>Store Data</h2>
        <p>
          You can easily store all the bazar data and other necessary
          information in the database and later reuse it in different case .{" "}
        </p>
      </div>
      <div className="upperBanner-img">
        <img className="images" src={store} alt="" />
      </div>
    </div>
  );
};

export default StoreData;
