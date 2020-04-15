import React from 'react';
import { useDispatch } from 'react-redux';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { loginWithGoogle } from '../redux/actions';
// import './Login.scss';

export default function GoogleLoginBtn() {
    const dispatch = useDispatch();

    const onLoginSucess = res => {
        const { access_token: accessToken } = res.getAuthResponse(true);
        dispatch(loginWithGoogle(accessToken));
    };

    return (
        <>
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                onSuccess={res => onLoginSucess(res)}
                onFailure={err => console.error(err)}
                responseType="token"
                className="google-login-btn"
            />
            <GoogleLogout
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                onLogoutSuccess={() => console.log('on log out success')}
                onFailure={err => console.error(err)}
                className="google-login-btn"
            />
        </>
    );
}
