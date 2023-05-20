import React from "react";
import "./MyToysTable.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyToysTable = ({ myToy, handleDelete }) => {
  const { _id, price, quantity, description } = myToy;

  return (
    <tr>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{description}</td>
      <td>
        <Link to={`${_id}`}>
          <button className="update-btn">Update</button>
        </Link>
      </td>
      <td>
        <button className="delete-btn" onClick={() => handleDelete(_id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyToysTable;
