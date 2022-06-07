import React, { Component } from 'react';
import { Badge,Card, CardTitle, NavItem, CardImg } from 'reactstrap';

class Show extends Component {
    render() {
        let {post} = this.props;
        return (
            <>
                {post && (
                    <Card key={post.id}>
                    <CardImg
                        variant="top"
                        alt="listing image"
                        src={post.image}
                        width="180px"
                        height="286px"
                        fluid
                    />
                    <CardTitle> Available Now </CardTitle>
                    <h3>{post.location}</h3>
                    <h3>{post.review}</h3>
                    <h3>{post.star_rating}</h3>
                    <NavItem>
                        <a href={`/show/${post.id}`} className="nav-link">Go back</a>
                    </NavItem>
                    </Card>
                )}
            </>
        )
    }
}

export default Show;

