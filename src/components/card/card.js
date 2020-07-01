import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { slugify } from '../../util/utilityfunctions';
import { Link } from 'gatsby';
import { Badge } from 'reactstrap';
import Grid from '@material-ui/core/Grid';
import Img from 'gatsby-image';

const Cards = ({ id, title, author, slug, date, body, fluid, tags }) => {
    return (
        <div className= "card-container" key={id}>
            <Grid container>
                <Grid items xs={12} md={6}>
                    <Img fluid={fluid} className="image-card-top" />
                </Grid>
                <Grid items xs={12} md={6}>
                    <div className="content-body">
                        <div className = "body-contents">
                        <Link to={slug} className="card-title">{title}</Link>
                        <p> by{''}<span className="card-author">{author}</span></p>
                        <ul className="post-tags">
                            {tags.map(tag => (
                                <li key={tag}>
                                    <Link to={`/tag/${slugify(tag)}`}>
                                        <Badge color="primary" className="text-uppercase">
                                            {tag}
                                        </Badge>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="body">{body}</div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
