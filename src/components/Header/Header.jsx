import React from "react";
import { Button, Container, Nav, NavLink, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  // const menuItems = [
  //   { path: "/", label: "Home" },
  //   { path: "/blog", label: "Blog" },
  // ];
  return (
    <div>
      <div className="header-area">
        <div className="header-logo">
          <Link to="/">
            <h2>EduKids</h2>
          </Link>
        </div>
        <div className="d-flex align-items-center main-menu">
          {/* <ul className="hidden d-flex align-items-center menu-items ">
            {menuItems.map((item) => (
              <li>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul> */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addtoy">Add Toy</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
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
