import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery-area">
      <div className="container">
        <div className="section-title">
          <p>Have A Look</p>
          <h3>Our Photo Gallery</h3>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src="https://images.pexels.com/photos/6623832/pexels-photo-6623832.jpeg?auto=compress&cs=tinysrgb&w=600"
              class="w-100 shadow-1-strong rounded mb-4"
            />

            <img
              src="https://images.pexels.com/photos/8612926/pexels-photo-8612926.jpeg?auto=compress&cs=tinysrgb&w=600"
              class="w-100 shadow-1-strong rounded mb-4"
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://images.pexels.com/photos/8612968/pexels-photo-8612968.jpeg?auto=compress&cs=tinysrgb&w=600"
              class="w-100 shadow-1-strong rounded mb-4"
            />

            <img
              src="https://images.pexels.com/photos/14249703/pexels-photo-14249703.jpeg?auto=compress&cs=tinysrgb&w=600"
              class="w-100 shadow-1-strong rounded mb-4"
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://plus.unsplash.com/premium_photo-1663091651850-bd044f089c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWR1Y2F0aW9uYWwlMjB0b3klMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              class="w-100 shadow-1-strong rounded mb-4"
            />

            <img
              src="https://images.pexels.com/photos/7334320/pexels-photo-7334320.jpeg?auto=compress&cs=tinysrgb&w=600"
              class="w-100 shadow-1-strong rounded mb-4"
            />
            <img
              src="https://images.pexels.com/photos/6210331/pexels-photo-6210331.jpeg?auto=compress&cs=tinysrgb&w=600"
              class="w-100 shadow-1-strong rounded mb-4 last"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
