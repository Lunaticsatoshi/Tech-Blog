import React from 'react';
import { graphql, StaticQuery } from "gatsby";
import { Row, Col } from "reactstrap";
import Post from "../components/post/post";
import Sidebar from "../components/sidebar/sidebar";
import Layout from "../components/layout";
import NavBar from "../components/NavigationBar/navbar"
import SEO from "../components/seo";
import Pagination from "../components/pagination/paginationLinks";
import TagCard from "../components/tagcard/tagcard";

const Blog = () => {
  const postsPerPage = 2;
  let numberOfPages;
  return (
    <Layout>
      <SEO title="Blogs" keywords={[`gatsby`, `application`, `react`]}/>
      <NavBar />
      <div className="blog">
        <Row>
          <Col md="8">
            <StaticQuery query={indexQuery} render={data => {
              numberOfPages = Math.ceil(
                data.allMarkdownRemark.totalCount / postsPerPage
              )
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
              <TagCard />
              <Sidebar />
            </div>
          </Col>
        </Row>
        <Pagination currentPage={1} numberOfPages={numberOfPages} />
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
query {
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC}
    limit: 4
    )
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