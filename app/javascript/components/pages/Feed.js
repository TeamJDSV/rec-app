import React, { Component } from 'react';
import Singlecard from '../components/Singlecard';
import {Card,CardTitle,CardImg} from 'reactstrap';
import {  NavLink } from 'react-router-dom'


class Feed extends Component {



    render() {
        console.log(this.props)
        return (
            <div className="feedpage">
                <div className='feed-cards'>
                    {this.props.posts && 
                    this.props.posts.map((post) => {
                        return (
                            <NavLink to={`/show/${post.id}`} key={post.id}>

                            <Singlecard  post={post} />
                            </NavLink>
                        )
                    })}
                    
                </div>
            </div>
        );
    }
}

export default Feed;