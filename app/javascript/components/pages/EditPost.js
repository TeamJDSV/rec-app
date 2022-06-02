import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Badge } from 'reactstrap'
import { NavLink } from 'react-router-dom';

class EditPost extends Component {
    render() {
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
                        />
                    </FormGroup>
                    <FormGroup >
                        <Label for="status">
                            What do you have to say?
                        </Label>
                        <Input className='new-text'
                            id="exampleText"
                            name="text"
                            placeholder='What do you have to say?'
                            type="textarea"
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
                        <Label>CHANGE THAT S#!T ?</Label>
                        <NavLink to="/feed">
                        <Input
                            className='newbutton'
                            type="submit"
                            value='CHANGE THAT S#!T !' />
                        </NavLink>
                    </div>
                </div>
            </Form >

        );
    }
}


export default EditPost;