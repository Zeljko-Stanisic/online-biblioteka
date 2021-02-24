import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Form, Button,} from 'react-bootstrap';
import { ImBooks } from 'react-icons/im';
import './Navbar.scss'

function Navs() {
    return (
        <>
            <Navbar bg="primary" variant="dark" className="nav">
                <Navbar.Brand className='icons' as={Link} to='/'>
                    <ImBooks className="icon" />
                </Navbar.Brand>
                <Navbar.Brand as={Link} to='/'>Online biblioteka</Navbar.Brand>
                <Nav className="mr-auto nav-link">
                </Nav>
                <Form inline>
                    <Nav.Link as={Link} to='/info'>Info</Nav.Link>
                    <Link variant="outline-light" className="button" as={Link} to='/login'>Log in</Link>
                </Form>
            </Navbar>
        </>
    );
}

export default Navs;