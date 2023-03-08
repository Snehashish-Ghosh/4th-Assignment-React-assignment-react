import React from "react";
import "./SingleService.css";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const SingleService = ({ item }) => {
  return (
    <Col lg={4}>
      <div className="single-service text-center">
        <img src={item.img} className="w-100" alt="#" />
        <h3>{item.name}</h3>
        <h5>Price: {item.price}</h5>
        <p>{item.description}</p>
        <Button className="theme-button w-100">Contact Now</Button>
      </div>
    </Col>
  );
};

export default SingleService;
