import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function AppNavbar() {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="shadow-sm custom-navbar"
    >
      <Container fluid="lg">
        <Navbar.Brand as={NavLink} to="/" className="fw-bold fs-4">
          Fivestar
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto text-center">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/menu">Menu</Nav.Link>
            <Nav.Link as={NavLink} to="/staff">Staff</Nav.Link>
            <Nav.Link as={NavLink} to="/delivery">Delivery</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;