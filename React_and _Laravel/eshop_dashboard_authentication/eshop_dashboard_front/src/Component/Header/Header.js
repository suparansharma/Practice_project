import React from 'react'
import { Link } from 'react-router-dom';
import { Container, NavDropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Eshop-Dashboard</Navbar.Brand>
                    <Nav className="me-auto navbar_warper">

                        <Link to="/home">Home</Link>
                        <Link to="/add">Add</Link>
                        <Link to="/update">Update</Link>
                        <Link to="/">Products</Link>
                        <Link to="/search">Search</Link>

                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>



                    </Nav>

                </Container>
            </Navbar>

        </div>
    )
}

export default Header