import React, { Component } from "react";
import { Link } from "react-router-dom";

class Reviews extends Component {
  state = {};
  render() {
    const { reviews = [] } = this.props;
    if (reviews && reviews.length) {
      return (
        <>
          <h3 className="headline">
            Reviews <span className="comments-amount">(4)</span>
          </h3>
          <span className="line" />
          <div className="clearfix" />
          {/* Reviews */}
          <section className="comments" id="reviews">
            <ul>
              {reviews.map((review, reviewIndex) => (
                <li key={reviewIndex}>
                  <div className="avatar">
                    <img src={review.profilePicture} alt="" />
                  </div>
                  <div className="comment-content">
                    <div className="arrow-comment" />
                    <div className="comment-by">
                      <strong>{review.name}</strong>
                      <span className="date">{review.date}</span>
                      <a href="#" className="reply">
                        <i className="fa fa-reply" /> Reply
                      </a>
                    </div>
                    <p>{review.reviewText}</p>
                    <div className="rating four-stars">
                      <div className="star-rating" />
                      <div className="star-bg" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </>
      );
    } else {
      return null;
    }
  }
}

export default Reviews;
