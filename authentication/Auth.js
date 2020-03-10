import React, {useState} from 'react';
import Cookies from 'js-cookie';
export const AuthContext = React.createContext();


const addItem = (key, value = '') => {
    /**
     *  Using the local storage code....
     */
    // if (key) localStorage.setItem(key, value);

    /**
     *  Using the Cookies code...
     */
    if (key) 
        Cookies.set(key, value, {expires: 7});
    
};

const clearItem = key => {
    /**
     *  Using the local storage code....
     */
    // localStorage.removeItem(key);

    /**
     *  Using the Cookies code...
     */
    Cookies.remove(key);
};

const isValidToken = () => {
    /**
     *  Using the local storage code....
     */
    // const token = localStorage.getItem('token');

    /**
     *  Using the Cookies code...
     */
    const token = Cookies.get('token');
    // JWT decode & check token validity & expiration.
    if (token) 
        return true;
    
    return false;
};

const AuthProvider = props => {
    const [loggedIn, setLoggedIn] = useState(isValidToken());
    // const [loggedOut, setLoggedOut] = useState(true);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const tokenAuth = (token, user = {}) => {
        setUser(user);
        setToken(token);
        addItem('token', token);
        setLoggedIn(true);
    };

    const forgetPass = params => {
        console.log(params, 'forget password form Props');
    };
    const changePass = params => {
        console.log(params, 'change password form Props');
    };

    const logOut = () => {
        setUser(null);
        setToken(null);
        clearItem('token');
        setLoggedIn(false);
    };

    return (
    <AuthContext.Provider value={
        {
            loggedIn,
            logOut,
            signIn,
            signUp,
            forgetPass,
            changePass,
            tokenAuth,
            user,
            token
        }
    }>
        <> {
            props.children
        }</>
    </AuthContext.Provider>);
};

export default AuthProvider;
