import { Navbar, Nav, Container } from 'react-bootstrap';


function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="mb-4 shadow-sm">
      <Container>
        <Navbar.Brand href="/">Fivestar Restaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Nav.Link href="/staff">Staff</Nav.Link>
            <Nav.Link href="/delivery">Delivery</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;