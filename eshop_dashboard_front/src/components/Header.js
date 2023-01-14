import React from 'react'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Eshop-Dashboard</Navbar.Brand>
        <Nav className="me-auto navbar_warper">
          {
            localStorage.getItem('user-info') ?
              <>
                <Link to="/home">Home</Link>
                <Link to="/add">
                    
                </Link>
                <Link to="/update">Update</Link>
              </>
              :
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>


              </>
          }


        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header