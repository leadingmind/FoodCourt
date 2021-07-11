import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeIcon from "@material-ui/icons/Home";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import TocIcon from "@material-ui/icons/Toc";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const BottomNavigation = () => (
  <Container className="fixed-bottom menu" fluid="xs">
    <Row>
      <Col className="pr-0 col-3 menu-col ">
        <Container className="justify-content-center">
          <HomeIcon />
          <Col>Home</Col>
        </Container>
      </Col>
      <Col className="px-0 col-3 menu-col">
        <Container>
          <LocalOfferIcon />
          <Col>Offers</Col>
        </Container>
      </Col>
      <Col className="px-0 col-3 menu-col">
        <Container>
          <TocIcon />
          <Col>Orders</Col>
        </Container>
      </Col>
      <Col className="pl-0 col-3 menu-col">
        <Container>
          <ShoppingCartIcon />
          <Col>Cart</Col>
        </Container>
      </Col>
    </Row>
  </Container>
);
export default BottomNavigation;
