import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../styles/TopNavbar.css";

const TopNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="py-5"
    >
      <Container>
        <Navbar.Brand href="#home" style={{ fontSize: 40 }}>
          Grant Duntugan
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ fontSize: 24 }}>
            <NavDropdown
              title="Projects"
              id="collasible-nav-dropdown"
              href="#projects"
              bg="dark"
            >
              <NavDropdown.Item href="#impasta-rosta">
                Impasta Rosta
              </NavDropdown.Item>
              <NavDropdown.Item href="#espresso">Espresso</NavDropdown.Item>
              <NavDropdown.Item href="#finger-breaker">
                Finger Breaker
              </NavDropdown.Item>
              <NavDropdown.Item href="#miscellaneous">
                Miscellaneous Projects
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
