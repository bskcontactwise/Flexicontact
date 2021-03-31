import React from "react"
import About from "./about"
import Products from "./products"
import Services from "./services"

export default function Home() {
  return <div class="container text-center"><h1 class="text-center">Flexicontact</h1>
  <h2>Hosted Voice for your Business</h2>
  <p>A cost-effective cloud based phone system, giving your business greater flexibility and control</p>

<About/>
<Services/>
<Products/>
  </div>
}
