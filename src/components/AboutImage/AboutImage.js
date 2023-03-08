import React from "react";
import Col from "react-bootstrap/esm/Col";
import AboutImg from "../../images/aboutImg.jpg";
import "./AboutImage.css";

const AboutImage = () => {
  return (
    <Col lg={6}>
      <div className="about-image">
        <img src={AboutImg} className="w-100 p-2" alt="" />
      </div>
    </Col>
  );
};

export default AboutImage;
