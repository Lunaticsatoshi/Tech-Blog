import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../components/layout.css";
import '../styles/index.scss';
import LatestPost from "../components/latest/latestpost";
import NavBar from "../components/NavigationBar/navbar"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <NavBar />
      <LatestPost />
    </div>

  </Layout>
)


export default IndexPage
