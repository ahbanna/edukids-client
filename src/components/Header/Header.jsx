import React, { useContext } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import {} from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../../providers/AuthProvider";
import logo from "../../assets/logo.png";
import Headroom from "react-headroom";

const Header = () => {
  const NavLinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/blog",
      title: "Blog",
    },
    {
      path: "/alltoys",
      title: "All Toys",
    },
  ];
  const SellerLinks = [
    {
      path: "/addtoy",
      title: "Add A Toy",
    },
    {
      path: "/mytoys",
      title: "My Toys",
    },
  ];
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="header-area">
      <Headroom>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <NavLink to="/">
              <Image src={logo} alt="Edu Kids" height="55" />
            </NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-end "
            >
              <Nav className="ml-auto align-items-center">
                {NavLinks.map(({ path, title }) => (
                  <NavLink to={path} key={path}>
                    {title}
                  </NavLink>
                ))}

                {user?.email ? (
                  <>
                    {SellerLinks.map(({ path, title }) => (
                      <NavLink to={path} key={path}>
                        {title}
                      </NavLink>
                    ))}
                    <Button className="ml-2" onClick={handleLogOut}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <NavLink to="/login" className="login-btn">
                    Login
                  </NavLink>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Headroom>
    </div>
  );
};

export default Header;
