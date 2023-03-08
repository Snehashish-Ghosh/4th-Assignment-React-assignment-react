import React from "react";
import Col from "react-bootstrap/esm/Col";
import "./AboutText.css";

const AboutText = () => {
  return (
    <Col lg={6}>
      <div className="text-center about-text p-5">
        <h1>Building a Solid Foundation with Lucky Enterprise</h1>
        <p>
          Our stone crusher factory and heavy transportation company established
          in 1990, providing high-quality services in construction industry. We
          meet the changing needs of the clients and still going strong today,
          committed to maintaining our reputation for reliability and
          high-quality services.
        </p>
      </div>
    </Col>
  );
};

export default AboutText;