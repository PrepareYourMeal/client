import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./assets/custom.css";
import "./assets/homepage.css";
import "./assets/login.css";
import LoginPage from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import SignupPage from "./components/SignUp";
import Footer from "./containers/Footer";
import FullPageLoader from "./containers/FullPageLoader";
import BrowseRecipePage from "./pages/BrowseRecipesPage";
import ContactPage from "./pages/ContactPage";
import DashboardPage from "./pages/DashboardPage";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import IngredientsPage from "./pages/IngredientsPage";
import PlannerPage from "./pages/PlannerPage";
import RecipePage from "./pages/RecipePage";
import { persistor, store } from "./redux/store";
import PrivateRecipePage from "./pages/PrivateRecipePage";


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div></div>} persistor={persistor}>
        <Router>
          <FullPageLoader></FullPageLoader>
          <div id="wrapper">
            <Switch>              
              <PublicRoute exact path="/home" component={HomePage} />
              <PublicRoute exact path="/recipes" component={BrowseRecipePage} />
              <PublicRoute exact path="/recipe" component={RecipePage} />
              <PublicRoute exact path="/contact" component={ContactPage} />
              <PublicRoute exact path="/register" component={SignupPage} />
              <PublicRoute exact path="/login" component={LoginPage} />

              <PrivateRoute exact path="/favorites" component={FavoritesPage} />
              <PrivateRoute exact path="/auth/recipe" component={PrivateRecipePage} />
              <PrivateRoute exact path="/ingredients" component={IngredientsPage} />
              <PrivateRoute exact path="/planner" component={PlannerPage} />
              <PrivateRoute exact path="/dashboard" component={DashboardPage} />

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
