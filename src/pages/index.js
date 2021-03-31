import React from "react"
import About from "./about"
import Products from "./products"
import Services from "./services"
import Navbar from 'react-bootstrap/Navbar'

export default function Home() {
  return <>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#">About</Nav.Link>
      <Nav.Link href="#">Products</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#">Action</NavDropdown.Item>
        <NavDropdown.Item href="#">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  
  <div class="container text-center">
    
    <h1 class="text-center">Flexicontact</h1>
  <h2>Hosted Voice for your Business</h2>
  <p>A cost-effective cloud based phone system, giving your business greater flexibility and control</p>

<About/>
<Services/>
<Products/>
  </div>
  </>
}
