import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { signUpLocal } from '@frontend/redux/actions';
import './SignUp.scss';

export default function SignUpPage() {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleSubmit = e => {
        e.preventDefault();
        // a dummy function that reflect the input user gives to the form
        console.log(formData);
        const { username, password } = formData;
        dispatch(signUpLocal(username, password));
        setFormData({ username: '', password: '' });
    };

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <Container className="d-flex justify-content-center align-items-center">
            <div className="signup-form-container p-3 m-3">
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
                    <Button type="submit">Sign Up</Button>
                </Form>
            </div>
        </Container>
    );
}
