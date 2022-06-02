import React, { Component } from 'react';
import { Badge } from 'reactstrap'

class Show extends Component {
    render() {
        return (
            <>
                <div className='showtop'>
                    <div className='showleft'>
                        <div className='username-pass'>
                            <img width='50' height='50' src='https://i1.sndcdn.com/avatars-si6VMrH1nO5JwyQe-jB5sJw-t500x500.jpg' />
                            BigBodySam
                        </div>
                        <Badge className='nightlife' color="black">
                            Night-Life
                        </Badge>
                        <p className='locations'>Enbrayer Concert @ Queen Bee's</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus malesuada massa, vitae sagittis massa tristique eget. Nullam ornare elementum sapien vitae lacinia. Ut odio libero, accumsan eget ligula sed, egestas suscipit arcu. Vivamus hendrerit tincidunt arcu a faucibus. Maecenas ultrices urna sit amet commodo molestie. </p>
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
                </div>

            </>

        );
    }
}

export default Show;