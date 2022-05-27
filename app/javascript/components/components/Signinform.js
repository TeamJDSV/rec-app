import React from "react";
import { Button, Input, Label, Form, FormGroup } from 'reactstrap'
export function Signinform({
    csrfToken
}) {
    return <Form className="new_user" id="new_user" action="/users/sign_in" acceptCharset="UTF-8" method="post">

        <input type="hidden" name="authenticity_token" value={csrfToken} autoComplete="off" />
        <FormGroup>
            <Label for="user_email">Email</Label>
            <Input required type="email" name="user[email]" id="user_email" autoFocus="autofocus" autoComplete="email" />
        </FormGroup>
        <FormGroup>
            <Label for="user_password">PASSWORD</Label>
            <em>(6 characters minimum)</em>
            <br />
            <Input required autoComplete="new-password" type="password" name="user[password]" id="user_password" />
        </FormGroup>


        <FormGroup>
            <Label for="user_remember_me">Remember Me</Label>
            <Input type="checkbox" name="user[remember_me]" id="user_remember_me" value="1" />
            <Input name="user[remember_me]" type="hidden" value="0" autoComplete="off" />
        </FormGroup>
        <div className="actions">
            <Button className='primary' type="submit" name="commit" value="Sign in" data-disable-with="Sign in">SIGN IN</Button>

        </div>
    </Form>;
}
