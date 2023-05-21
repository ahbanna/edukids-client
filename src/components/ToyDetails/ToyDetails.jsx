import React from "react";
import { useLoaderData } from "react-router-dom";
import "./ToyDetails.css";

const ToyDetails = () => {
  const toydetails = useLoaderData();
  return (
    <div className="toy-details-area">
      <div className="container">
        <div className="section-title">
          <p>All About</p>
          <h3>{toydetails.toyName} Toy</h3>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <img src={toydetails.toyPic} alt="" />
          </div>
          <div className="col-lg-6 details-content">
            <p>
              <span>Toy Name: </span> {toydetails.toyName}
            </p>
            <p>
              <span>Seller Name: </span>
              {toydetails.sellerName}
            </p>
            <p>
              <span>Seller Email: </span>
              {toydetails.email}
            </p>
            <p>
              <span>Price: </span>
              {toydetails.price}
            </p>
            <p>
              <span>Rating: </span>
              {toydetails.rating}
            </p>
            <p>
              <span>Available Quantity: </span>
              {toydetails.quantity}
            </p>
            <p>
              <span>Description: </span>
              {toydetails.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
