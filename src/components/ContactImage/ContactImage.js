import React from "react";
import ContactImg from "../../images/ContactImg.png";
import Col from "react-bootstrap/esm/Col";

const ContactImage = () => {
  return (
    <Col lg={6} className="p-2">
      <img src={ContactImg} className="w-100" alt="" />
    </Col>
  );
};

export default ContactImage;
