import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Container, NavDropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AuthUser from '../AuthUser/AuthUser';
const Header = () => {
    const {user,logout,token} = AuthUser();
    const navigate = useNavigate()
    // const user = JSON.parse(sessionStorage.getItem('user'));

    const logOut = () => {
        // sessionStorage.clear();
        // navigate("/register");

        if(token != undefined){

            logout();
        }
        

    }


    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Eshop-Dashboard</Navbar.Brand>
                    <Nav className="me-auto navbar_warper">

                        {
                            // sessionStorage.getItem('user')
                            
                            user ?
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
                        // sessionStorage.getItem("user")
                        
                        user?
                            <Nav>
                                <NavDropdown title={user.name}>
                                    <NavDropdown.Item onClick={logOut}>
                                        Log out
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav> :
                            null
                    }

                </Container>
            </Navbar>

        </div>
    )
}

export default Header