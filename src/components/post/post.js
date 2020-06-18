import React from 'react'
import { Link } from 'gatsby'
import { Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap'
import Img from 'gatsby-image'
import '../../styles/index.scss';

const Post = ({ id, title, author, path, date, body, fluid }) => {

  return (
    <Card>
    <Img className="card-image-top" fluid={fluid} />
    <CardBody>
      <CardTitle>
        <Link to={path}>{title}</Link>
      </CardTitle>
      <CardSubtitle>
        <span className="date">{date}</span> by{''}
        <span className="card-author">{author}</span>
      </CardSubtitle>
      <CardText className="card-body">{body}</CardText>
      <Link to={path} className="btn btn-outline-danger float-right text-uppercase">Read More</Link>
    </CardBody>
  </Card>
  )
}

export default Post
