import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Nav from "../components/NavigationBar/navbar";
import { Badge, Button } from "reactstrap";
import { slugify } from "../util/utilityfunctions";

const TagsPage = ({ pageContext }) => {
    const { tags, tagPostCounts } = pageContext;
    return (
        <Layout>
            <SEO title="All tags" keywords={['tags', 'topics']} />
             <Nav />
                <div>
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
        </Layout>
    )
}

export default TagsPage;