import React from 'react';
import './Header.css';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand  style={{color:'white', marginLeft:'5px', fontWeight:'bold', fontFamily:"'Dancing Script', cursive"}} href="./">  SHARMIN </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav className="ms-auto fw-bold">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/project">Project</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Nav.Link href="/skill">Skill</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
       </Navbar>   
    );
};

export default Header;