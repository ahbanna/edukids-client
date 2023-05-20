import React from "react";
import useTitle from "../../hooks/useTitle";
import { useLoaderData } from "react-router-dom";
import AllToysTable from "../AllToysTable/AllToysTable";
import { Table } from "react-bootstrap";
import "./AllToys.css";

const AllToys = () => {
  const toys = useLoaderData();
  useTitle("All Toys");
  return (
    <div className="container">
      <div className="section-title">
        <p>At A Glance</p>
        <h3>All Toys</h3>
      </div>
      <div className="all-toys-table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <AllToysTable key={toy._id} toy={toy}></AllToysTable>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AllToys;
