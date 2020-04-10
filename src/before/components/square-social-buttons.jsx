import React, { Component } from "react";

class SquareSocialButtons extends Component {
  state = {};
  render() {
    const { links = [] } = this.props;
    if (links.length) {
      return (
        <div className="widget">
          <h4 className="headline">Share</h4>
          <span className="line margin-bottom-30" />
          <div className="clearfix" />
          <ul className="share-buttons">
            {links.map((link, linkIndex) => (
              <li className={link.wrapperClass} key={linkIndex}>
                <a href={link.redirectTo} target="_blank">
                  <span className="counter">{ link.count }</span>
                  <span className="counted">{ link.label }</span>
                  <span className="action-button">{ link.buttonText }</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="clearfix" />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default SquareSocialButtons;
