import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import CardGroup from "react-bootstrap/CardGroup";
import { Route } from "wouter";
import NextBlog from "./NextBlog";

export default function PlaceCards({ id, country, city, visitdate, imageUrl }) {
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        <CardGroup style={{ width: "60rem", padding: "3px" }}>
          <Card.Img
            className="card-img-end"
            src={imageUrl}
            style={{ width: "15rem" }}
          />
          <Card className="text-center">
            <Card.Body>
              <Card.Title>{country}</Card.Title>
              <Card.Text>
                We travelled to {city} on {visitdate}. For more detail go here:
              </Card.Text>
              <Card.Text>
                <a href="/blog">Blog</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Row>
    </>
  );
}
