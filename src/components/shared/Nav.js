import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { Nav, Navbar, Container, NavItem } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect fluid expand="lg" id="mainNav">
      <Container>
        <Navbar.Brand>
          <Link className="nav-link Gugi" to="/">
            OH WEB DEV
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav pullRight>
            <NavItem className="nav-item">
              <Link className="nav-link Gugi" to="/">
                Home
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link className="nav-link Gugi" to="/Work">
                Work
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link className="nav-link Gugi" to="/About">
                About
              </Link>
            </NavItem>

            <NavItem className="nav-item">
              <Link className="nav-link Gugi" to="/Contact">
                Contact
              </Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
