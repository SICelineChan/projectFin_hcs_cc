import React from "react";

import SideBarMenu from "./SideBarMenu";
import PlaceCards from "./PlaceCards";
import travelplcs from "./travelplcs.json";
import Col from "react-bootstrap/Col";

import Row from "react-bootstrap/esm/Row";

export default function Dashboard() {
  const menu = [
    { text: "Home", aim: "home" },
    { text: "Locations", aim: "locations" },
    { text: "Dashboard", aim: "dashboard" },
    { text: "About Me", aim: "about" },
    { text: "My homes", aim: "multi" },
    { text: "Mexico", aim: "mexico" },
    { text: "Contact", aim: "contact" },
    { text: "Blog", aim: "blog" },
  ];

  return (
    <>
      <div>
        <Row>
          <Col sm={2}>
            <SideBarMenu menu={menu} />
          </Col>
          <Col sm={10}>
            <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              {travelplcs.map((places) => (
                <PlaceCards
                  key={places.id}
                  country={places.country}
                  city={places.city}
                  visitdate={places.visitdate}
                  imageUrl={places.imageUrl}
                />
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
