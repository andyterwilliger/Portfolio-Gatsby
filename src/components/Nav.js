import * as ReactBootStrap from 'react-bootstrap';
import React from 'react';
import { Link } from 'gatsby';
import '../styles/global.css'
import { LinkContainer } from 'react-router-bootstrap'

function Nav() {
  return (
    <div id='nav-div'>
      <ReactBootStrap.Navbar   className='color-nav' activeClassName='nav_bar_link_active' collapseOnSelect expand="lg" bg="primary-red" variant="dark">
        <ReactBootStrap.Container>
          <Link className='nav_bar_link' to='/' style={{ fontSize: '150%', textDecoration:'none', paddingRight: '0.5rem', paddingLeft: '0.5rem' }}>
            Home
            </Link>
          
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="me-auto">
             
             <Link className='nav_bar_link' activeClassName='nav_bar_link_active' to ='/about' style={{ fontSize: '150%' , textDecoration:'none' ,paddingRight: '0.5rem', paddingLeft: '0.5rem'  }} >
               About
               </Link>
            
             
               <Link className='nav_bar_link' activeClassName='nav_bar_link_active' to = '/projects' style={{ fontSize: '150%' , textDecoration:'none' ,paddingRight: '0.5rem', paddingLeft: '0.5rem'  }}> 
                Projects
                </Link>
            
             
             <Link className='nav_bar_link' activeClassName='nav_bar_link_active' to='/contact' style={{ fontSize: '150%' , textDecoration:'none' ,paddingRight: '0.5rem', paddingLeft: '0.5rem'  }}> 
                Contact
                </Link>
                
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </div>
  )
}

export default Nav;