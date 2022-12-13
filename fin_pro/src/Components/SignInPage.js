import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function SignInPage() {
  return (
    <body className="text-center">
      <main className="form-signin w-100 m-auto">
        <img
          class="mb-4"
          src="/Images/noodleNoBG.png"
          alt="logo"
          width="150px"
          height="100px"
        />
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        <Container>
          <div className="nav-scroller py-1 mb-2">
            <div className="d-flex gap-2 justify-content-md-center">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Row>
                  <Col xs={7}>
                    <Form.Control placeholder="Username" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="name" />
                  </Col>
                </Row>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </div>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Container>
      </main>
    </body>
  );
}

export default SignInPage;
