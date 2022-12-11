import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import SideBarMenu from "./SideBarMenu";
import Card from "react-bootstrap/Card";
import Footer from "./Footer";

const menu = [
  { text: "Home", aim: "home" },
  { text: "Locations", aim: "locations" },
  { text: "Dashboard", aim: "dashboard" },
  { text: "About Me", aim: "about" },
  { text: "My homes", aim: "multi" },
  { text: "Mexico", aim: "mexico" },
  { text: "Contact", aim: "contact" },
];

export default function About() {
  return (
    <>
      <div>
        <Row>
          <Col sm={2}>
            <SideBarMenu menu={menu} />
          </Col>
          <Col sm={10}>
            <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              <Card className="text-center" style={{ width: "70rem" }}>
                <Card.Body>
                  <Card.Title>Hello</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    I am Celine
                  </Card.Subtitle>
                  <Card.Text>Here will be some text...</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
      <Footer></Footer>
    </>
  );
}
