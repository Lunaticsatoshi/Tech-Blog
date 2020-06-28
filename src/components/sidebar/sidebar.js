import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { Card, CardTitle, Form, FormGroup, Input, CardBody, Button, CardText, } from 'reactstrap';
import { graphql, StaticQuery } from "gatsby";

const Sidebar = ({ authorImageFluid, postAuthor }) => (
    <div>
        {postAuthor && (
            <Card>
                <Img className="card-image-top" fluid={authorImageFluid} />
                <CardBody>
                    <CardTitle className="text-center text-uppercase mb-3 author-name">
                        {postAuthor.name}
                    </CardTitle>
                    <CardText>{postAuthor.bio}</CardText>
                    <div className="author-social-links text-center">
                        <ul>
                            <li>
                                <a
                                    href={postAuthor.linkedIn}
                                    targe="_blank"
                                    rel="noopener noreferrer"
                                    className="linkedin"
                                >
                                    <i className="fab fa-linkedin fa-lg" />
                                </a>
                            </li>
                            <li>
                                <a
                                  href={postAuthor.github}
                                  targe="_blank"
                                  rel="noopener noreferrer"
                                  className="linkedin"
                                >
                                <i class="fab fa-github fa-lg"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </CardBody>
            </Card>
        )}
        <Card>
            <CardBody>
                <CardTitle className="text-center text-uppercase mb-3">
                    NewsLetter
                    </CardTitle>
                <Form className="text-center">
                    <FormGroup>
                        <Input type="email" name="email" placeholder="Your Email" />
                    </FormGroup>
                    <Button className="btn_med">
                        Subscribe
                        </Button>
                </Form>
            </CardBody>
        </Card>
        <Card>
            <CardBody>
                <CardTitle className="text-center text-uppercase advert-title">
                    Advertisement
                    </CardTitle>
                <img src="https://via.placeholder.com/320x200" alt="advert" style={{ width: "100%" }}></img>
            </CardBody>
        </Card>
        <Card>
            <CardBody>
                <CardTitle className="text-center text-uppercase mb-3">
                    Recent Posts
                    </CardTitle>
                <StaticQuery query={sidebarQuery}
                    render={(data) => {
                        return (
                            <div>
                                {data.allMarkdownRemark.edges.map(({ node }) => (
                                    <Card key={node.id} className="recent-posts">
                                        <Link to={node.fields.slug}>
                                            <Img className="card-image-top" fluid={node.frontmatter.image.childImageSharp.fluid} />
                                        </Link>
                                        <CardBody>
                                            <CardTitle className="recent-title">
                                                <Link to={node.fields.slug}>
                                                    {node.frontmatter.title}
                                                </Link>
                                            </CardTitle>
                                        </CardBody>
                                    </Card>
                                )
                                )}
                            </div>
                        );
                    }} />
            </CardBody>
        </Card>

    </div>
)

const sidebarQuery = graphql`
  query sidebarQuery{
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC}
        limit: 4
    ) {
        edges{
            node{
                id
                frontmatter {
                    title
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
            }
        }
    }
  }
`

export default Sidebar;
