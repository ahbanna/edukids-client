import React, { useContext, useEffect, useState } from "react";
import "./MyToys.css";
import { AuthContext } from "../../providers/AuthProvider";
import { Table } from "react-bootstrap";
import MyToysTable from "../MyToysTable/MyToysTable";
import Swal from "sweetalert2";
const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const url = `http://localhost:5000/mytoys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToys(data);
      });
  }, []);

  // delete start
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/mytoys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Toy has been deleted.", "success");
              const remaining = myToys.filter((myToy) => myToy._id !== _id);
              setMyToys(remaining);
            }
          });
      }
    });
  };
  // delete end

  return (
    <div className="container">
      <div className="section-title">
        <p>Preview</p>
        <h3>My Toys</h3>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Description</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>1</td>
            <td>{myToys.price}</td>
            <td>{myToys.quantity}</td>
            <td>{myToys.description}</td>
          </tr> */}
          {myToys.map((myToy) => (
            <MyToysTable
              key={myToy._id}
              myToy={myToy}
              handleDelete={handleDelete}
            ></MyToysTable>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyToys;
