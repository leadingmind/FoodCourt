import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

export default function SingleItem() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={12}>
            <Image
              className="header-image"
              src="https://wanderwall.in/wp-content/uploads/2021/07/momo-1.png"
              thumbnail
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12} sm={12}>
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="0"
                  >
                    Veg Momo
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Card.Text>
                      Amazing mix of Cabbage, red onion and soyabin
                    </Card.Text>
                    <Card.Link href="#">Add to Cart</Card.Link>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="1"
                  >
                    Chicken Momo
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <Card.Text>
                      Minced chicken mixed with cabbage and onion stuffed inside
                      dough
                    </Card.Text>
                    <Card.Link href="#">Add to Cart</Card.Link>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
}
