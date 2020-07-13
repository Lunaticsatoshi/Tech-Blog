import React from 'react';
import Layout from "../components/layout";
import NavBar from "../components/NavigationBar/navbar";
import SEO from "../components/seo";

function contact() {
    return (
        <Layout>
            <SEO title="contact" keywords={[`gatsby`, `application`, `react`]} />
            <NavBar />
            <h1>Contact </h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
        </Layout>
    )
}

export default contact;
