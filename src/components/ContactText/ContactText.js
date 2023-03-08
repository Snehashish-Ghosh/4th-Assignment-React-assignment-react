import React from "react";
import "./ContactText.css";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
// import emailjs from "emailjs-com";

const ContactText = () => {
  // const submitButton = document.getElementById("submitButton");
  // submitButton.addEventListener("click", function () {
  //   const nameField = document.getElementById("contactName");
  //   const emailField = document.getElementById("contactEmail");
  //   const messageField = document.getElementById("contactMessage");
  //   const errorText = document.getElementById("error-text");

  //   const nameValue = nameField.value;
  //   const emailValue = emailField.value;
  //   const messageValue = messageField.value;

  //   const templateParams = {
  //     nameValue: nameValue,
  //     emailValue: emailValue,
  //     messageValue: messageValue,
  //   };
  //   if (nameValue && emailValue && messageValue) {
  //     console.log(nameValue, emailValue, messageValue);
  //     emailjs.send(
  //       "service_class28test",
  //       "template_plmfniq",
  //       templateParams,
  //       "uptWrWYIZaMbXfJXw"
  //     );
  //     nameField.value = "";
  //     emailField.value = "";
  //     messageField.value = "";
  //     errorText.innerHTML = "";
  //   } else {
  //     errorText.innerHTML =
  //       '<p class="text-warning" >Please make sure all fields are filled in correctly</p>';
  //   }
  // });
  //   function SendEmail(e) {
  //     e.preventDefault();
  //     if (SendEmail) {
  //       emailjs.sendForm(
  //         "service_class28test",
  //         "template_plmfniq",
  //         e.target,
  //         "uptWrWYIZaMbXfJXw"
  //       );
  //       sendForm = "";
  //     }
  //   }
  return (
    <Col lg={6} className="p-5">
      <div className="contact-text text-center">
        <h1 className="mt-5">Feel free to contact with Us</h1>
      </div>
      <div className="contact-form">
        <input
          type="text"
          name="nameValue"
          placeholder="Full Name"
          className="form-control mb-3"
          id="contactName"
        />
        <input
          type="email"
          name="emailValue"
          placeholder="Email Address"
          className="form-control mb-3"
          id="contactEmail"
        />
        <textarea
          name="messageValue"
          placeholder="Your Message"
          rows="4"
          className="form-control mb-3"
          id="contactMessage"
        />
        <Button
          className="theme-button d-block ms-auto"
          type="submit"
          value="Send"
          id="submitButton"
        >
          Submit
        </Button>
      </div>
    </Col>
  );
};

export default ContactText;

// const ContactText = () => {
//     function SendEmail(e) {
//       e.preventDefault();

//       emailjs.sendForm(
//         "service_class28test",
//         "template_plmfniq",
//         e.target,
//         "uptWrWYIZaMbXfJXw"
//       );

//     }
