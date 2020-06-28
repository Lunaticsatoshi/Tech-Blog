import React from "react"
import Layout from "../components/layout";
import NavBar from "../components/NavigationBar/navbar"
import SEO from "../components/seo";

const TagPage = () => (
  <Layout>
    <SEO title="Tag" />
    <NavBar/>
    <h1>Tags </h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

  </Layout>
)

export default TagPage