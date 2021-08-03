import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import './navigation.css'
const Navigation = () => {
  return (
  <Navbar bg="light" fixed="top" >
    <Container>
      <Navbar.Brand href="/Audio-Library">Audio Library</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to= '/Audio-Library'>Home</Nav.Link>
        <Nav.Link as={Link} to= '/signIn'>Sign in</Nav.Link>
      </Nav>
    </Container>
  </Navbar>)
}

export default Navigation;