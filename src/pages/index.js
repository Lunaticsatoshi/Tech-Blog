import React from "react"
import Nav from "../components/navbar/nav";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../components/layout.css";
import '../styles/index.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Nav />
    </div>

  </Layout>
)


export default IndexPage
