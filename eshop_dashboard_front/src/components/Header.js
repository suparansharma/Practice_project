import React from 'react'
import { Container, NavDropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

  let userInfo =JSON.parse(localStorage.getItem("user-info"));
  const navigate = useNavigate();
  const logOut = () =>{
    localStorage.clear()
    navigate("/register")
   
  }
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Eshop-Dashboard</Navbar.Brand>
        <Nav className="me-auto navbar_warper">
          {
            localStorage.getItem('user-info') ?
              <>
                <Link to="/home">Home</Link>
                <Link to="/add">Add</Link>
                <Link to="/update">Update</Link>
                <Link to="/">Products</Link>
                <Link to="/search">Search</Link>
              </>
              :
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
          }


        </Nav>
        {
          localStorage.getItem("user-info") ?
            <Nav>
              <NavDropdown title={userInfo.name}>
                <NavDropdown.Item onClick={logOut}>
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav> :
            null
        }
      </Container>
    </Navbar>
  )
}

export default Header