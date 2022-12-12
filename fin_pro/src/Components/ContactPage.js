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
        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1">
              About <span class="text-muted">...this project</span>
            </h2>
            <p class="lead">
              Hey, glad you click here!This is the final project for the full
              stack course at Hamburg Coding School.{" "}
            </p>
          </div>
          <div class="col-md-5">
            <img
              src="./Images/compute.jpg"
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
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
