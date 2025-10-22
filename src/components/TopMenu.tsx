'use client';

import { Container, Navbar, Nav } from 'react-bootstrap';

const TopMenu = () => (
  <Navbar expand="lg" id="topMenu">
    <Container fluid>
      <Navbar.Brand href="#">
        <img
          src="http://courses.ics.hawaii.edu/ics314f25/morea/ui-frameworks/murphyslogowhite.png"
          alt="Murphy's Logo"
          height="50"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarLinks" />

      <Navbar.Collapse id="navbarLinks">
        <Nav className="ms-auto d-flex align-items-center">
          <Nav.Link href="#" className="text-white">Home</Nav.Link>
          <Nav.Link href="#" className="text-white">About Us</Nav.Link>
          <Nav.Link href="#" className="text-white">St. Patrick&apos;s Day</Nav.Link>
          <Nav.Link href="#" className="text-white">To Go Ordering</Nav.Link>
          <Nav.Link href="#" className="text-white">
            <i className="fab fa-instagram" />
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            <i className="fab fa-facebook-f" />
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            <i className="fab fa-twitter" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default TopMenu;
