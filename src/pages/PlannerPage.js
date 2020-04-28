import DailyPlanner from "../components/PlannerSelect";
import React, { Component } from "react";
import NavBar from "../components/Navbar";
import {
  getUser,
  removeRecipeFromPlanner,
} from "../services";
import { showLoader, hideLoader } from "../redux/actions/LoaderData";
import { fetchRecipes } from "../redux/actions";
import { connect } from "react-redux";

class PlannerSelect extends Component {
  state = {
    plannerDays: [],
  };

  async componentDidMount() {
    window.scrollTo(0, 0);
    this.props.showLoader("Loading your recipes!");
    await this._loadPlanner();
    this.props.hideLoader();
  }

  _loadPlanner = () => {
    return new Promise(async (resolve, reject) => {
      const plannerDays = await this._getPlannerData();
      if (plannerDays) {
        this.setState({ plannerDays }, async () => {
          resolve();
        });
      } else {
        resolve();
      }
    });
  };

  _getPlannerData = async () => {
    try {
      const userResponse = await getUser();
      const plannerData = this._formatPlannerData(userResponse.user.planner);
      return plannerData;
    } catch (error) {}
  };

  _formatPlannerData = (planner) => {
    const formattedPlanner = {};
    Object.keys(planner).forEach((day) => {
      if (day !== "date") {
        if (!formattedPlanner[day]) {
          formattedPlanner[day] = [];
        }
        formattedPlanner[day] = this._formatRecipes(planner[day]);
      }
    });
    return formattedPlanner;
  };

  _formatRecipes = (recipes) => {
    return recipes.map((recipe) => {
      return {
        ...recipe,
        name: recipe.title || "",
        recipeLink: "/auth/recipe?id=" + recipe._id,
        imageLink: recipe.imageUrl,
        time: recipe.readyInMinutes ? recipe.readyInMinutes + " mins" : "",
      };
    });
  };

  _removePlanner = async (recipe, day) => {
    this.props.showLoader("Removing from your planner!");
    await removeRecipeFromPlanner(recipe._id, day);
    await this._loadPlanner();
    this.props.hideLoader();
  };

  render() {
    const { plannerDays } = this.state;
    return (
      <React.Fragment>
        <NavBar {...this.props} />
        <DailyPlanner
          plannerDays={plannerDays}
          removePlanner={this._removePlanner}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipesData: state.recipesData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showLoader: (text) => dispatch(showLoader(text)),
    hideLoader: () => dispatch(hideLoader()),
    fetchRecipes: () => dispatch(fetchRecipes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlannerSelect);
