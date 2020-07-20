import React from 'react';
import { graphql, StaticQuery } from "gatsby";
import Cards from "../card/card";

const LatestPost = () => {
    return (
        <div className = "post-container">
            <div className = "section-head">
                <h3 className = "section-title">Latest Posts</h3>
            </div>
            <div className="division"></div>
            <div  className = 'section-content'>
            <StaticQuery query={indexQuery} render={data => {
              return (
                <div>
                  {data.allMarkdownRemark.edges.map(({ node }) => (
                    <Cards className="post-card"
                      id={node.id}
                      title={node.frontmatter.title}
                      author={node.frontmatter.author}
                      slug ={node.fields.slug}
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
            </div>
        </div>
    )
}

const indexQuery = graphql`
query {
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC}
    limit: 4
    ){
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
             fluid(maxWidth: 300){
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

export default LatestPost;