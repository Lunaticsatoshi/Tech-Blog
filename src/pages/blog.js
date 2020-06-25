import React from 'react';
import { graphql, StaticQuery } from "gatsby";
import { Row, Col } from "reactstrap";
import Post from "../components/post/post";
import Sidebar from "../components/sidebar/sidebar";
import Layout from "../components/layout";
import Nav from "../components/navbar/nav";
import SEO from "../components/seo";

const Blog = () => {
    return (
        <Layout>
        <SEO title="Blogs" />
        <Nav/>
        <div className="blog">
        <Row>
          <Col md="8">
            <StaticQuery query={indexQuery} render={data => {
              return (
                <div>
                  {data.allMarkdownRemark.edges.map(({ node }) => (
                    <Post className="post-card"
                      id={node.id}
                      title={node.frontmatter.title}
                      author={node.frontmatter.author}
                      path={node.frontmatter.path}
                      date={node.frontmatter.date}
                      body={node.excerpt}
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                      tags={node.frontmatter.tags}
                    />
                  )
                  )}
                </div>
              );
            }} />
          </Col>
          <Col md="4">
            <div>
              <Sidebar/>
            </div>
          </Col>
        </Row>
      </div>
      </Layout>
    )
}

const indexQuery = graphql`
query {
  allMarkdownRemark{
   edges{
     node{
       id
       frontmatter{
         title
         date
         author
         path
         tags
         image{
           childImageSharp{
             fluid(maxWidth: 600){
               ...GatsbyImageSharpFluid
             }
           }
         }
       }
       excerpt
     }
   }
  }
 }
`

export default Blog;