import React from "react"
import Card from 'react-bootstrap/Card'

import Layout from "./layout"
import Cover from "./images/cover.png"

import * as Styles from "./Components/index.module.css"


export default function Home() {
  return <>
  <Layout>
  
  
  <div class="container text-center" className= {Styles.page}>
    <img className={Styles.imgfluid} src ={Cover} alt="Banner"/>
    <h1 class="text-center">Flexicontact</h1>
  <h2>Hosted Voice for your Business</h2>
  <p>A cost-effective cloud based phone system, giving your business greater flexibility and control</p>


  </div>
  
  <Card border="primary" style={{ width: '18rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Primary Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card border="primary" style={{ width: '18rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Primary Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card border="primary" style={{ width: '18rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Primary Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  </Layout>
  </>
}
