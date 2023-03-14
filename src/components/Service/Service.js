import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SectionHeading from "../SectionHeading/SectionHeading";
import { useEffect, useState } from "react";
import SingleService from "../SingleService/SingleService";
import "./Service.css";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="service-area">
      <Container>
        <SectionHeading heading="Services" />
        <Row className="mt-5">
          {services.map((item) => (
            <SingleService key={item.id} item={item}></SingleService>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Service;
