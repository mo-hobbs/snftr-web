import React from "react";
import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import SNFTR_logo from './images/SNFTR_ico_wh85.png';


function Header () {
  return (
    <Navbar collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Brand href="/">
          <img
            src={SNFTR_logo}
            alt="SNFTR logo white snifter glass"
            className="nav-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">

            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/bookmarks">Bookmarks</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <NavDropdown.Divider />
            <Nav.Link href="/login">Account
            </Nav.Link>
            {/* <Nav.Link href="/login" onClick={handleLogout}>
              {user ? "Logout" : "Login"}
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;