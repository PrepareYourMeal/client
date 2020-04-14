import React, { Component } from 'react';

class ContactPage extends Component {
    state = {};

    render() {
        return (
            <>
                <div>
                    {/* Titlebar
================================================== */}
                    <section id="titlebar">
                        {/* Container */}
                        <div className="container">
                            <div className="eight columns">
                                <h2>Contact</h2>
                            </div>
                        </div>
                        {/* Container / End */}
                    </section>
                    {/* Content
================================================== */}
                    {/* Container */}
                    <div className="container">
                        <div className="sixteen columns">
                            <div className="image-with-caption contact">
                                <img className="rsImg" src="assets/images/contact.jpg" alt="recipe" />
                            </div>
                        </div>
                    </div>
                    {/* Container / End */}
                    <div className="margin-top-10" />
                    {/* Container */}
                    <div className="container">
                        {/* Contact Form */}
                        <div className="twelve columns">
                            <h3 className="headline">Contact Form</h3>
                            <span className="line margin-bottom-25" />
                            <div className="clearfix" />
                            {/* Contact Form */}
                            <section id="contact">
                                {/* Success Message */}
                                <mark id="message" />
                                {/* Form */}
                                <form onSubmit={e => e.preventDefault()} name="contactform" id="contactform">
                                    <fieldset>
                                        <div>
                                            <label htmlFor="name">
                                                Name:
                                                <input name="name" type="text" id="name" />
                                            </label>
                                        </div>
                                        <div>
                                            <label htmlFor="email">
                                                Email: <span>*</span>
                                                <input
                                                    name="email"
                                                    type="email"
                                                    id="email"
                                                    pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$"
                                                />
                                            </label>
                                        </div>
                                        <div>
                                            <label htmlFor="comment">
                                                Message: <span>*</span>
                                                <textarea
                                                    name="comment"
                                                    cols={40}
                                                    rows={3}
                                                    id="comment"
                                                    spellCheck="true"
                                                    defaultValue={''}
                                                />
                                            </label>
                                        </div>
                                    </fieldset>
                                    <div id="result" />
                                    <input type="submit" className="submit" id="submit" defaultValue="Send Message" />
                                    <div className="clearfix" />
                                </form>
                            </section>
                            {/* Contact Form / End */}
                            <div className="margin-bottom-50" />
                        </div>
                        <div className="four columns">
                            {/* Share */}
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
                    {/* Container / End */}
                </div>
            </>
        );
    }
}

export default ContactPage;
