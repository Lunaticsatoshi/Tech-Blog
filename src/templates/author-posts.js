import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Sidebar from "../components/sidebar/sidebar";
import { graphql } from "gatsby";
import NavBar from "../components/NavigationBar/navbar";
import Post from "../components/post/post"
import { Row, Col } from "reactstrap";
import authors from '../util/authors';

const authorPosts = ({ data, pageContext }) => {

    const { totalCount } = data.allMarkdownRemark
    const author = authors.find(x => x.name === pageContext.authorName)
    const pageHeader = `${totalCount} Posts by: ${pageContext.authorName}`
    return (
        <Layout>
            <SEO title="author posts" keywords={[`gatsby`, `application`, `react`]} />
            <NavBar />
            <div className="blog">
                <div className="post-container">
                    <h1> {pageHeader} </h1>
                    <div className="division"></div>
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
                            <Sidebar authorImageFluid={data.file.childImageSharp.fluid} postAuthor={author} />
                        </Col>
                    </Row>
                </div>
            </div>
        </Layout>
    )
}

export const authorQuery = graphql`
  query($authorName: String!, $imageUrl: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { author: { eq: $authorName } } }
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
                fluid(maxWidth: 650) {
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
    file(relativePath: { eq: $imageUrl }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default authorPosts;
