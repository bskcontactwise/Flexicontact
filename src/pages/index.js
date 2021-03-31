import React from "react"
import About from "./about"
import Products from "./products"
import Services from "./services"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Home() {
  return <>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">FlexiContact</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#Products">Products</Nav.Link>
     
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
