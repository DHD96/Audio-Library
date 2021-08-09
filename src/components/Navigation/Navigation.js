import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import './navigation.css';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

class Navigation extends Component {
  render() {
    return (
      <Navbar bg="light" fixed="top" >
        <Container>
          <Navbar.Brand href="/audioLibrary">Audio Library</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/audioLibrary'>Home</Nav.Link>
            {!this.props.isAuthenticated ?
            <Nav.Link as={Link} to='/signIn'>Sign In</Nav.Link>:
            <Nav.Link as={Link} to='/audioLibrary' onClick={this.props.onLogout}>Sign Out</Nav.Link>
          }
          </Nav>
        </Container>
      </Navbar>)
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.auth_logout())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);