import React from "react";
import "./BannerTitle.css";
import { Link } from "react-router-dom";

const BannerTitle = ({ title, text, buttonText, buttonLink }) => {
  return (
    <>
      <span>EduKids - Educational Toys For Kids</span>
      <h2 className="banner-title">{title}</h2>
      <p className="banner-text">{text}</p>
      <Link to={buttonLink} className="custom-button banner-btn">
        {buttonText}
      </Link>
    </>
  );
};

export default BannerTitle;
