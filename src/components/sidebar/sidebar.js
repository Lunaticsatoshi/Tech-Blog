import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { Card, CardTitle, Form, FormGroup, Input, CardBody, Button } from 'reactstrap';
import { graphql, StaticQuery } from "gatsby";

const Sidebar = () => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle className="text-center text-uppercase mb-3">
                        NewsLetter
                    </CardTitle>
                    <Form className = "text-center">
                        <FormGroup>
                            <Input type = "email" name = "email" placeholder = "Your Email"/>
                        </FormGroup>
                        <Button className = "btn_med">
                            Subscribe
                        </Button>
                    </Form>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle className = "text-center text-uppercase advert-title">
                        Advertisement
                    </CardTitle>
                    <img src ="https://via.placeholder.com/320x200" alt = "advert" style = {{ width: "100%" }}></img>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle className = "text-center text-uppercase mb-3">
                        Recent Posts
                    </CardTitle>
                    <StaticQuery query = {sidebarQuery} 
                        render = {(data) => {
                            return (
                                <div>
                                    {data.allMarkdownRemark.edges.map(({node}) => (
                                        <Card key = {node.id}>
                                            <Link to = {node.frontmatter.path}>
                                                <Img className = "card-image-top" fluid = {node.frontmatter.image.childImageSharp.fluid} />
                                            </Link>
                                            <CardBody>
                                                <CardTitle className = "recent-title">
                                                    <Link to = {node.frontmatter.path}>
                                                        {node.frontmatter.title}
                                                    </Link>
                                                </CardTitle>
                                            </CardBody>
                                        </Card>
                                    )
                                    )}
                                </div>
                            );
                        }}/>
                </CardBody>
            </Card>

        </div>
    )
}

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
                    path
                    image{
                        childImageSharp{
                            fluid(maxWidth: 300){
                              ...GatsbyImageSharpFluid
                            }
                          }
                    }
                }
            }
        }
    }
  }
`

export default Sidebar;
