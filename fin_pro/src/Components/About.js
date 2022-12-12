import React from "react";
import Container from "react-bootstrap/esm/Container";
import SideBarMenu from "./SideBarMenu";

const menu = [
  { text: "Home", aim: "home" },
  { text: "Locations", aim: "locations" },
  { text: "Dashboard", aim: "dashboard" },
  { text: "About Me", aim: "about" },
  { text: "New Post", aim: "multi" },
  { text: "Contact", aim: "contact" },
  { text: "Main Blog", aim: "blog" },
];

export default function About() {
  return (
    <>
      <Container>
        <div className="nav-scroller py-1 mb-2">
          <nav className="d-flex gap-2 justify-content-md-center">
            <SideBarMenu className="py-2" menu={menu} />
          </nav>
        </div>
      </Container>

      <hr></hr>
      <Container>
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              About <span className="text-muted">...this project</span>
            </h2>
            <p className="lead">
              Hey, glad you click here! I am Celine. This is the final project
              for the full stack course at Hamburg Coding School.
            </p>
            <h4 className="featurette-heading fw-normal lh-1">
              What about <span className="text-muted">...this photo?</span>
            </h4>
            <p className="lead">
              The best noodle breakfast! It has all the flavours, sweet, salty,
              sour and bitter (the coffee! ☕)
            </p>
          </div>
          <div className="col-md-5">
            <img
              src="./Images/noobfast.jpg"
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="400"
              height="400"
              alt="rice noodle breakfast"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
