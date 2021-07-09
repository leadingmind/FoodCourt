import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Menu() {
  return (
    <Container>
      <Row>
        <Item />
      </Row>
    </Container>
  );
}
const Item = () => (
  <Card style={{ width: "18rem" }}>
    <Card.Img
      variant="top"
      src="https://image.freepik.com/free-vector/hamburger_53876-25481.jpg"
    />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
    </Card.Body>
  </Card>
);
