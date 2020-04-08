import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import HomePage from "./pages/home-page";
import FullPageLoader from "./containers/full-page-loader";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";
import Header from "./containers/header";
import Footer from "./containers/footer";
import BrowseRecipePage from './pages/browse-recipe-page';
import RecipePage from './pages/recipe-page';
import ContactPage from './pages/contact-page';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div></div>} persistor={persistor}>
        <Router>
          <FullPageLoader></FullPageLoader>
          <div id="wrapper">
            <Header />
            <ToastsContainer
              store={ToastsStore}
              position={ToastsContainerPosition.BOTTOM_RIGHT}
            />
            <Switch>
              <Route exact path="/home" component={HomePage} />
              <Route exact path="/recipes" component={BrowseRecipePage} />
              <Route exact path="/recipe" component={RecipePage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route path="*" render={() => <Redirect to="/home" />} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
