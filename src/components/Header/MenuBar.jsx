import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import logo from '../../images/royalitylogo.png';
const MenuBar = () => {
  const location = useLocation();
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">
          <img src={logo} alt="" className="img-fluid" width="260px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarmain" />
        <Navbar.Collapse id="navbarmain">
          <Nav className="ms-auto" activeKey={location.pathname}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Our Services</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuBar;
