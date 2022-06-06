import React, { Component } from 'react';
import { Badge } from 'reactstrap'
import { Link } from 'react-router-dom'


class Singlecard extends Component {

    // location: "Queen Bee's", 
    // review:'LIT AF!?', 
    // star_rating: 5, 
    // picture:'https://lh3.googleusercontent.com/z0QkuV4prYyiiqJ_iA-vvQZgSiJ_CwOV7Xv7XSAEpqPLJH4Wv5UFlQsrQkMDL6wiea9-JymoGWGCdgK3UUBs_i1O2MZrm2vbN08b2jrk4fijllYbRV4egZxPIy7zFWqCF_yFw06c=w2400', 
    // day: 'false', 
    // user_id: user1.id 

//     user1 = User.create email: 'test1@test.com', password: 'password', password_confirmation: 'password', name: 'BigBodySam', picture: 'https://i1.sndcdn.com/avatars-si6VMrH1nO5JwyQe-jB5sJw-t500x500.jpg', userLocation:'San Diego', aboutme:"That's all." 

// user2 = User.create email: 'test2@test.com', password: 'password', password_confirmation: 'password', name: 'Darwin', picture: "https://lh3.googleusercontent.com/kiK6RmV1JCI-SxK14DoXFj183X5P013yVH3E01k5l3G-g7V2iYtT0HuS-dbuRLeBAV7eMSVBbezEWwAUqmdose1np2jTflfl-ALYXLVB7eE9tfq-LjljgtaA5c7URBWPNJFqGmrs=w2400", userLocation:'San Diego', aboutme:"That's all +2." 

    render() {

        // let currentUser = this.props.post.user_id
        // console.log(this.props.user)
        // console.log(user)
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
                <div className='feedbottom'>
                    Googlemaps
                </div>

            </div>
        );
    }
}

export default Singlecard;