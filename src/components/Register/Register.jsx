import React, { useContext, useState } from "react";
import "./Register.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [success, setSuccess] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        event.target.reset();
        setSuccess("User has been created successfully");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="register-area">
      <div className="container w-25 mx-auto">
        <p>Welcome</p>
        <h3>Please Register!</h3>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group
            className="mb-3"
            name="password"
            controlId="formBasicPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
          <div>
            <Form.Text>
              Already have an account? <Link to="/login">Login</Link>
            </Form.Text>
            <p className="success-msg">{success}</p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
