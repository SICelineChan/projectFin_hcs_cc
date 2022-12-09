import React from "react";
import { Link } from "wouter";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MenuOptions from "./MenuOptions";
import PlaceCards from "./PlaceCards";
import travelplcs from "./travelplcs.json";

export default function SideBarMenu({ menu }) {
  return (
    <Container>
      <Row className="flex flex-col w-full h-full align-items-start">
        <Col xs={2}>
          {menu.map((item, index) => (
            <Link key={index} href={item.aim}>
              <MenuOptions key={item.text} text={item.text} aim={item.aim} />
            </Link>
          ))}
        </Col>

        <Col sm={10}>
          {travelplcs.map((places) => (
            <PlaceCards
              key={places.id}
              country={places.country}
              city={places.city}
              visitdate={places.visitdate}
              imageUrl={places.imageUrl}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
