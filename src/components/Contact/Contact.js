import React from "react";
import Container from "react-bootstrap/Container";
import ContactComponents from "../ContactComponents/ContactComponents";
import ContactHeader from "../ContactHeader/ContactHeader";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-area">
      <Container>
        <ContactHeader />
        <ContactComponents />
      </Container>
    </section>
  );
};

export default Contact;
