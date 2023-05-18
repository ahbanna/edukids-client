import React from "react";
import bannerImg from "../../assets/banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-section">
      <div
        className="banner-img"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-content">
                <h2>Extraordinary Learning Toys</h2>
                <p>
                  Together We’ll Explore New Things. The best place to your buy
                  dream toys. We provide toys for all age kids.
                </p>
                <button>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
