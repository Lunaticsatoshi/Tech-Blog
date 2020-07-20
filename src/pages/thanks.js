import React from 'react';
import Sidebar from "../components/sidebar/sidebar";
import Layout from "../components/layout";
import SEO from "../components/seo";
import NavBar from "../components/NavigationBar/navbar"
import { Row, Col } from "reactstrap";

function Thanks() {
    return (
        <Layout>
            <SEO title="Thanks" keywords={[`gatsby`, `application`, `react`]} />
            <NavBar />
            <div className="blog">
                <Row>
                    <Col md="8">
                        <div className='contact__thanks'>
                            <h1>Thank You!! for reaching out to us. I will get in contact with you soon</h1>
                        </div>
                    </Col>
                    <Col md="4">
                    <Sidebar />
                    </Col>
                </Row>
            </div>
        </Layout>
    )
}

export default Thanks
