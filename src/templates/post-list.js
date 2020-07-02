import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Post from '../components/post/post';
import { Row, Col } from "reactstrap";
import Sidebar from "../components/sidebar/sidebar";
import NavBar from "../components/NavigationBar/navbar";
import Pagination from "../components/pagination/paginationLinks";

const postList = (props) => {
    const posts = props.data.allMarkdownRemark.edges;
    const { currentPage, numberOfPages } = props.pageContext;
    return (
        <Layout>
            <NavBar />
            <div className="blog">
                <h1> {`Page: ${currentPage}`} </h1>
                <Row>
                    <Col md="8">
                        {posts.map(({ node }) => (
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
                <Pagination currentPage={currentPage} numberOfPages={numberOfPages} />
            </div>
        </Layout>
    )
}

export const postListQuery = graphql`
  query postListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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

export default postList;
