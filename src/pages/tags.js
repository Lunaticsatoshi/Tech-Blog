import React from "react"
import Layout from "../components/layout"
import Nav from "../components/navbar/nav";
import SEO from "../components/seo"

const TagPage = () => (
  <Layout>
    <SEO title="Tag" />
    <Nav/>
    <h1>Tags </h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

  </Layout>
)

export default TagPage