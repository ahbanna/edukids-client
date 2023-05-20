import React, { useContext, useState } from "react";
import "./Login.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  useTitle("Login");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        event.target.reset();
        setSuccess("Log in Successfully");
      })
      .catch((error) => {
        console.log(error);
        setError("Invalid username or password");
      });
  };

  const handleGoogleSignIn = (event) => {
    console.log("Hello google");
    event.preventDefault();

    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="login-area">
      <div className="container w-25 mx-auto">
        <p>Welcome</p>
        <h3>Please Login!</h3>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <div>
            <Form.Text>
              Don't have an account? <Link to="/register">Register</Link>
            </Form.Text>
            <p className="text-success">{success}</p>
            <p className="error-msg">{error}</p>
          </div>
        </Form>
        <div className="google-login">
          <h4>OR</h4>
          <Button onClick={handleGoogleSignIn}>
            <FaGoogle></FaGoogle> Login With Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
