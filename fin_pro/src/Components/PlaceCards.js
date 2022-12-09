import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";
import CardGroup from "react-bootstrap/CardGroup";

export default function PlaceCards({ country, city, visitdate, imageUrl }) {
  return (
    <>
      <Row xs={1} md={2} classNameName="g-4">
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={imageUrl} style={{ width: "16rem" }} />
            <Card.Body>
              <Card.Title>{country}</Card.Title>
              <Card.Text>
                We travelled to {city} on {visitdate}. For more detail go here:
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Row>
    </>
  );
}
