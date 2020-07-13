import React from 'react';
import { Link } from 'gatsby';
import { Card, CardTitle, CardBody, Button } from 'reactstrap';

function tagCard() {
    return (
        <div>
            <Card>
                <CardBody className="tags-card">
                    <CardTitle className="text-center text-uppercase mb-3">
                        Tags
                    </CardTitle>
                    <ul className="tags">
                        <li>
                            <Link className="tags-btn" to="/tag/code">Code</Link>
                        </li>
                        <li>
                            <Link className="tags-btn" to="/tag/design">Design</Link>
                        </li>
                        <li>
                            <Link className="tags-btn" to="/tag/tech">Tech</Link>
                        </li>
                    </ul>
                    <Button className="btn_med" href="/tags">More</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default tagCard
