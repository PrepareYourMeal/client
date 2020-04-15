import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import store from './redux';
import HomePage from './pages/HomePage';
import FullPageLoader from './containers/FullPageLoader';
import Header from './containers/Header';
import Footer from './containers/Footer';
import BrowseRecipePage from './pages/BrowseRecipePage';
import RecipePage from './pages/RecipePage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/SignupPage';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <FullPageLoader />
                <div id="wrapper">
                    <Header />
                    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_RIGHT} />
                    <Switch>
                        <Route exact path="/home" component={HomePage} />
                        <Route exact path="/recipes" component={BrowseRecipePage} />
                        <Route exact path="/recipe" component={RecipePage} />
                        <Route exact path="/contact" component={ContactPage} />
                        <Route exact path="/login" component={LoginPage} />
                        <Route path="*" render={() => <Redirect to="/home" />} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
