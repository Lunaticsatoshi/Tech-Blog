import React from "react"
import Nav from "../components/navbar/nav";
import FrontPage from "../components/frontpage/frontpage"
import Layout from "../components/layout";
import SEO from "../components/seo";
import Featured from "../components/featured/featured"
import "../components/layout.css";
import '../styles/index.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Nav />
      <FrontPage />
      <Featured />
    </div>

  </Layout>
)

export default IndexPage
