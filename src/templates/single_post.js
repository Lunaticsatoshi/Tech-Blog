import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Sidebar from "../components/sidebar/sidebar";
import { graphql, StaticQuery, Link } from "gatsby";
import NavBar from "../components/NavigationBar/navbar"
import { Badge, Card, CardBody, CardSubtitle } from 'reactstrap'
import Img from 'gatsby-image';
import { Row, Col } from "reactstrap";
import { slugify } from '../util/utilityFunctions';
import authors from '../util/authors';

const SinglePost = ({ data, pageContext, location }) => {
    const post = data.markdownRemark.frontmatter;
    const author = authors.find(x => x.name === post.author);
    return (
        <Layout>
            <SEO title="SinglePost" />
            <NavBar />
            <div className="blog">
                <h1>{post.title}</h1>
                <Img className="image-top" fluid={post.image.childImageSharp.fluid} />
                <Row>
                    <Col md="8">
                        <Card>
                            <CardBody>
                            <ul className="post-tags">
                                    {post.tags.map(tag => (
                                        <li key={tag}>
                                            <Link to={`/tag/${slugify(tag)}`}>
                                                <Badge color="primary" className="text-uppercase">{tag}</Badge>
                                            </Link>
                                        </li>
                                    ))}

                                </ul>
                                <CardSubtitle>
                                    <span className="text-info">{post.date}</span> by{''}
                                    <span className="text-info">{post.author}</span>
                                </CardSubtitle>
                                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} className="card-body"/>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Sidebar authorImageFluid={data.file.childImageSharp.fluid} postAuthor = {author}/>
                    </Col>
                </Row>
            </div>

        </Layout>
    )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!,  $imageUrl: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date(formatString: "MMM Do YYYY")
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
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

export default SinglePost;
