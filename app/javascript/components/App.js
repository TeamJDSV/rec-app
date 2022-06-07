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
import Singlecard from './components/Singlecard'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      posts: [],
      users: [],
    };
  }


  componentDidMount() {
    this.readPost();
    this.readUser();
  }
  
    readPost = () => {
    fetch("/posts")
      .then((response) => response.json())
      .then((payload) => this.setState({ posts: payload }))
      .catch((errors) => console.log("Post read errors:", errors));
  };
  

  readUser = () => {
    fetch("/users")
      .then((response) => response.json())
      .then((payload) => this.setState({ users: payload }))
      .catch((errors) => console.log("User read errors:", errors));
  };

  createPost = (newPost) => {
    fetch("/posts", {
      body: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(() => this.readPost())
    .catch(errors => console.log("Post create errors:", errors))
  }

  deletePost = (id) => {
    fetch(`/posts/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json())
    .then(() => this.readPost())
    .catch(errors => console.log("delete errors:", errors))
  }

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
      csrfToken
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    console.log("new_user_route:", new_user_route)
    console.log("sign_in_route:", sign_in_route)
    console.log("sign_out_route:", sign_out_route)
    console.log(csrfToken);
    return (
      <>

        <Router>
            <Header {...this.props} />
          <Switch>
            <Route exact path="/"  render= {() => <Home {...this.props} />} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/newpost" render={(props) => <NewPost createPost={this.createPost} />} />

            <Route path="/show/:id" render={(props) => {
              let id = +props.match.params.id
              let post = this.state.posts.find(post => post.id === +id)
              return <Show post={post} deletePost={this.deletePost}/>
            }}/>


            {logged_in &&
              <Route path="/feed" render= {() => <Feed posts={this.state.posts} users={this.state.users}/>} />
            }
            
            {logged_in && 
              <Route path="/myfeed" render= {() => <MyFeed posts={this.state.posts} users={this.state.users}/>} />
            }
            {logged_in &&
              <Route path="/newpost" render={(props) => <NewPost createPost={this.createPost} />} />
            }
            {logged_in &&
              <Route path="/editpost" component={EditPost} />
            }
            <Route component={NotFound}/>

          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App