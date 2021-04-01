import React from "react"
import Layout from "./layout"
import * as Styles from "./Components/about.module.css"

export default function About() {
  return <div>
    <Layout>
      <div className={Styles.page}>
    <h1>About Page</h1>
  <h2>Hosted Voice for your Business</h2>
  <p>A cost-effective cloud based phone system, giving your business greater flexibility and control</p>
  </div>
  </Layout>

  </div>
}
