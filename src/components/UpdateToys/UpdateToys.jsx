import React from "react";
import { Button, Form } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import "./UpdateToys.css";

const UpdateToys = () => {
  const toy = useLoaderData();
  const { _id, price, quantity, description, toyName } = toy;

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updatedToy = {
      price,
      quantity,
      description,
    };

    // send data to server starts
    fetch(`http://localhost:5000/mytoys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Toy updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
    // send data to server end
  };
  return (
    <div className="update-area">
      <div className="container">
        <div className="section-title">
          <p>Update Now</p>
          <h3>{toyName} Toy</h3>
        </div>
        <Form onSubmit={handleUpdate}>
          <div className="update-area-form">
            <div>
              <Form.Group className="mb-3" controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  placeholder="Price"
                  defaultValue={price}
                />
              </Form.Group>
            </div>
            <div>
              <Form.Group className="mb-3" controlId="quantity">
                <Form.Label>Available Quantity</Form.Label>
                <Form.Control
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  defaultValue={quantity}
                />
              </Form.Group>
            </div>
            <div>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  placeholder="Description"
                  defaultValue={description}
                />
              </Form.Group>
            </div>
            <div className="update-now-btn">
              {/* <Button type="submit">Update Now</Button> */}
              <button type="submit">Update Now</button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UpdateToys;
