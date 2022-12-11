import React from "react";
import { Link } from "wouter";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import MenuOptions from "./MenuOptions";

export default function SideBarMenu({ menu }) {
  return (
    <Container className="fluid">
      <Nav className="flex-column">
        <Nav.Item>
          {menu.map((item, index) => (
            <Link key={index} href={item.aim}>
              <MenuOptions key={item.text} text={item.text} aim={item.aim} />
            </Link>
          ))}
        </Nav.Item>
      </Nav>
    </Container>
  );
}
