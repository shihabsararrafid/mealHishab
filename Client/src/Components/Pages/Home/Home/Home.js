import React from "react";
import "./Home.css";
import UpperBanner from "../UpperBanner/UpperBanner";
import Mealrate from "../Benfits/Mealrate";

const Home = () => {
  return (
    <div className="home">
      <UpperBanner></UpperBanner>
      <Mealrate></Mealrate>
    </div>
  );
};

export default Home;
