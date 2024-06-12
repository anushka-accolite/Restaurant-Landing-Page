import React from "react";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import "./Home.css";
const Home = () => {
  return (
    <div style={{width:"100vw",background:"palegoldenrod",transform:"translateX(-6em)"}}>
      <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div
          className="home-bannerImage-container"
          style={{ backgroundColor: "green", width: "35em", height: "46.8em",transform:"translateX(2.5em)",zIndex:"1000" }}
        >
          {/* <img src={BannerBackground} alt="" /> */}
        </div>
        <div className="home-text-section">
        <div className="banner-text-container">
        <p className="discount-text">Discount Upto 20%</p>
        <h1 className="description-text">Buy Fresh And Organic Grocery Food</h1>
      </div>
          
          <p className="primary-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et eros nec lacus mattis efficitur ac id turpis. Nullam et libero ultrices, gravida arcu in, sodales eros. Proin vel ex et est lacinia eleifend. Vestibulum tempor justo quis felis euismod ullamcorper. Integer nec.
          </p>
          <div className="shop-now-container">
            <button className=" secondary-button shop-now-button">
              Shop Now <FiArrowRight />{" "}
            </button>
            <div className="user-stats-container">
              <div>
                <p className="user-stat">35k+ </p>
                <p className="user-text">Users </p>
              </div>
              <hr className="horizontal-line" />
              <div>
                <p className="user-stat">18k+ </p>
                <p className="user-text">Products</p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-image-section" style={{zIndex:"1009"}}>
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
