import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";

export default function MyNavBar() {
  const links = [
    {
      to: "",
      title: "Home"
    },
    {
      to: "properties",
      title: "Properties"
    },
    {
      to: "agents",
      title: "Agents"
    }
  ];

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/" style={{ cursor: "pointer" }}>
          <Navbar.Brand className="fs-2">House Haven</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fs-4">
            {links.map((link) => (
              <LinkContainer to={`/${link.to}`} key={link.to}>
                <Nav.Link>{link.title}</Nav.Link>
              </LinkContainer>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
