import React from "react"
import Layout from "../components/layout";
import NavBar from "../components/NavigationBar/navbar"
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <NavBar/>
    <h1>About Us </h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

  </Layout>
)

export default AboutPage