import React from "react";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import "./AddToy.css";
import useTitle from "../../hooks/useTitle";

const AddToy = () => {
  useTitle("Add a toy");
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    const toyPic = form.toyPic.value;
    const sellerName = form.sellerName.value;
    const email = form.email.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const newToy = {
      toyName,
      toyPic,
      sellerName,
      email,
      subCategory,
      price,
      rating,
      quantity,
      description,
    };
    console.log(newToy);

    // send data to server starts
    fetch("https://eudkids-server.vercel.app/alltoys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Toy added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
    // send data to server end
  };

  return (
    <div className="add-toy-area">
      <div className="container">
        <div className="section-title">
          <p>Welcome</p>
          <h3>Add A Toy</h3>
        </div>
        <div>
          <Form onSubmit={handleAddToy}>
            <div className="form-area">
              <div>
                <Form.Group className="mb-3" controlId="toyName">
                  <Form.Label>Toy Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="toyName"
                    placeholder="Enter toy name"
                  />
                </Form.Group>
              </div>

              <div>
                <Form.Group className="mb-3" controlId="toyPic">
                  <Form.Label>Toy Picture URL</Form.Label>
                  <Form.Control
                    type="text"
                    name="toyPic"
                    placeholder="Enter toy image url"
                  />
                </Form.Group>
              </div>

              <div>
                <Form.Group className="mb-3" controlId="sellerName">
                  <Form.Label>Seller Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="sellerName"
                    placeholder="Seller name"
                  />
                </Form.Group>
              </div>

              <div>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Seller Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Seller Email"
                  />
                </Form.Group>
              </div>

              <div>
                <Form.Group className="mb-3" controlId="subCategory">
                  <Form.Label>Sub-category</Form.Label>
                  <Form.Control
                    as="select"
                    name="subCategory"
                    // value={formData.subCategory}
                    // onChange={handleChange}
                  >
                    <option value="">Select a sub-category</option>
                    <option value="Math Toys">Math Toys</option>
                    <option value="Language Toys">Language Toys</option>
                    <option value="Science Toys">Science Toys</option>
                  </Form.Control>
                </Form.Group>
              </div>

              <div>
                <Form.Group className="mb-3" controlId="price">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    placeholder="Price"
                  />
                </Form.Group>
              </div>
              <div>
                <Form.Group className="mb-3" controlId="rating">
                  <Form.Label>Rating</Form.Label>
                  <Form.Select name="rating" defaultValue="">
                    <option value="" disabled>
                      Select a rating
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Form.Select>
                </Form.Group>
              </div>

              <div>
                <Form.Group className="mb-3" controlId="quantity">
                  <Form.Label>Available Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
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
                  />
                </Form.Group>
              </div>
            </div>
            <div className="add-toy-submit-btn">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
