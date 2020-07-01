import React from 'react';
import { graphql, StaticQuery } from "gatsby";
import { Row, Col } from "reactstrap";
import Post from "../components/post/post";
import Sidebar from "../components/sidebar/sidebar";
import Layout from "../components/layout";
import NavBar from "../components/NavigationBar/navbar"
import SEO from "../components/seo";

const Blog = () => {
  return (
    <Layout>
      <SEO title="Blogs" />
      <NavBar />
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
                      slug={node.fields.slug}
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
              <Sidebar />
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
query {
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC})
    {
   edges{
     node{
       id
       frontmatter{
         title
         date(formatString: "MMM Do YYYY")
         author
         tags
         image{
           childImageSharp{
             fluid(maxWidth: 600){
               ...GatsbyImageSharpFluid
             }
           }
         }
       }
       fields{
          slug
       }
       excerpt
     }
   }
  }
 }
`

export default Blog;