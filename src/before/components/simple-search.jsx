import React, { Component } from "react";
import { deepClone } from "../helper-methods";
const initialState = {
  selectedCategory: "all",
  selectedIngredients: [],
  recipeNeedsToHave: "AND",
  searchedText: ""
};

class SimpleSearch extends Component {
  state = initialState;

  componentDidMount() {
    this._registerToSelectUpdateEvents();
  }

  _onCategoryUpdate = selectedCategory => {
    this.setState({ selectedCategory }, () => {
      this._notifyParent();
    });
  };

  _onSearchUpdate = searchedText => {
    this.setState({ searchedText });
  };

  _notifyParent = () => {
    this.props.onSearchTrigger(this.state);
  };

  _registerToSelectUpdateEvents = () => {
    const $ = window.$;
    // Listen to ingredients change
    $(".chosen-select").change(() => {
      let options = [];
      $(".chosen-select")
        .children("option:selected")
        .each(function() {
          options.push($(this).val());
        });
      const selectedIngredients = this._excludeOne(options);
      this.setState({ selectedIngredients }, () => {
        this._notifyParent();
      });
    });
    // Listen to category change
    $(".chosen-select-no-single").change(() => {
      const selectedCategory = $(".chosen-select-no-single")
        .children("option:selected")
        .val();
      this.setState({ selectedCategory }, () => {
        this._notifyParent();
      });
    });
    // Listen to ingredient include-exclude change
    $(".ingredient-exclude-include").change(() => {
      const recipeNeedsToHave = $(".ingredient-exclude-include")
        .children("option:selected")
        .val();
      this.setState({ recipeNeedsToHave }, () => {
        this._notifyParent();
      });
    });
  };

  _excludeOne = options => {
    const formattedOptions = deepClone(options);
    const optionIndex = options.findIndex(item => item === "1");
    if (optionIndex > -1) {
      formattedOptions.splice(optionIndex, 1);
    }
    return formattedOptions;
  };

  render() {
    const { categoryOptions, ingredientsOptions, searchedText } = this.props;
    const { selectedCategory } = this.state;

    return (
      <>
        {/* Choose Category */}
        <div className="select">
          <label>Choose category</label>
          <select
            data-placeholder="Choose Category"
            className="chosen-select-no-single"
            onChange={e => this._onCategoryUpdate(e.target.value)}
            value={selectedCategory}
          >
            <option value={"all"}>All</option>
            {categoryOptions.map((categoryOption, categoryOptionIndex) => (
              <option value={categoryOption.value} key={categoryOptionIndex}>
                {categoryOption.label}
              </option>
            ))}
          </select>
        </div>
        {/* Choose ingredientsOptions */}
        <div className="select included-ingredients">
          <label>
            Select one or more ingredients that should be included in recipe
          </label>
          <select
            data-placeholder="Included Ingredients"
            className="chosen-select"
            multiple
            onChange={e => console.log("e :", e)}
          >
            {ingredientsOptions.map(
              (ingredientOption, ingredientOptionIndex) => (
                <option
                  value={ingredientOption.key}
                  key={ingredientOptionIndex}
                >
                  {ingredientOption.label}
                </option>
              )
            )}
          </select>
        </div>
        {/* Choose */}
        <div className="select">
          <label>Recipe needs to have</label>
          <select
            data-placeholder="Choose Category"
            className="ingredient-exclude-include"
          >
            <option value={"AND"}>All of selected ingredients </option>
            <option value={"OR"}>Any of selected ingredients</option>
          </select>
        </div>
        <div className="clearfix" />
        {/* Search Input */}
        <nav className="search-by-keyword">
          <form action="#" onSubmit={e => e.preventDefault()}>
            <button onClick={this._notifyParent}>
              <span>Search for Recipes</span>
              <i className="fa fa-search" />
            </button>
            <input
              className="search-field"
              type="text"
              placeholder="Search by keyword"
              value={searchedText}
              onInput={e => this._onSearchUpdate(e.target.value)}
            />
          </form>
        </nav>
      </>
    );
  }
}

export default SimpleSearch;
