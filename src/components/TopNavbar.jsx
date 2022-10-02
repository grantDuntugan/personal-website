import { Container, Nav, Navbar } from "react-bootstrap";
import "../styles/TopNavbar.css";

const TopNavbar = (props) => {
  const setPage = props.setPage;

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
      className="py-5 d-flex justify-content-center"
    >
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ fontSize: 24 }}>
            <Nav.Link href="#about-me" onClick={() => setPage("AboutMe")}>
              About Me
            </Nav.Link>
            <Nav.Link
              href="#impasta-rosta"
              onClick={() => setPage("ImpastaRosta")}
            >
              Impasta Rosta
            </Nav.Link>
            <Nav.Link href="#espresso" onClick={() => setPage("Espresso")}>
              Espresso
            </Nav.Link>
            <Nav.Link
              href="#finger-breaker"
              onClick={() => setPage("FingerBreaker")}
            >
              Finger Breaker
            </Nav.Link>
            <Nav.Link href="#ucla-jccc" onClick={() => setPage("UCLA JCCC")}>
              UCLA JCCC
            </Nav.Link>
            <Nav.Link href="https://github.com/grantDuntugan" target="_blank">
              GitHub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
