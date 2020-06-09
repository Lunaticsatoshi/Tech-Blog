import React from "react"
import Nav from "../components/navbar/nav";
import FrontPage from "../components/frontpage/frontpage"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post/post"
import { graphql, StaticQuery } from "gatsby";
import {Row, Col} from "reactstrap";
import '../styles/index.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Nav />
      <FrontPage />
     <Row>
       <Col md="8">
       <StaticQuery query={indexQuery} render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post className= "post-card"
                id={node.id}
                title={node.frontmatter.title}
                author={node.frontmatter.author}
                path={node.frontmatter.path}
                date={node.frontmatter.data}
                body={node.excerpt}
                fluid={node.frontmatter.image.childImageSharp.fluid}
              />
            )
            )}
          </div>
        );
      }} />
       </Col>
       <Col md="4">
         <div style = {{width: "100%", height: "100%", backgroundColor: "rgba(255,255,255,0.4)"}}></div>
       </Col>
     </Row>
    </div>

  </Layout>
)

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
export default IndexPage
