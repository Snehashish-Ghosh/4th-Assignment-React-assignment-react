import React from "react";
import "./SectionHeading.css";
import Span from "../../images/span.png";

const SectionHeading = ({ heading }) => {
  return (
    <div className="section-area text-center">
      <h1> {heading} </h1>
      <img src={Span} alt="#" />
    </div>
  );
};

export default SectionHeading;
