import React from "react"
import Nav from "../components/navbar/nav";
import FrontPage from "../components/frontpage/frontpage"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className = "container">
      <Nav/>
      <FrontPage/>
    </div>

  </Layout>
)

export default IndexPage
