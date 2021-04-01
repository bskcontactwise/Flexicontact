import React from 'react'

import Footer from './Components/Footer'
import Navbarb from './Components/navbar'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Link} from 'gatsby'


function Layout({children}) {
    return (
        <>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand > <Link to="/">FlexiContact</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
    <Link to="/products">Products</Link>
      <Link to="/about">About</Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>

<Navbarb/>

{children}
<Footer/>
            
        </>
    )
}

export default Layout