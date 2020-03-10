import React from "react";

class BottomBar extends React.Component {
  render() {
    return (
      <div id="footer-bottom">
        {}
        <div className="container">
          <div className="eight columns">
            © Copyright 2020 by <a href="#">Stove & Oven</a>. All Rights Reserved.
          </div>
        </div>
        {}
      </div>
    );
  }
}

export default BottomBar;
