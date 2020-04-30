import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {signUpLocal} from '../redux/actions';
import GoogleLoginBtn from './GoogleLoginButton';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import Header from "../containers/Header"

export default function SignUp() {

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
    
    <React.Fragment>
                    <Header/>

        <section id="LoginSection">
            <div id="SignUpBox">
                <h1 id="SignUpHeading">
                    Join the Family!
                </h1>
                <br/>
                <p id="SignUpStartPlanningMessage">
                    Lets start planning today!.
                </p>
                <div id="Login">
                <Form id="LoginForm"
                        onSubmit={
                            e => handleSubmit(e)
                    }>
                        <div id="LoginEmail">
                            <div id="EmailSection">
                            <FormGroup>

                            <Label for="username" id="EmailLabel">User Name</Label>
                                <Input
                                    type="text"
                                    id="EmailInput"
                                    name="username"
                                    value={formData.username}
                                    onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                    required
                                />
                              </FormGroup>
                              </div>
                        </div>
                        <br/>
                        <div id="LoginPassword">
                            <div id="PasswordSection">
                            <FormGroup>

                            <Label for="Password" id="PasswordLabel">Password</Label>
                                <Input
                                    type="password"
                                    id="PasswordInput"
                                    name="password"
                                    value={formData.password}
                                    onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                    required
                                />
                               </FormGroup>
                            </div>
                        </div>
<br/>
                        <div id="LoginPassword">
                            <div id="PasswordSection">
                            <FormGroup>

                            <Label for="Password" id="PasswordLabel">Confirm Password</Label>
                                <Input
                                    type="password"
                                    id="PasswordInput"
                                    name="confirm_password"
                                    
                                />
                               </FormGroup>
                            </div>
                        </div>
                        <br/>
                        <div id="SubmitBtn">
                            <input type="submit" name="submit" value="Log In" id="Submit"/>
                        </div>
                        <br/>
                        <GoogleLoginBtn/>
                    </Form>
                    <p id="Message">
                        Already have an account?
                        <span id="Sign">
                            <a href="/login" id="SignUp"> Login</a>
                        </span>
                    </p>
                </div>
            </div>
        </section>


    </React.Fragment>
    );

}

