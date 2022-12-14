import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function TopMenu({ title }) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "#748DA6" }}
      variant="dark"
    >
      <Container fluid="sm">
        <Nav>
          <a className="navbar-brand" href="/home">
            <img
              src="./Images/noodleNoBG.png"
              width="90px"
              height="55px"
              className="rounded"
              alt="logo"
            />
          </a>
        </Nav>
        <Navbar.Brand href="/home">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/locations">Locations</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/about">About</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link href="/newpost">New Post</Nav.Link>
            <Nav.Link href="/signin">Sign In</Nav.Link>
          </Nav>
          <Nav>
            <a className="navbar-brand" href="/about">
              <img
                src="/Images/me.JPG"
                className="rounded-circle"
                height="50px"
                alt="Avatar"
              />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
