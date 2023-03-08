import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <section className="footer-area">
      <Container className="text-light">
        <div className="footer-content">
          <Row>
            <Col lg={4} className="company-area">
              <Logo />
              <p>
                Contact us for your stone crusher needs. Our team is ready to
                assist you with any questions and provide a customized quote.
                Reach us by phone, email, or website contact form.
              </p>
            </Col>
            <Col lg={4} className="footer-address">
              <div className="footer-heading text-center">
                <h1>Address</h1>
              </div>
              <div className="footer-details">
                <h2>
                  <span>Head Office :</span> M/s Lucky Enterprise,
                  Supanighat,Sylhet, Bangladesh
                </h2>
                <h2>
                  <span>Factory One :</span> M/s Lucky Stone Crusher, Volaganj,
                  Companigonj, Sylhet, Bangladesh
                </h2>
                <h2>
                  <span>Factory Two :</span> M/s Lucky Stone Crusher, Mamar
                  Dukan, Jaflong, Gowainghat, Sylhet, Bangladesh
                </h2>
                <h3>+8801722894411</h3>
                <Link />
                {"msluckyenterprise@gmail.com"}
              </div>
            </Col>
            <Col lg={4} className="footer-link">
              <div className="footer-heading text-center">
                <h1>Follow Us</h1>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="copyright-area text-center text-white">
        <p>© 2023 Lucky Enterprise, All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
