import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddReview extends Component {
  state = {};
  render() {
    return (
      <>
        <h3 className="headline">Add Review</h3>
        <span className="line margin-bottom-35" />
        <div className="clearfix" />
        {/* Add Comment Form */}
        <form id="add-review" className="add-comment">
          <fieldset>
            <div>
              <label>Name:</label>
              <input type="text" />
            </div>
            <div>
              <label>
                Email: <span>*</span>
              </label>
              <input type="text" />
            </div>
            <div>
              <label>Rating:</label>
              <span className="rate">
                <span className="star" />
                <span className="star" />
                <span className="star" />
                <span className="star" />
                <span className="star" />
              </span>
            </div>
            <div className="clearfix" />
            <div>
              <label>
                Comment: <span>*</span>
              </label>
              <textarea cols={40} rows={3} defaultValue={""} />
            </div>
          </fieldset>
          <a href="#" className="button medium color">
            Add Review
          </a>
          <div className="clearfix" />
        </form>
      </>
    );
  }
}

export default AddReview;
