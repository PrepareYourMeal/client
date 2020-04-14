import React, { Component } from 'react';

class AdvancedSearch extends Component {
    state = {};

    render() {
        const {
            ingredientsOptions,
            alergenOptions,
            levelOptions,
            servingOptions,
            timingOptions,
            onSearchTrigger,
        } = this.props;
        return (
            <>
                <div className="extra-search-options closed">
                    {/* Choose Excluded Ingredients */}
                    <div className="select excluded-ingredients">
                        <label>Select one or more ingredients that should be excluded from recipe</label>
                        <select data-placeholder="Excluded Ingredients" className="chosen-select" multiple>
                            {ingredientsOptions.map((ingredientOption, ingredientOptionIndex) => (
                                <option value={ingredientOption.key} key={ingredientOptionIndex}>
                                    {ingredientOption.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* Choose Alergens */}
                    <div className="select alergens">
                        <label>Choose alergens</label>
                        <select data-placeholder="Choose Alergens" className="chosen-select" multiple>
                            {alergenOptions.map((alergenOption, alergenOptionIndex) => (
                                <option value={alergenOption.key} key={alergenOptionIndex}>
                                    {alergenOption.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="clearfix" />
                    {/* Choose Level */}
                    <div className="select">
                        <label>Choose level</label>
                        <select data-placeholder="Choose level" className="chosen-select">
                            {levelOptions.map((levelOption, levelOptionIndex) => (
                                <option value={levelOption.key} key={levelOptionIndex}>
                                    {levelOption.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* Choose serving */}
                    <div className="select">
                        <label>Choose serving</label>
                        <select data-placeholder="Choose level" className="chosen-select">
                            {servingOptions.map((servingOption, servingOptionIndex) => (
                                <option value={servingOption.key} key={servingOptionIndex}>
                                    {servingOption.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* Choose time needed */}
                    <div className="select">
                        <label>Choose time needed</label>
                        <select data-placeholder="Choose time needed" className="chosen-select">
                            {timingOptions.map((timingOption, timingOptionIndex) => (
                                <option value={timingOption.key} key={timingOptionIndex}>
                                    {timingOption.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="clearfix" />
                    <div className="margin-top-10" />
                </div>
            </>
        );
    }
}

export default AdvancedSearch;
