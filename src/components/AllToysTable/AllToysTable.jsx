import React from "react";
import "./AllToysTable.css";
import { Link } from "react-router-dom";

const AllToysTable = ({ toy }) => {
  const { sellerName, toyName, subCategory, price, quantity, _id } = toy;
  return (
    <tr>
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`${_id}`}>
          <button className="view-details-btn">View Details</button>
        </Link>
      </td>
    </tr>
  );
};

export default AllToysTable;
