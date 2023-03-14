import React from "react";
import "./ServiceHeading.css";
import Container from "react-bootstrap/Container";
import SectionHeading from "../SectionHeading/SectionHeading";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { NavLink } from "react-router-dom";
import ServiceHeadingImg from "../../images/service-heading.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const ServiceHeading = () => {
  return (
    <section className="demo-service-area">
      <Container>
        <SectionHeading heading="Service" />
        <Row>
          <Col lg={6}>
            <div className="ServiceHeading-Image">
              <img className="w-100" src={ServiceHeadingImg} alt="#" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="ServiceHeading-text ms-lg-5">
              <h1>Complete Construction Solutions</h1>
              <p>
                Lucky Enterprise has been a trusted provider of construction
                materials since 1990. We are providing construction materials,
                including crushed stone, high-quality limestone, and aggregates.
                We also offer heavy earthmoving and truck rental services for
                efficient construction work.
              </p>
            </div>
            <NavLink to="/service" className="nav-link">
              <button className="theme-button mt-1 ms-5">
                Explore All
                <FontAwesomeIcon className="common-icon" icon={faAnglesRight} />
              </button>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceHeading;
