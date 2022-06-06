import React, { Component } from 'react';
import Singlecard from '../components/Singlecard';
import {Card,CardTitle,CardImg} from 'reactstrap';

class Feed extends Component {



    render() {
        // let nameSam = this.props.users
        // console.log(nameSam)
        // console.log(this.props.users.first)
        // console.log("square above")
        // console.log(this.props.posts)
        // console.log("round above")
        console.log(this.props)

        return (
            <div className="feedpage">
                <div className='feed-cards'>
                    {this.props.posts && 
                    this.props.posts.map((post) => {
                        return (
                            <Singlecard  post={post} />

                      
                        )
                    })}
                    
                </div>
            </div>
        );
    }
}

export default Feed;