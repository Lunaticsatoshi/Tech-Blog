import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Nav from "../components/NavigationBar/navbar";
import { Row, Col } from "reactstrap";
import Sidebar from "../components/sidebar/sidebar";
import { Badge, Button } from "reactstrap";
import { slugify } from "../util/utilityfunctions";

const TagsPage = ({ pageContext }) => {
    const { tags, tagPostCounts } = pageContext;
    return (
        <Layout>
            <SEO title="All tags" keywords={['tags', 'topics']} />
            <Nav />
            <div className="blog">
                <Row>
                    <Col md="8">
                        <div className="tags">
                            <h1>Search By Tags</h1>
                            <div className="division"></div>
                            <ul>
                                {tags.map((tag) => (
                                    <li key={tag} style={{ marginBottom: '10px' }} className="tags">
                                        <Button className="tags-btn" href={`/tag/${slugify(tag)}`}>
                                            {tag} <Badge color="light">{tagPostCounts[tag]}</Badge>
                                        </Button>
                                    </li>
                                ))}
                            </ul>
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

export default TagsPage;