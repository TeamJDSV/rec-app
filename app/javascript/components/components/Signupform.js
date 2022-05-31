import React from "react";
import { Button, Input, Label, Form, FormGroup } from 'reactstrap'
export function Signupform({
    csrfToken
}) {
    return <Form className="new-user" id="new-user" action="/users" acceptCharset="UTF-8" method="post">

        <input type="hidden" name="authenticity_token" value={csrfToken} autoComplete="off" />
        <FormGroup>
            <Label for="user-email">Email</Label>
            <Input required type="email" name="user[email]" id="user-email" autoFocus="autofocus" autoComplete="email" />
        </FormGroup>
        <FormGroup>
            <Label for="user-password">PASSWORD</Label>
            <em>(6 characters minimum)</em>
            <br />
            <Input required autoComplete="new-password" type="password" name="user[password]" id="user-password" />
        </FormGroup><FormGroup>
            <Label for="user-password">Password confirmation</Label>
            <em>(6 characters minimum)</em>
            <br />
            <Input required autoComplete="new-password" type="password" name="user[password_confirmation]" id="user-password-confirmation" />
        </FormGroup>
        <FormGroup>
            <Label for="exampleFile">Profile Pic</Label>
            <Input type="file" name="user[file]" id="exampleFile" />
        </FormGroup>
        <div className="actions">
            <Button className='primary' type="submit" name="commit" value="Sign up" data-disable-with="Sign up">MAKE THAT S#!T</Button>

        </div>
    </Form>;
}
