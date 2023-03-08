import React from "react";
import "./ServiceHeading.css";
import Container from "react-bootstrap/Container";
import SectionHeading from "../SectionHeading/SectionHeading";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { NavLink } from "react-router-dom";
import ServiceHeadingImg from "../../images/service-heading.jpg";

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
            <div className="ServiceHeading-text ms-5">
              <h1>Complete Construction Solutions</h1>
              <p>
                Lucky Enterprise has been a trusted provider of construction
                materials since 1990. We offer a wide range of products,
                including crushed stone of all sizes, high-quality limestone,
                and other aggregates. In addition, we specialize in the import
                and export of construction materials, ensuring that you have
                access to the best products from around the world. Our heavy
                earthmoving equipment rental service allows you to get the job
                done efficiently, and our truck rental service provides you with
                a reliable way to transport materials. Whether you are a
                contractor, builder, or homeowner, you can count on Lucky
                Enterprise to meet all of your construction needs.
              </p>
            </div>
            <NavLink to="/service" className="nav-link">
              <button className="theme-button mt-1 ms-5">Explore All</button>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceHeading;
