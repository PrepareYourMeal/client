import React, { Component } from "react";
import Header from "../containers/Header"

class ContactPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header/>

        <div>

          <section id="titlebar">
            <div className="container">

            </div>
          </section>

          <div className="container">
            
          </div>
          <div className="margin-top-10" />
          <div className="container">
            <div className="twelve columns">
              <h3 className="headline">Contact Form</h3>
              <span className="line margin-bottom-25" />
              <div className="clearfix" />
              <section id="contact">
                <mark id="message" />
                <form onSubmit={e => e.preventDefault()} name="contactform" id="contactform">
                  <fieldset>
                    <div>
                      <label>Name:</label>
                      <input name="name" type="text" id="name" />
                    </div>
                    <div>
                      <label>
                        Email: <span>*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        id="email"
                        pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$"
                      />
                    </div>
                    <div>
                      <label>
                        Message: <span>*</span>
                      </label>
                      <textarea
                        name="comment"
                        cols={40}
                        rows={3}
                        id="comment"
                        spellCheck="true"
                        defaultValue={""}
                      />
                    </div>
                  </fieldset>
                  <div id="result" />
                  <input
                    type="submit"
                    className="submit"
                    id="submit"
                    defaultValue="Send Message"
                  />
                  <div className="clearfix" />
                </form>
              </section>
              <div className="margin-bottom-50" />
            </div>
            <div className="four columns">
              <div className="widget">
                <h4 className="headline">Share</h4>
                <span className="line margin-bottom-30" />
                <div className="clearfix" />
                <ul className="share-buttons">
                  <li className="facebook-share">
                    <a href="#">
                      <span className="counter">1,234</span>
                      <span className="counted">Fans</span>
                      <span className="action-button">Like</span>
                    </a>
                  </li>
                  <li className="twitter-share">
                    <a href="#">
                      <span className="counter">863</span>
                      <span className="counted">Followers</span>
                      <span className="action-button">Follow</span>
                    </a>
                  </li>
                  <li className="google-plus-share">
                    <a href="#">
                      <span className="counter">902</span>
                      <span className="counted">Followers</span>
                      <span className="action-button">Follow</span>
                    </a>
                  </li>
                </ul>
                <div className="clearfix" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactPage;
