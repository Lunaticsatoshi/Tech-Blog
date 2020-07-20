import React from "react"
import Layout from "../components/layout";
import NavBar from "../components/NavigationBar/navbar";
import Sidebar from "../components/sidebar/sidebar";
import SEO from "../components/seo";
import { Button, Card, CardText, CardBody, CardTitle, Row, Col } from 'reactstrap';
import AuthorImage from '../images/Profile.jpg';
import authors from '../util/authors'
import { slugify } from '../util/utilityFunctions';

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <NavBar />
    <div className="blog">
      <section className="about">
        <Row>
          <Col md="8">
            <div className="post-container">
              <h1>About Us</h1>
              <div className="division"></div>
              <div className="about__section">
                <p className="about__subtitle">
                  We are All Stack. We make Technology simplified for everyone through our Blogs and Projects.
                </p>
                <p className="about__subtitle">We love contributing to opensource on <a href="https://github.com/Lunaticsatoshi">Github</a></p>
              </div>
              <h1>Our Team</h1>
              <div className="division"></div>
              <Row className="mb-4">
                <div className="col-md-3">

                </div>
                <div className="col-md-8">
                  <Card style={{ minHeight: '100%' }}>
                    <img src={AuthorImage} style={{ maxWidth: '100%' }} alt="Author profile" className="about-author" />
                    <CardBody>
                      <CardTitle>{authors[0].name}</CardTitle>
                      <CardText>{authors[0].bio}</CardText>
                      <Button className="btn_med" href={`/author/${slugify(authors[0].name)}`}>See More</Button>
                    </CardBody>
                  </Card>
                </div>
              </Row>
            </div>
          </Col>
          <Col md="4">
            <Sidebar />
          </Col>
        </Row>
      </section>
    </div>

  </Layout>
)

export default AboutPage