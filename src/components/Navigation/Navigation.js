import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import './navigation.css'
const Navigation = () => {
  return (
  <Navbar bg="light" fixed="top" >
    <Container>
      <Navbar.Brand href="/Audio-Library">Audio Library</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/Audio-Library">Home</Nav.Link>
        <Nav.Link href="/signIn">Sign in</Nav.Link>
      </Nav>
    </Container>
  </Navbar>)
}

export default Navigation;