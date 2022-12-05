import React from "react";
import { Link } from "wouter";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MenuOptions from "./MenuOptions";
import PlaceCards from "./PlaceCards";

export default function SideBarMenu({ menu }) {
  return (
    <Container>
      <Row className="align-items-center">
        <Col xs={2}>
          {menu.map((item, index) => (
            <Link key={index} href={item.aim}>
              <MenuOptions key={item.text} text={item.text} aim={item.aim} />
            </Link>
          ))}
        </Col>

        <Col sm={10}>
          <PlaceCards></PlaceCards>
        </Col>
      </Row>
    </Container>
  );
}
