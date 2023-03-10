import React from "react";
import "./ContactText.css";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import emailjs from "emailjs-com";
import { useState } from "react";

const ContactText = () => {
  const [errorMessage, setErrorMessage] = useState("");

  function SendEmail(e) {
    e.preventDefault();

    const { name, email, message } = e.target.elements;
    if (!name.value || !email.value || !message.value) {
      setErrorMessage("Please make sure all fields are filled in correctly");
      return;
    }

    emailjs
      .sendForm(
        "service_class28test",
        "template_plmfniq",
        e.target,
        "uptWrWYIZaMbXfJXw"
      )
      .then(
        (result) => {
          setErrorMessage("");
          e.target.reset();
        },
        (error) => {
          setErrorMessage("Failed to send email. Please try again later.");
        }
      );
  }

  return (
    <Col lg={6} className="p-5">
      <div className="contact-text text-center">
        <h1 className="mt-5">Feel free to contact with Us</h1>
      </div>
      <div className="contact-form">
        <form onSubmit={SendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="form-control mb-3"
            id="contactName"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="form-control mb-3"
            id="contactEmail"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="form-control mb-3"
            id="contactMessage"
          />
          {errorMessage && <p className="text-primary">{errorMessage}</p>}
          <Button
            className="theme-button d-block ms-auto"
            type="submit"
            value="Send"
          >
            Submit
          </Button>
        </form>
      </div>
    </Col>
  );
};

export default ContactText;
