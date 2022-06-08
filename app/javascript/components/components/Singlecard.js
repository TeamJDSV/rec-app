import React, { Component } from 'react';
import { Badge } from 'reactstrap'
import { Link } from 'react-router-dom'


class Singlecard extends Component {

  
    render() {
        return (
            <div className='feed-card'>
                <div className='feed-card-top'>
                    <div >
                        <div className='uppercard'>
                            <div className='username-pass'>
                                <img width='50' height='50' src={this.props.post.user.picture} />
                                {this.props.post.user.name}
                            </div>
                            <div className='nametype'>
                                <div>
                                    4 hours ago
                                </div>
                                <Badge className='nightlife' color="black">
                                {/* {this.props.post.day} */}
                                {this.props.post.user_id}
                                </Badge>
                            </div>
                        </div>
                        <p className='locations'> {this.props.post.location}</p>
                        <Link className='showlink' to="/show/:id"> {this.props.post.review}</Link>
                        <div className='staredit'>
                            <div className='stars'>
                                <h3>Rating:</h3>

                                {this.props.post.star_rating}
                            </div>
                            <div className='editdelete'>
                                <Link to="/editpost">
                                    Edit
                                </Link>

                                <Link onClick={() =>
                                    this.props.handleDelete()}>Delete
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Singlecard;