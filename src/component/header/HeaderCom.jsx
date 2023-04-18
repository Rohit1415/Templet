import React from "react";
import "./header.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

function HeaderCom(props) {
  return (
    <div id="baodu">
      <Navbar expand="lg" id="header">
        <Container>
          <Navbar.Brand href="#home" id="header_head">
            ANYAR
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="anker">Home</Nav.Link>
              <Nav.Link href="#home" className="anker">About</Nav.Link>
              <Nav.Link href="#home" className="anker">Services</Nav.Link>
              <Nav.Link href="#home" className="anker">Portfolio</Nav.Link>
              <Nav.Link href="#link" className="anker">Team</Nav.Link>
              <Nav.Link href="#link" className="anker">Pricing</Nav.Link>
              <Nav.Link href="#link" className="anker">Blog</Nav.Link>

              <NavDropdown title="Drop Down" id='ankeee' >
                <NavDropdown.Item href="#action/3.1" className="drop">
                    Drop Dwon 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="drop">
                    Drop Dwon 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="drop">
                   Drop Dwon 3
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="drop">
                   Drop Dwon 4
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="drop">
                   Drop Dwon 5
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#link" className="anker">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderCom;
