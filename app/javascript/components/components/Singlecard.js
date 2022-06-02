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
                                <img width='50' height='50' src='https://i1.sndcdn.com/avatars-si6VMrH1nO5JwyQe-jB5sJw-t500x500.jpg' />
                                BigBodySam
                            </div>
                            <div className='nametype'>
                                <div>
                                    4 hours ago
                                </div>
                                <Badge className='nightlife' color="black">
                                    Night-Life
                                </Badge>
                            </div>
                        </div>
                        <p className='locations'> Enbrayer Concert @ Queen Bee's</p>
                        <Link className='showlink' to="/show/:id">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus malesuada massa, vitae sagittis massa tristique eget. Nullam ornare elementum sapien vitae lacinia. Ut odio libero, accumsan eget ligula sed, egestas suscipit arcu. Vivamus hendrerit tincidunt arcu a faucibus. Maecenas ultrices urna sit amet commodo molestie. </Link>
                        <div className='staredit'>
                            <div className='stars'>
                                <h3>Rating:</h3>

                                ⭐⭐⭐⭐⭐
                            </div>
                            <div className='editdelete'>
                                <Link to="/editpost">
                                    Edit
                                </Link>

                                <Link>
                                    Delete
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