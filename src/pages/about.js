import React from "react"
import Layout from "../components/layout"
import Nav from "../components/navbar/nav";
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Nav/>
    <h1>About Us </h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

  </Layout>
)

export default AboutPage