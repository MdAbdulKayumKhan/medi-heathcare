import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import logo from '../../../../images/logo/logo.png';
import pro from '../../../../images/logo/pro.jpg';

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
                        Medi-Heathcare 
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Department</Nav.Link>
                        <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                        {/* <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                        <Nav.Link as={Link} to="/news">News</Nav.Link> */}
                        
                        <Navbar.Brand href="#home">
                        { user.email ?
                            <img
                            alt=""
                            src={user.email &&  user.photoURL === null? pro : user.photoURL}
                            width="40"
                            height="40"
                            className="d-inline-block align-top rounded-circle"
                        /> : ' '}
                        </Navbar.Brand>
                        <Navbar.Text>
                            <Link className="fs-5" style={{textDecoration: 'none', color: 'blue'}} to="#">{user.email && user.displayName === null?  'NameIsNuLL ' : user.displayName }</Link>
                        </Navbar.Text>

                        { user?.email?
                        <Button className="ms-1" onClick={logOut} variant="warning">Log Out</Button>    
                        : <Nav.Link as={Link} to="/login"><Button variant="warning">Log in</Button></Nav.Link>}
                        
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;