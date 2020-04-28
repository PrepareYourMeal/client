import React, { Component } from "react";
import Modal from "react-awesome-modal";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Loader from "react-loader-spinner";
import moment from "moment";
import { getUser } from "../services";
import {
  addRecipeToPlanner
} from "../services";

const initialState = {
  date: null,
  isLoaderActive: false,
}

class AddToPlannerModal extends Component {
  state = initialState;

  async componentDidMount() {
    // await this._initiateLoad();
  }

  async componentDidUpdate(prevProps) {
    if (!prevProps.isVisible && this.props.isVisible) {
      // On modal open
      await this._initiateLoad();
    }
    if (prevProps.isVisible && !this.props.isVisible) {
      // On modal close
      this.setState(initialState);
    }
  }

  _initiateLoad = async () => {
    this._toggleLoader(true);
    // Get user data
    const userResponse = await getUser();
    const selectableDates = this._getEnabledDates(userResponse.user.planner);
    this.setState({ selectableDates }, () => {
      this._toggleLoader(false);
    });
  };

  _toggleLoader = (isLoaderActive) => {
    return new Promise((resolve, reject) => {
      this.setState({ isLoaderActive }, () => {
        resolve()
      });
    });
  };

  _dismissModal = () => {
    const { isLoaderActive } = this.state;
    if (!isLoaderActive) {
      this.props.dismissModal();
    }
  };

  _getEnabledDates = userPlanner => {
    // Get all dates of current week
    const startOfWeek = moment().startOf('isoWeek');
    const endOfWeek   = moment().endOf('isoWeek');
    let days = [];
    let day = startOfWeek;
    while (day <= endOfWeek) {
        days.push(day.toDate());
        day = day.clone().add(1, 'd');
    }
    // Remove dates in which the recipe is already added
    const dateIndexsToRemove = this._getAlreadyAddedDays(userPlanner);
    console.log('dateIndexsToRemove :>> ', dateIndexsToRemove);
    days = this._exludeAlreadySelectedDays(days, dateIndexsToRemove);
    return days;
  }

  _getAlreadyAddedDays = userPlanner => {
    const { recipe: {_id: recipeId} } = this.props;
    const daysToExclude = [];
    Object.keys(userPlanner).forEach((day, dayIndex) => {
      if (day!=="date") {
        if (userPlanner[day].findIndex(recipe => recipe._id === recipeId) > -1) {
          // Already added
          daysToExclude.push(dayIndex)
        }
      }
    })
    return daysToExclude;
  }

  _exludeAlreadySelectedDays = (days, dateIndexsToRemove) => {
    let removed = 0;
    dateIndexsToRemove.forEach(dayIndex => {
      days.splice(dayIndex-removed, 1);
      removed++;
    })
    return days;
  }

  onChange = (date) => this.setState({ date });

  _isDateSelectable = ({activeStartDate, date, view }) => {
    const { selectableDates } = this.state;
    if (selectableDates && selectableDates.length) {
      return !(selectableDates.findIndex(selectableDate => selectableDate.getTime() === date.getTime()) > -1);
    } else {
      return false
    }
  }

  _addToPlanner = async () => {
    const { date } = this.state;
    if (date) {
      this._toggleLoader(true);
      const { recipe: {_id: recipeId} } = this.props;      
      const selectedDayOfWeek = this._getDayName(date);
      await addRecipeToPlanner(recipeId, selectedDayOfWeek);
      await this._toggleLoader(false);
      this._dismissModal();
    }
  }

  _getDayName = date => {
    return moment(date).format("dddd").toLowerCase();
  }

  render() {
    const { isLoaderActive } = this.state;
    const { isVisible } = this.props;
    
    return (
      <>
        <Modal
          visible={isVisible}
          width="420"
          height="500"
          effect="fadeInUp"
          onClickAway={this._dismissModal}
        >
          {isLoaderActive ? (
            <div id="planner-modal-loader">
              <Loader type="TailSpin" color="#F04B4C" />
            </div>
          ) : (
            <div id="planner-modal-wrapper">
              <h2>
                Select a date and add a recipe <br /> to your planner
              </h2>
              <div id="planner-modal-calender-wrapper">
                <Calendar 
                  onChange={this.onChange} 
                  value={this.state.date} 
                  tileDisabled={this._isDateSelectable}
                />
              </div>
              <div id="planner-modal-button-wrapper">
                <button id="cancel-btn" onClick={this._dismissModal}>Cancel</button>
                <button id="save-btn" className={!this.state.date? " disabled-btn": ""} onClick={this._addToPlanner}>Add to Planner</button>
              </div>
            </div>
          )}
        </Modal>
      </>
    );
  }
}

export default AddToPlannerModal;
