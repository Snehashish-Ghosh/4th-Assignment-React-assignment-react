import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./NotFound.css";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <section className="not-found-area">
        <Container>
          <div className="not-found-text text-center">
            <h2>404</h2>
            <h3 className="mt-3">Page Not Found!</h3>
            <NavLink to="/" className="nav-link">
              <button className="theme-button mt-5">Go Home</button>
            </NavLink>
          </div>
        </Container>
      </section>
    </>
  );
};

export default NotFound;
