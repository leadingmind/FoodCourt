import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const rowStyle = {
  "overflow-x": "auto",
  "white-space": "nowrap"
};
const rowItemStyle = {
  display: "inline-block",
  float: "none"
};
export default function Menu() {
  return (
    <Container>
      <Row style={rowStyle}>
        <Item style={rowItemStyle} />
        <Item style={rowItemStyle} />
        <Item style={rowItemStyle} />
        <Item style={rowItemStyle} />
        <Item style={rowItemStyle} />
      </Row>
    </Container>
  );
}
const Item = () => (
  <Card style={{ width: "5rem" }}>
    <Card.Img
      variant="top"
      src="https://image.freepik.com/free-vector/hamburger_53876-25481.jpg"
    />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
    </Card.Body>
  </Card>
);
