import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Sidebar from "../components/sidebar/sidebar";
import { graphql, Link } from "gatsby";
import NavBar from "../components/NavigationBar/navbar"
import { Badge, Card, CardBody, CardSubtitle } from 'reactstrap'
import Img from 'gatsby-image';
import { Row, Col } from "reactstrap";
import { slugify } from '../util/utilityFunctions';
import authors from '../util/authors';
import { DiscussionEmbed } from 'disqus-react';

const SinglePost = ({ data, pageContext, location }) => {
    const post = data.markdownRemark.frontmatter;
    const author = authors.find(x => x.name === post.author);
    const baseUrl = 'https://github.com/Lunaticsatoshi/';
    const disqusShortName ='hentailolicon';
    const disqusConfig = {
      identifier: data.markdownRemark.id,
      title: post.title,
      url: baseUrl + pageContext.slug,
    }
    return (
        <Layout>
            <SEO title="SinglePost" keywords={[`gatsby`, `application`, `react`]} />
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
                        <h3 className = "text-center">
                          Share Post
                        </h3>
                        <div className="text-center social-share-links">
                          <ul>
                            <li>
                              <a href={'https://www.facebook.com/sharer/sharer.php?u=' + baseUrl + pageContext.slug } className="facebook" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f fa-2x" />
                              </a>
                            </li>
                            <li>
                              <a href={'https://www.twitter.com/share?u=' + baseUrl + pageContext.slug + '&text=' + post.title + '&via' +'Lunaticsatoshi' } className="twitter" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter fa-2x" />
                              </a>
                            </li>
                            <li>
                              <a href={'https://www.linkedin.com/shareArticle?url=' + baseUrl + pageContext.slug } className="linkedin" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin fa-2x" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <DiscussionEmbed shortname={disqusShortName} config={disqusConfig} />
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
