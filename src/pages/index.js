import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";
import '../styles/index.scss';
import LatestPost from "../components/latest/latestpost";
import NavBar from "../components/NavigationBar/navbar";
import Header from "../components/header/header";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NavBar />
    <Header />
    <div className="blog">
    <LatestPost />
    </div>

  </Layout>
)


export default IndexPage
