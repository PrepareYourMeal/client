import React, { Component } from "react";

class AuthorInfo extends Component {
  state = {};
  render() {
		const { name, profileImage, email, introduction } = this.props;
		
    return (
      <div className="widget">
        <div className="author-box">
          <span className="title">Author</span>
          <span className="name">
            {name}
          </span>
          <span className="contact">
            <a href={`mailto:${email}`} target="_blank">{email}</a>
          </span>
          <img src={profileImage} alt />
          <p>
            {introduction}
          </p>
        </div>
      </div>
    );
  }
}

export default AuthorInfo;
