import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { slugify } from '../../util/utilityfunctions';
import { Link } from 'gatsby';
import { Badge } from 'reactstrap';
import Grid from '@material-ui/core/Grid';
import Img from 'gatsby-image';

const Cards = ({ id, title, author, slug, date, body, fluid, tags }) => {
    return (
        <div className="blog-post" key={id}>
            <div className="blog-post__img">
                <Img fluid={fluid} className="image-card-top" />
            </div>
            <div className="blog-post__info">
                <div className="blog-post__date">
                    <span>{date}</span>
                </div>
                <h1 className="blog-post__title"><Link to={slug} className="card-title">{title}</Link></h1>
                <p> by{''}<span className="card-author">{author}</span></p>
                <p className="blog-post__text">{body}</p>
                <Link className="btn_med blog-post__cta" to={slug}>Read More</Link>
            </div>
        </div>
    )
}

export default Cards;
