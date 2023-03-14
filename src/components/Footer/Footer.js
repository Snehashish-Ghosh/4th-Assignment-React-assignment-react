import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";
import Logo from "../../images/footer-logo.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <section className="footer-area">
      <Container className="text-light">
        <div className="footer-content">
          <Row>
            <Col lg={4} className="company-area">
              <img src={Logo} alt="#" />
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
                  Dukan, Jaflong, Sylhet, Bangladesh
                </h2>
              </div>
            </Col>
            <Col lg={4} className="footer-link">
              <div className="footer-heading text-center">
                <h1>Reach us</h1>
              </div>
              <div className="ps-lg-5">
                <div className="customize-contact">
                  <FontAwesomeIcon className="icon-area" icon={faEnvelope} />
                  <a href="mailto:Msluckyenterprise@gmail.com">
                    {" "}
                    Msluckyenterprise@gmail.com
                  </a>
                </div>
                <div className="customize-contact">
                  <FontAwesomeIcon className="icon-area ms-3" icon={faPhone} />
                  <a href="tel:+8801722894411">+8801713801044</a>
                </div>
                <div className="social-link">
                  <a href="https://www.facebook.com/Shuvo.ielu/" target="blank">
                    <FontAwesomeIcon className="icon-area" icon={faFacebook} />
                  </a>
                  <a href="https://wa.me/+8801713801044" target="blank">
                    <FontAwesomeIcon className="icon-area" icon={faWhatsapp} />
                  </a>
                  <a href="https://www.linkedin.com" target="blank">
                    <FontAwesomeIcon className="icon-area" icon={faLinkedin} />
                  </a>
                </div>
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
