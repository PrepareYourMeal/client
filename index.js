import React from 'react';
import { Redirect } from "react-router-dom";
import Routes from './router';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from 'authentication/Auth';

const App = () => (
        <BrowserRouter>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </BrowserRouter>
  );


ReactDOM.render(<App />, document.getElementById('root'));

