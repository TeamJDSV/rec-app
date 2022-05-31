import React, { Component } from 'react';
import Singlecard from '../components/Singlecard';
class Feed extends Component {
    render() {
        return (
            <div className="feedpage">
                <div className='feed-cards'>
                    <Singlecard />
                    <Singlecard />
                    <Singlecard />
                    <Singlecard />
                    <Singlecard />
                </div>
            </div>
        );
    }
}

export default Feed;