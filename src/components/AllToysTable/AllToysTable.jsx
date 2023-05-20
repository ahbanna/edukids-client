import React from "react";
import "./AllToysTable.css";


const AllToysTable = ({ toy }) => {
  const { sellerName, toyName, subCategory, price, quantity } = toy;
  return (
    <tr>
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <button className="view-details-btn">View Details</button>
      </td>
    </tr>
  );
};

export default AllToysTable;
