import React, { Component } from 'react';

class SimpleSearch extends Component {
    state = {};

    render() {
        const { categoryOptions, ingredientsOptions, onSearchTrigger } = this.props;

        return (
            <>
                {/* Choose Category */}
                <div className="select">
                    <label>Choose category</label>
                    <select data-placeholder="Choose Category" className="chosen-select-no-single">
                        {categoryOptions.map((categoryOption, categoryOptionIndex) => (
                            <option value={categoryOption.key} key={categoryOptionIndex}>
                                {categoryOption.label}
                            </option>
                        ))}
                    </select>
                </div>
                {/* Choose ingredientsOptions */}
                <div className="select included-ingredients">
                    <label>Select one or more ingredients that should be included in recipe</label>
                    <select data-placeholder="Included Ingredients" className="chosen-select" multiple>
                        {ingredientsOptions.map((ingredientOption, ingredientOptionIndex) => (
                            <option value={ingredientOption.key} key={ingredientOptionIndex}>
                                {ingredientOption.label}
                            </option>
                        ))}
                    </select>
                </div>
                {/* Choose */}
                <div className="select">
                    <label>Recipe needs to have</label>
                    <select data-placeholder="Choose Category" className="chosen-select">
                        <option value={1}>All of selected ingredients </option>
                        <option value={2}>Any of selected ingredients</option>
                    </select>
                </div>
                <div className="clearfix" />
                {/* Search Input */}
                <nav className="search-by-keyword">
                    <form action="#" onSubmit={e => e.preventDefault()}>
                        <button type="submit" onClick={onSearchTrigger}>
                            <span>Search for Recipes</span>
                            <i className="fa fa-search" />
                        </button>
                        <input className="search-field" type="text" placeholder="Search by keyword" />
                    </form>
                </nav>
            </>
        );
    }
}

export default SimpleSearch;
