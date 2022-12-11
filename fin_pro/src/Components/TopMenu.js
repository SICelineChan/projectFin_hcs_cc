import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SignInPage from "./SignInPage";

export default function TopMenu({ title }) {
  // const [showNavRight, setShowNavRight] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid="sm">
        <nav className="navbar navbar-light ">
          <a className="navbar-brand" href="/home">
            <img
              src="./Images/noodleppl.png"
              width="60px"
              height="40px"
              alt="logo"
            />
          </a>
        </nav>
        <Navbar.Brand href="#home">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/locations">Locations</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="/about">
              {" "}
              <img
                src="/Images/me.JPG"
                className="rounded-circle"
                height="42px"
                alt="Avatar"
              />
            </Nav.Link>
            <Nav.Link href="#deets">New Post</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <SignInPage></SignInPage>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
