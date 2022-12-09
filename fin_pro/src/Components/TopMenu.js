import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function TopMenu({ title }) {
  // const [showNavRight, setShowNavRight] = useState(false);

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

            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <img
              src="/Images/me.JPG"
              className="rounded-circle"
              height="42px"
              alt="Avatar"
            />
          </Nav>

          {/* <Nav>
            <Nav.Link href="/mexico">
              <button type="button" className="btn btn-primary btn-sm">
                Mexico
              </button>
            </Nav.Link>
            <Nav.Link href="/mexico">
              <button type="button" className="btn btn-primary btn-sm">
                Sign In
              </button>
            </Nav.Link>
            <Nav.Link href="/">
              <button type="button" className="btn btn-primary btn-sm">
                New Post
              </button>
            </Nav.Link> */}

          <Nav>
            <Nav.Link href="#deets">New Post</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Sign In
            </Nav.Link>
          </Nav>

          {/* </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
