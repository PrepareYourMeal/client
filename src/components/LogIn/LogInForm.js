import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { loginWithLocalAuth } from '../../actions';
import GoogleLoginBtn from '../GoogleLoginBtn';

export default function LogInForm() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ username: '', password: '' });
    const handleSubmit = e => {
        e.preventDefault();
        // a dummy function that reflect the input user gives to the form
        console.log(formData);
        const { username, password } = formData;
        dispatch(loginWithLocalAuth(username, password));
        setFormData({ username: '', password: '' });
    };

    return (
        <div className="login-form-container p-3 m-3">
            <Form onSubmit={e => handleSubmit(e)}>
                <FormGroup>
                    <Label for="username">User Name</Label>
                    <Input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Password">Password</Label>
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })}
                        required
                    />
                </FormGroup>
                <Button type="submit">Sign In</Button>
                <p>
                    Don&apos;t have an accound yet?
                    <Link to="/signup"> Sign up now!</Link>
                </p>
            </Form>
            <hr />
            <GoogleLoginBtn />
        </div>
    );
}
