import React, { Component } from 'react';
import { Badge,Card, CardTitle, NavItem, CardImg } from 'reactstrap';

class Show extends Component {
    render() {
        let {post} = this.props;
        console.log(this.props)
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


{/* SHOW DOES NOT WORK WHILE LOGGED IN 
                 
 <div className='showtop'>
                    <div className='showleft'>
                        <div className='username-pass'>
                            <img width='50' height='50' src='https://i1.sndcdn.com/avatars-si6VMrH1nO5JwyQe-jB5sJw-t500x500.jpg' />
                            BigBodySam
                        </div>
                        <Badge className='nightlife' color="black">
                            Night-Life
                        </Badge>
                        <p className='locations'>this.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus malesuada massa, vitae sagittis massa tristique eget. Nullam ornare elementum sapien vitae lacinia. Ut odio libero, accumsan eget ligula sed, egestas suscipit arcu. Vivamus hendrerit tincidunt arcu a faucibus. Maecenas ultrices urn sit amet commodo molestie. </p>
                        <div>
                            <div className='stars'>
                                <h3>Rating:</h3>

                                ⭐⭐⭐⭐⭐
                            </div>
                        </div>
                    </div>

                    <div className='showright'>

                        <img
                            alt="Card image cap"
                            src="https://lh3.googleusercontent.com/z0QkuV4prYyiiqJ_iA-vvQZgSiJ_CwOV7Xv7XSAEpqPLJH4Wv5UFlQsrQkMDL6wiea9-JymoGWGCdgK3UUBs_i1O2MZrm2vbN08b2jrk4fijllYbRV4egZxPIy7zFWqCF_yFw06c=w2400"
                            height="407"
                            width="auto"
                        />
                    </div>
                </div>
                <div className='showbottom'>
                    Googlemaps
                </div>  */}