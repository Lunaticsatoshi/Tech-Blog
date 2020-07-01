import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Row, Col } from "reactstrap";
import Sidebar from "../components/sidebar/sidebar";
import Post from '../components/post/post';
import NavBar from "../components/NavigationBar/navbar"

const tagPosts = ({ data, pageContext }) => {
    const { tag } = pageContext;
    const { totalCount } = data.allMarkdownRemark;
    const pageHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`
    return (
        <Layout>
            <NavBar />
            <div className="blog">
                <h1> {pageHeader} </h1>
                <Row>
                    <Col md="8">
                        {data.allMarkdownRemark.edges.map(({ node }) => (
                            <Post
                                key={node.id}
                                slug={node.fields.slug}
                                title={node.frontmatter.title}
                                author={node.frontmatter.author}
                                date={node.frontmatter.date}
                                body={node.excerpt}
                                tags={node.frontmatter.tags}
                                fluid={node.frontmatter.image.childImageSharp.fluid}
                            />
                        ))}
                    </Col>
                    <Col md="4">
                        <div>
                            <Sidebar />
                        </div>
                    </Col>
                </Row>
            </div>
        </Layout>
    )
}

export const tagQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM Do YYYY")
            author
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 650, maxHeight: 371) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default tagPosts;