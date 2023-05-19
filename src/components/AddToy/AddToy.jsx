import React from "react";
import { Button, Form } from "react-bootstrap";
import "./AddToy.css";

const AddToy = () => {
  return (
    <div className="add-toy-area">
      <div className="container">
        <div className="section-title">
          <p>Welcome</p>
          <h3>Add A Toy</h3>
        </div>
        <div>
          <Form>
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
                <Form.Group className="mb-3" controlId="toyPictureUrl">
                  <Form.Label>Toy Picture URL</Form.Label>
                  <Form.Control
                    type="text"
                    name="toyPictureUrl"
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
                <Form.Group className="mb-3" controlId="sellerEmail">
                  <Form.Label>Seller Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="sellerEmail"
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
                    <option value="" className="sub-cat-head">
                      Select a sub-category
                    </option>
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
                  <Form.Control
                    type="number"
                    name="rating"
                    placeholder="Rating"
                  />
                </Form.Group>
              </div>

              <div>
                <Form.Group className="mb-3" controlId="availableQuantity">
                  <Form.Label>Available Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    name="availableQuantity"
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
