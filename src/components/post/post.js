import React from 'react'
import { Link } from 'gatsby'
import { Badge, Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap'
import Img from 'gatsby-image';
import { slugify }  from '../../util/utilityfunctions';

const Post = ({ id, title, author, slug, date, body, fluid, tags}) => {

  return (
    <Card key = {id}>
    <Img className="card-image-top" fluid={fluid} />
    <CardBody>
      <CardTitle className="card-title">
        <Link to={slug}>{title}</Link>
      </CardTitle>
      <CardSubtitle>
        <span className="date">{date}</span> by{''}
        <p><span className="card-author">{author}</span></p>
      </CardSubtitle>
      <CardText className="card-body">{body}</CardText>
      <ul className = "post-tags">
        {tags.map(tag => (
          <li key = {tag}>
            <Link to={`/tags/${slugify(tag)}`}>
              <Badge color="primary" className="text-uppercase">
              {tag}
              </Badge>
            </Link>
          </li>
        ))}
      </ul>
      <Link to={slug} className="btn btn-outline-danger float-right ">Read More</Link>
    </CardBody>
  </Card>
  )
}

export default Post
