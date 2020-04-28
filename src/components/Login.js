import React, {useState, Component} from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {loginWithLocalAuth} from '../redux/actions';
import GoogleLoginBtn from './GoogleLoginButton';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import Header from "../containers/Header"


export default function Login() {

    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({username: '', password: ''});
    const handleSubmit = e => {
        e.preventDefault();
        // a dummy function that reflect the input user gives to the form
        console.log(formData);
        const {username, password} = formData;
        dispatch(loginWithLocalAuth(username, password));
        setFormData({username: '', password: ''});
    };

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }


    return (
        <React.Fragment>
            <Header/>

        <section id="LoginSection">
            <div id="LoginBox">
                <h1 id="LoginHeading">
                    Welcome Back!
                </h1>
                <br/>
                <p id="StartPlanningMessage">
                    Log in to your account to start planning.
                </p>
                <div id="Login">
                    <Form id="LoginForm" onSubmit={e => handleSubmit(e)}>
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
                        <div id="SubmitBtn">
                            <input type="submit" name="submit" value="Log In" id="Submit"/>
                        </div>
                        <br/>
                        <GoogleLoginBtn/>

                    </Form>

                    <p id="Message">
                        Want to start planning?
                        <span id="Sign">
                            <a href="/register" id="SignUp">Sign Up</a>
                        </span>
                    </p>
                </div>
            </div>
        </section>
        </React.Fragment>
    
    );

}

