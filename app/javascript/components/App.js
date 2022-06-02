import React, { Component } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Feed from './pages/Feed'
import MyFeed from './pages/MyFeed'
import Show from './pages/Show'
import NewPost from './pages/NewPost'
import EditPost from './pages/EditPost'
import AboutUs from './pages/AboutUs'
import NotFound from './pages/NotFound'


import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends Component {
    constructor(props){
      super(props)
      this.state = {
      // posts: posts
    }
  }

  render() {
    return(
      <>
        <Router>
          <Header {...this.props} />
          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route path="/feed" component={Feed} />
            <Route path="/myfeed" component={MyFeed} />
            <Route path="/show/:id" component={Show} />
            <Route path="/newpost" component={NewPost} />
            <Route path="/editpost" component={EditPost} />
            <Route path="/aboutus" component={AboutUs} />
            <Route component={NotFound}/>
          </Switch>
          <Footer {...this.props} />
        </Router>
        
      </>
    )
  }
}

export default App