import React from "react";
import "./SingleService.css";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const SingleService = ({ item }) => {
  return (
    <Col lg={4}>
      <div className="single-service text-center">
        <img src={item.img} className="w-100" alt="#" />
        <h3>{item.name}</h3>
        <h5>Price: {item.price}</h5>
        <p>{item.description}</p>
        <a href="https://wa.me/+8801713801044" target="blank">
          <Button className="theme-button w-100">
            Contact Now
            <FontAwesomeIcon className="common-icon" icon={faWhatsapp} />
          </Button>
        </a>
      </div>
    </Col>
  );
};

export default SingleService;
