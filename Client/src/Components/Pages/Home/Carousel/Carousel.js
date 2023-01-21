import React from "react";
import "./Carousel.css";
import store from "./../../../../Images/store.jpg";
import calculate from "./../../../../Images/calculate.jpg";
import email from "./../../../../Images/email.jpg";
import meal from "./../../../../Images//meal.jpg";
import report from "./../../../../Images/list-2389219_1280.png";
import Button from "../../../Shared/Button/Button";
const Carousel = () => {
  return (
    <div className="main-body">
      <div className="container">
        <input type="radio" name="slider" class="d-none" id="s1" />

        <input type="radio" name="slider" id="s2" />
        <input type="radio" name="slider" id="s3" />
        <input type="radio" name="slider" id="s4" />
        <input type="radio" name="slider" id="s5" />
        <div className="cards">
          <label htmlFor="s1" id="slide1">
            <div className="card">
              <div className="image">
                <img src={store} alt="" srcset="" />
                <div className="dots">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="infos">
                <h2>Store data</h2>
                <span className="txt">
                  You can easily store all the bazar data and other necessary
                  information in the database and later reuse it in different
                  case .{" "}
                </span>
                <a href="./details">
                  <Button text="Details"></Button>
                </a>
              </div>
            </div>
          </label>
          <label htmlFor="s2" id="slide2">
            <div className="card">
              <div className="image">
                <img src={calculate} alt="" srcset="" />
                <div className="dots">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="infos">
                <h2>Calculate Meal Rate</h2>
                <span className="txt">
                  By using this you can easily store all the bazar data and have
                  a realtime meal rate .
                </span>
                <a href="./details">
                  <Button text="Details"></Button>
                </a>
              </div>
            </div>
          </label>
          <label htmlFor="s3" id="slide3">
            <div className="card">
              <div className="image">
                <img src={report} alt="" srcset="" />
                <div className="dots">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="infos">
                <h2>Make Monthly Report</h2>
                <span className="txt">
                  By analysis, All the stored data and basis of the other
                  information make individual monthly report .
                </span>
                <a href="./details">
                  <Button text="Details"></Button>
                </a>
              </div>
            </div>
          </label>
          <label htmlFor="s4" id="slide4">
            <div className="card">
              <div className="image">
                <img src={meal} alt="" srcset="" />
                <div className="dots">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="infos">
                <h2>Access From Anywhere</h2>
                <span className="txt">
                  You can access the data and edit it from anywhere through
                  internet connection
                </span>
                <a href="./details">
                  <Button text="Details"></Button>
                </a>
              </div>
            </div>
          </label>
          <label htmlFor="s5" id="slide5">
            <div className="card">
              <div className="image">
                <img src={email} alt="" srcset="" />
                <div className="dots">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="infos">
                <h2>Notify Through Email</h2>
                <span className="txt">
                  Send necessary information and transaction in email to
                  individuals.
                </span>
                <a href="./details">
                  <Button text="Details"></Button>
                </a>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
