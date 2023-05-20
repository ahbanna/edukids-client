import React, { useContext } from "react";
import { Button, Container, Nav, NavLink, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="header-area">
        <div className="header-logo">
          <Link to="/">
            <h2>EduKids</h2>
          </Link>
        </div>
        <div className="d-flex align-items-center main-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/alltoys">All Toys</Link>
            </li>

            {user?.email ? (
              <>
                <li>
                  <Link to="/addtoy">Add A Toy</Link>
                </li>
                <li>
                  <Link to="/mytoys">My Toys</Link>
                </li>
                <li>
                  <button className="logout-btn" onClick={handleLogOut}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="header-login-btn">
          <Link to="/login">
            <Button variant="secondary">Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
