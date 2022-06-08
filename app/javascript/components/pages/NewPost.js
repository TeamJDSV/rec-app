import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Badge, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class NewPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            newPost: {
                location: "",
                review: "",
                star_rating: "",
                picture: "",
            },
              submitted: false
          }
      }
      handleChange = (e) => {
          let { newPost } = this.state
          newPost[e.target.location] = e.target.value
          this.setState({newPost: newPost})
        }
        handleSubmit = () => {
          this.props.createPost(this.state.newPost)
          this.setState({submitted: true})
        }

    render() {
        console.log(this.state)

        return (
            <Form className='form-fullpage-create'>
                <div className='new-form'>
                    <div className='username-pass'>
                        <img width='50' height='50' src='https://i1.sndcdn.com/avatars-si6VMrH1nO5JwyQe-jB5sJw-t500x500.jpg' />
                        BigBodySam
                    </div>
                    <div className='badges'>
                        <FormGroup check>
                            <Label >
                                <Input
                                    name="radio1"
                                    type="radio"
                                />
                                {' '}
                                <Badge className='daylife' color="white">
                                    Day-Life
                                </Badge>
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label>
                                <Input
                                    name="radio1"
                                    type="radio"
                                />
                                {' '}

                                <Badge className='nightlife' color="black">
                                    Night-Life
                                </Badge>
                            </Label>
                        </FormGroup>
                    </div>

                    <FormGroup>
                        <Label for="location">
                            Where you going?
                        </Label>
                        <Input
                            id="location"
                            name="location"
                            placeholder="Where you going?"
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.newPost.location}
                        />
                    </FormGroup>
                    <FormGroup >
                        <Label for="status">
                            What do you have to say?
                        </Label>
                        <Input 
                            id="status"
                            name="status"
                            placeholder="What do you have to say?"
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.newPost.review}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">
                            Rating

                        </Label>
                        <Input
                            id="exampleSelect"
                            name="select"
                            type="select"
                            onChange={this.handleChange}
                            value={this.state.newPost.star_rating}
                        >
                            <option>
                                1
                            </option>
                            <option>
                                2
                            </option>
                            <option>
                                3
                            </option>
                            <option>
                                4
                            </option>
                            <option>
                                5
                            </option>
                        </Input>
                    </FormGroup>


                </div>
                <div className='rightside-new'>

                    <div className='draganddrop'>
                        <label for="exampleFile">YOU GOT A PIC?</label>
                        <input type="file" name="user[file]" id="exampleFile" />
                    </div>
                    <div className='signupbutton'>
                        <div >ALL GOOD?</div>
                        <Button 
                        onClick={this.handleSubmit} 
                        name="submit">
                        Submit
                        </Button>
                            
                        {this.state.submitted && <Redirect to="/feed" />}
                    </div>

                </div>
            </Form >

        );
    }
}

export default NewPost;