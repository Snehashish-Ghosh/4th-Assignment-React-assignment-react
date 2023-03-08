import React from "react";
import AboutHeader from "../AboutHeader/AboutHeader";
import Container from "react-bootstrap/Container";
import "./About.css";
import AboutComponents from "../AboutComponents/AboutComponents";

const About = () => {
  return (
    <section className="about-area">
      <Container>
        <AboutHeader />
        <AboutComponents />
      </Container>
    </section>
  );
};

export default About;
