import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../styles/TopNavbar.css";

const TopNavbar = (props) => {
  const setPage = props.setPage;

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
      className="py-5"
    >
      <Container>
        <Navbar.Brand
          onClick={() => setPage("Home")}
          href="#home"
          style={{ fontSize: 40, marginRight: 50 }}
        >
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
              <NavDropdown.Item
                href="#impasta-rosta"
                onClick={() => setPage("ImpastaRosta")}
              >
                Impasta Rosta
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#espresso"
                onClick={() => setPage("Espresso")}
              >
                Espresso
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#finger-breaker"
                onClick={() => setPage("FingerBreaker")}
              >
                Finger Breaker
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#miscellaneous"
                onClick={() => setPage("Miscellaneous")}
              >
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
