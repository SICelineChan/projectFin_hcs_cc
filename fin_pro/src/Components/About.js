import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  return (
    <>
      <Container>
        <div className="nav-scroller py-1 mb-2">
          <div className="d-flex gap-2 px-4 py-5 my-3 justify-content-md-center">
            <img
              className="d-block mx-auto mb-4"
              src="/Images/noodleNoBG.png"
              alt="my noodle logo"
              width="170px"
              height="100px"
            />
          </div>
        </div>
      </Container>

      <Container>
        <Row className="px-4 py-5 my-5 text-center">
          <Col>
            <h2 className="display-5 fw-bold">
              About <span className="text-muted">...me</span>
            </h2>
            <p className="lead">
              Hey, it's Celine and this is a React app for the final project! I
              have used React Bootstrap for much of the layout here and there
              will be updates for this app with a Login page and will try to
              merge the local JSON with MongoDB. My background has been
              completely different before I started coding "seriously" in July.
              It made me realised how much I like a challenge and how my problem
              solving skills go. Although it will still be a long way and many
              more daunting tasks ahead. Still, very excited!
            </p>
            <h4 className="featurette-heading fw-normal lh-1">
              And <span className="text-muted">...this photo?</span>
            </h4>
            <p className="lead">
              The best noodle breakfast (in my opinion), this was from Vietnam
              and I don't think I have any other ones to compare with this one!
            </p>
          </Col>
          <Col>
            <img
              src="./Images/noobfast.jpg"
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid rounded mx-auto"
              width="400"
              height="400"
              alt="rice noodle breakfast"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
