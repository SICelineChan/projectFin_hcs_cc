import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function PlaceCards() {
  return (
    <Row xs={1} md={2} classNameName="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="./Images/Madeira6Oct19.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default PlaceCards;
