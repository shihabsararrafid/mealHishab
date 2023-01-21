import React from "react";
import "./Home.css";
import UpperBanner from "../UpperBanner/UpperBanner";
import Mealrate from "../Benfits/Mealrate";
import Report from "../Benfits/Report";
import StoreData from "../Benfits/StoreData";
import Banner from "../Banner/Banner";
import Carousel from "../Carousel/Carousel";

const Home = () => {
  return (
    <div className="home">
      <Banner></Banner>
      <UpperBanner></UpperBanner>
      <h1>What we Offer</h1>
      <Carousel></Carousel>
    </div>
  );
};

export default Home;
