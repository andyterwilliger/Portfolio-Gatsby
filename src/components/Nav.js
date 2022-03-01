import * as ReactBootStrap from 'react-bootstrap';
import React from 'react';
import { Link } from 'gatsby';
import '../styles/global.css'

function Nav() {
  return (
    <div id='nav-div'>
      <ReactBootStrap.Navbar className='color-nav' collapseOnSelect expand="lg" bg="primary-red" variant="dark">
        <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand style={{ fontSize: '150%' }} href="/">Home</ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="me-auto">
             <ReactBootStrap.Nav.Link style={{ fontSize: '150%' }} href="/about">About</ReactBootStrap.Nav.Link>
             <ReactBootStrap.Nav.Link style={{ fontSize: '150%' }} href="/projects">Projects</ReactBootStrap.Nav.Link>
             <ReactBootStrap.Nav.Link style={{ fontSize: '150%' }} eventKey={2} href="/contact"> 
                Contact
                </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </div>
  )
}

export default Nav;