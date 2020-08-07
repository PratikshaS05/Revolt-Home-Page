import React, { Component } from 'react'
import Portfolio from './Portfolio'
import {Link} from 'react-router-dom';
import './Styling/Home.css'
export default class Home extends Component {
    render() {
        const portfolioLinks = [
            {
                title: 'Chargepoint',
                caption: 'Best At EV Charging'
            },
            {
                title: 'BC HYDRO EV',
                caption: 'Power Smart'
            },
            {
                title: 'Blink',
                caption: 'Blink Network'
            },

        ]
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="#page-top">REVOLT</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
        <i className="fa fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav text-uppercase ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#services">Home</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#services">Charging Station</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#contact">Trip</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#portfolio">Networks</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#about">Services</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#team">Contact</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#team">Logout</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>


                <header className="masthead">
                    <div className="container">
                        <div className="intro-text">
                            <div className="intro-lead-in">"Electric is the future and we're wanting you along for an enjoyable ride!"</div>
                            <div className="intro-heading text-uppercase">Charging Station at Your Finger Tip</div>

                        </div>
                    </div>
                </header>




                <section className="page-section " id="services" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h3 className="section-heading text-uppercase row">Find the Charging Station Beforehand</h3>
                                <h3 className="section-subheading text-muted"></h3>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-4">
                                <span className="fa-stack fa-4x">
                                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 className="service-heading">Charging Station</h4>
                                <p className="text-muted"></p>
                            </div>
                            <div className="col-md-4">
                                <span className="fa-stack fa-4x">
                                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 className="service-heading">Your Car Type</h4>
                                <p className="text-muted"></p>
                            </div>
                            <div className="col-md-4">
                                <span className="fa-stack fa-4x">
                                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 className="service-heading">Reserve the Grid</h4>
                                <p className="text-muted"></p>
                            </div>
                        </div>
                        <div className="col-lg-12 text-center">
                            <div id="success"></div>
                            <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Book The Slot</button>
                        </div>
                    </div>
                </section>


                <section className="page-section" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Make Your Trip</h2>
                                <h3 className="section-subheading text-muted"></h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <form id="contactForm" name="sentMessage" novalidate="novalidate">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input className="form-control" id="name" type="text" placeholder="CURRENT LOCATION (City,State,etc) *" required="required" data-validation-required-message="Please enter your name." />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" id="email" type="email" placeholder="DESTINATION (City,State,etc) *" required="required" data-validation-required-message="Please enter your email address." />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                        </div>


                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input className="form-control" id="name" type="text" placeholder="ARRIVAL DATE *" required="required" data-validation-required-message="Please enter your name." />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" id="email" type="email" placeholder="DEPARTURE DATE *" required="required" data-validation-required-message="Please enter your email address." />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" id="phone" type="tel" placeholder="TENTATIVE TIMING *" required="required" data-validation-required-message="Please enter your phone number." />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                        </div>

                                        <div className="clearfix"></div>
                                        <div className="col-lg-12 text-center">
                                            <div id="success"></div>
                                            <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">FIND</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>





                <Portfolio portfolioLinks={portfolioLinks}></Portfolio>


                <section className="page-section" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Our Services</h2>
                                <h3 className="section-subheading text-muted"></h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="timeline">
                                    <li>
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt="" />
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4></h4>
                                                <h4 className="subheading">Demand On Grid</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">We Get Access To The Info About Grid</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="timeline-inverted">
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt="" />
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4></h4>
                                                <h4 className="subheading">Slot Booking</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">If Available Then Books A Slot</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt="" />
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4></h4>
                                                <h4 className="subheading">Range Anxiety</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">Provides Exact Range Anxiety For Your Travellling</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="timeline-inverted">
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt="" />
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4></h4>
                                                <h4 className="subheading">Trip Planner</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">Provides Convenient Trip Management</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="timeline-inverted">
                                        <div className="timeline-image">
                                            <h4>Be Part
                  <br />Of Our
                  <br />Services!</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="bg-light page-section" id="team">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                                <h3 className="section-subheading text-muted"></h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="team-member">
                                    <img className="mx-auto rounded-circle" src="img/team/1.jpg" alt="" />
                                    <h4>Tohel chini</h4>
                                    <p className="text-muted">Tohel chini</p>
                                    <ul className="list-inline social-buttons">
                                        <li className="list-inline-item">
                                            <a href="#something">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#something">
                                                <i className="fa fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#something">
                                                <i className="fa fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="team-member">
                                    <img className="mx-auto rounded-circle" src="img/team/2.jpg" alt="" />
                                    <h4>Usama shaikh</h4>
                                    <p className="text-muted">Usama shaikh</p>
                                    <ul className="list-inline social-buttons">
                                        <li className="list-inline-item">
                                            <a href="#something">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#something">
                                                <i className="fa fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#something">
                                                <i className="fa fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="team-member">
                                    <img className="mx-auto rounded-circle" src="img/team/3.jpg" alt="" />
                                    <h4>Rupesh Pund</h4>
                                    <p className="text-muted">Rupesh Pund</p>
                                    <ul className="list-inline social-buttons">
                                        <li className="list-inline-item">
                                            <a href="#something">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#something">
                                                <i className="fa fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#something">
                                                <i className="fa fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center">
                                <p className="large text-muted"></p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <a href="#something">
                                    <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt="" />
                                </a>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <a href="#something">
                                    <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt="" />
                                </a>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <a href="#something">
                                    <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt="" />
                                </a>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <a href="#something">
                                    <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>




                <footer className="footer">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <span className="copyright">Copyright &copy; Team Revolt</span>
                            </div>
                            <div className="col-md-4">
                                <ul className="list-inline social-buttons">
                                    <li className="list-inline-item">
                                        <a href="#something">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#something">
                                            <i className="fa fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#something">
                                            <i className="fa fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul className="list-inline quicklinks">
                                    <li className="list-inline-item">
                                        <a href="#something">Privacy Policy</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#something">Terms of Use</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
