import React from 'react';
import { GoogleLogin } from 'react-google-login';
import './Login.scss';

export default function GoogleLoginBtn() {
    return (
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            onSuccess={res => console.log(res, res.isSignedIn())}
            onFailure={err => console.error(err)}
            className="google-login-btn"
        />
    );
}
