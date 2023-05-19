import React from "react";
import "./Login.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-area">
      <div className="container w-25 mx-auto">
        <p>Welcome</p>
        <h3>Please Login!</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <div>
            <Form.Text>
              Don't have an account? <Link to="/register">Register</Link>
            </Form.Text>
          </div>
        </Form>
        <div className="google-login">
          <h4>OR</h4>
        </div>
      </div>
    </div>
  );
};

export default Login;
