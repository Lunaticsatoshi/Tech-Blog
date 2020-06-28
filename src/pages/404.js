import React from "react";
import { Row, Col } from "reactstrap";
import Layout from "../components/layout";
import { Link } from 'gatsby';
import Sidebar from "../components/sidebar/sidebar";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Row>
      <Col md="8">
        <h1>Oops!! Something Went wrong</h1>
        <p>Go Back to Home Page</p>
        <Link className=" btn btn_med" to={'/'}>Go Back</Link>
      </Col>
      <Col md="4">
        <Sidebar />
      </Col>
    </Row>
  </Layout>
)

export default NotFoundPage
