import React from "react";
import AboutImage from "../AboutImage/AboutImage";
import Row from "react-bootstrap/Row";
import AboutText from "../AboutText/AboutText";

const AboutComponents = () => {
  return (
    <Row className="align-items-center">
      <AboutImage />
      <AboutText />
    </Row>
  );
};

export default AboutComponents;
