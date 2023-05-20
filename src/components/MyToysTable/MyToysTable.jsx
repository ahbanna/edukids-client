import React from "react";
import "./MyToysTable.css";
import Swal from "sweetalert2";

const MyToysTable = ({ myToy, handleDelete }) => {
  const { _id, price, quantity, description } = myToy;

  return (
    <tr>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{description}</td>
      <td>
        <button>Update</button>
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
