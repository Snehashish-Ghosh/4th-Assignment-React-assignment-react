import React from "react";
import Row from "react-bootstrap/esm/Row";
import ContactImage from "../ContactImage/ContactImage";
import ContactText from "../ContactText/ContactText";

const ContactComponents = () => {
  return (
    <Row className="align-items-center">
      <ContactImage />
      <ContactText />
    </Row>
  );
};

export default ContactComponents;
