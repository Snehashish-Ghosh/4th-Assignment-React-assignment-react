import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import Logo from "../Logo/Logo";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleLogOut = () => {
    signOut(auth);
  };
  return (
    <header>
      <Navbar expand="lg" className="header-area py-lg-1 fixed-top bg-light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
              <NavLink to="/service" className="nav-link">
                Service
              </NavLink>
              <NavLink to="/blog" className="nav-link">
                Blog
              </NavLink>
              {user ? (
                <NavLink
                  to="/login"
                  className="nav-link theme-button"
                  onClick={handleLogOut}
                >
                  Log Out
                </NavLink>
              ) : (
                <NavLink to="/login" className="nav-link theme-button">
                  Login
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
