import { Navbar, Container } from "react-bootstrap";

export default function Bannerslider() {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i0.wp.com/wanderwall.in/wp-content/uploads/2021/06/logo-color-red-and-blue.png"
              width="100%"
              height="auto"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
