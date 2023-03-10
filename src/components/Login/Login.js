import React from "react";
import Container from "react-bootstrap/esm/Container";
import SectionHeading from "../SectionHeading/SectionHeading";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Login.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState } from "react";
import auth from "../../firebase.init";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const messageDiv = document.getElementById("message-div");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (error) {
    messageDiv.innerHTML =
      "Please make sure all fields are filled in correctly";
  }
  if (loading) {
    messageDiv.innerHTML = "Loading...";
  }
  if (user) {
    messageDiv.innerHTML = "Login Successfully";
  }

  return (
    <section className="login-area text-center">
      <Container>
        <SectionHeading heading="Login Now" />
        <div className="reg-area py-5">
          <Row>
            <Col lg={{ span: 6, offset: 3 }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </Form.Group>
              <p>
                Are you new in our Company?
                <NavLink to="/register" className="nav-link reg-link">
                  Please Create New Account
                </NavLink>
              </p>
              <div id="error-text"></div>
              <Button
                className="theme-button"
                type="submit"
                onClick={() => signInWithEmailAndPassword(email, password)}
              >
                Login
              </Button>
              <div id="message-div" className="py-3"></div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Login;
