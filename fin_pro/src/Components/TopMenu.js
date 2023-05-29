import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import SideBarMenu from "./SideBarMenu";

export default function TopMenu({ title }) {
  const menu = [
    { text: "Home", aim: "home" },
    { text: "Locations", aim: "locations" },
    { text: "Dashboard", aim: "dashboard" },
    { text: "About Me", aim: "about" },
    { text: "Contact", aim: "contact" },
   
  ];

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
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
          <SideBarMenu className="py-2" menu={menu} />
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
