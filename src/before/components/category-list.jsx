import React, { Component } from "react";

class CategoryList extends Component {
  state = {};
  render() {
    const { categories = [] } = this.props;
    if (categories.length) {
      return (
        <div className="widget">
          <h4 className="headline">Categories</h4>
          <span className="line margin-bottom-20" />
          <div className="clearfix" />
          <ul className="categories">
            {categories.map((category, categoryIndex) => (
              <li key={categoryIndex}>
                <a href="/#" onClick={e => e.preventDefault()}>
                  {category.name} <span>({category.itemsAvailable})</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default CategoryList;
