import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Task Tracker</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#tasks">Tasks</Nav.Link>
        <Nav.Link href="#profile">Profile</Nav.Link>
      </Nav>
    </Navbar>
  );
}
