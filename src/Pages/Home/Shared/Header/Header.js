import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import logo from '../../../../images/logo/logo.png';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                        MediBangladesh
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Department</Nav.Link>
                        <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                        <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                        <Nav.Link as={Link} to="/news">News</Nav.Link>
                        { user?.email?
                        <Button onClick={logOut} variant="warning">Log Out</Button>    
                        : <Nav.Link as={Link} to="/login">log In</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user.email && user.displayName} {console.log(user.email)}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;