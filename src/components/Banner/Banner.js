import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";
import "./Banner.css";
import { NavLink } from "react-router-dom";

const Banner = () => {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    fetch("banner.json")
      .then((res) => res.json())
      .then((data) => setBanner(data));
  }, []);
  return (
    <section className="banner-area">
      <Carousel fade>
        {banner.map((item) => (
          <Carousel.Item key={item.id}>
            <img className="d-block w-100" src={item.img} alt="First slide" />
            <Carousel.Caption>
              <div>
                <h2>{item.heading}</h2>
                <p>{item.text}</p>
                <NavLink to="/service" className="nav-link">
                  <button className="theme-button">{item.buttontext}</button>
                </NavLink>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Banner;
