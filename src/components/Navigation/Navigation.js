import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import './navigation.css';
import * as actions from '../../store/actions/index';
import { useSelector, useDispatch } from 'react-redux';

const Navigation = (navigationProps) => {
  const  token = useSelector(state => state.token);
  console.log(token);
  const dispatch = useDispatch();
  return (
    <Navbar bg="light" fixed="top" >
      <Container>
        <Navbar.Brand href="/audioLibrary">Audio Library</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/audioLibrary'>Home</Nav.Link>
          {token ===null || token.length === 0?
            <Nav.Link as={Link} to='/signIn'>Sign In</Nav.Link> :
            <Nav.Link as={Link} to='/audioLibrary' onClick={()=>{
              return dispatch(actions.auth_logout());
            }}>Sign Out</Nav.Link>
          }
        </Nav>
      </Container>
    </Navbar>)

}


export default Navigation;