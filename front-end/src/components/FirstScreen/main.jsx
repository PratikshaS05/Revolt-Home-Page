import React, { Component } from 'react'
//import img from './bg.jpg'
import Portfolio from './Portfolio.jsx'
import '../UI/nav.css';
import '../UI/Home.css'
import Navigation from '../Navigation.jsx'
import './Styling/ContactUs.css'
import './Styling/AboutTeam.css'
import ContactUs from './Styling/ContactUs.jpg'
import './Styling/Services.css'
export default class Main extends React.Component{
      render() {
        const portfolioLinks = [
          {
            title: "OnePlug AC Charger",
            caption: `OnePlug AC charger EVSE Water resistant 
               `,
          },
          {
            title: "MassTech Solo",
            caption: `1.AC EVSE upto 7.2 kW
                       2. Power output - 3.6 kW/7.2 kW 
                        3.Type 2 cable is provided.`,
          },
          {
            title: "Chargrid Pro",
            caption: "ChargeGrid AC EVSE",
          },
        ];
        return (
          <div>
            <Navigation />
            <header className="masthead" id="MainPage">
              <div className="container">
                <div className="intro-text">
                  <div className="intro-lead-in">
                    "Electric is the future and we're wanting you along for an
                    enjoyable ride!"
                  </div>
                  <div className="intro-heading text-uppercase">
                    Charging Station at Your Finger Tip
                  </div>
                </div>
              </div>
            </header>

            <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

            <section style={{ background: "#fed136" }} id="Services">
              <div class="container service">
                <h1 class="white-text">Our Services</h1>

                <div class="row">
                  <div class="col s12 m6 l3 center-align">
                    <div class="card">
                      <div class="card-content">
                        <i class="material-icons large">aspect_ratio</i>
                        <h5>Range Anxiety</h5>
                        <p>For smooth Journey
                        </p>
                      </div>
                      <div class="card-action">
                        <a href="#">Read more...</a>
                      </div>
                    </div>
                  </div>

                  <div class="col s12 m6 l3 center-align">
                    <div class="card">
                      <div class="card-content">
                        <i class="material-icons large">map</i>
                        <h5>Trip Planner</h5>
                        <p>Planning A trip
                        </p>
                      </div>
                      <div class="card-action">
                        <a href="#">Read more...</a>
                      </div>
                    </div>
                  </div>

                  <div class="col s12 m6 l3 center-align">
                    <div class="card">
                      <div class="card-content">
                        <i class="material-icons large">insert_link</i>
                        <h5>Booking a slot</h5>
                        <p>For Smooth Journey
                        </p>
                      </div>
                      <div class="card-action">
                        <a href="#">Read more...</a>
                      </div>
                    </div>
                  </div>

                  <div class="col s12 m6 l3 center-align">
                    <div class="card">
                      <div class="card-content">
                        <i class="material-icons large">palette</i>
                        <h5>Demand On Grid</h5>
                        <p>At Grid Portel
                        </p>
                      </div>
                      <div class="card-action">
                        <a href="#">Read more...</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="contact-section" id="ContactUs">
              <div class="container">
                <h2>Contact Us</h2>
                <p>Email us and keep upto date with our latest news</p>
                <div class="contact-form">
                  <div>
                    <i class="fa fa-map-marker" />
                    <span class="form-info"> Nanded-431604, Maharashtra</span>
                    <br />
                    <i class="fa fa-phone" />{" "}
                    <span class="form-info"> +92 00034567890</span>
                    <br />
                    <i class="fa fa-envelope" />
                    <span class="form-info"> abc@Gmail.com</span>
                  </div>

                  <div>
                    <form>
                      <input type="text" placeholder="Your Name" required />
                      <input type="text" placeholder="Last Name" />
                      <br />
                      <input type="Email" placeholder="Email" required />
                      <br />
                      <input
                        type="text"
                        placeholder="Subject of this message"
                      />
                      <br />
                      <textarea
                        name="message"
                        placeholder="Message"
                        rows="5"
                        required
                      />
                      <br />
                      <button class="submit">Send Message</button>
                    </form>
                  </div>
                </div>
              </div>
            </section>

            <section id="About" style={{ background: "#fed136" }}>
              <div className="wrapper">
                <h1>Our Team</h1>
                <div className="our_team">
                  <div className="team_member">
                    <div className="member_img">
                      <img src={ContactUs} alt="our_team" />
                      <div className="social_media">
                        <div className="facebook item">
                          <i className="fab fa-facebook-f" />
                        </div>
                        <div className="twitter item">
                          <i className="fab fa-twitter" />
                        </div>
                        <div className="instagram item">
                          <i className="fab fa-instagram" />
                        </div>
                      </div>
                    </div>
                    <h3>Usama Shaikh</h3>
                    <span></span>
                    <p></p>
                  </div>
                  <div className="team_member">
                    <div className="member_img">
                      <img src={ContactUs} alt="our_team" />
                      <div className="social_media">
                        <div className="facebook item">
                          <i className="fab fa-facebook-f" />
                        </div>
                        <div className="twitter item">
                          <i className="fab fa-twitter" />
                        </div>
                        <div className="instagram item">
                          <i className="fab fa-instagram" />
                        </div>
                      </div>
                    </div>
                    <h3>Rupesh Pund</h3>
                    <span>Fullstack Developer</span>
                    <p></p>
                  </div>
                  <div className="team_member">
                    <div className="member_img">
                      <img src={ContactUs} alt="our_team" />
                      <div className="social_media">
                        <div className="facebook item">
                          <i className="fab fa-facebook-f" />
                        </div>
                        <div className="twitter item">
                          <i className="fab fa-twitter" />
                        </div>
                        <div className="instagram item">
                          <i className="fab fa-instagram" />
                        </div>
                      </div>
                    </div>
                    <h3>Tohel Chini</h3>
                    <span>Backend Devloper</span>
                    <p></p>
                  </div>
                  <div className="team_member">
                    <div className="member_img">
                      <img src={ContactUs} alt="our_team" />
                      <div className="social_media">
                        <div className="facebook item">
                          <i className="fab fa-facebook-f" />
                        </div>
                        <div className="twitter item">
                          <i className="fab fa-twitter" />
                        </div>
                        <div className="instagram item">
                          <i className="fab fa-instagram" />
                        </div>
                      </div>
                    </div>
                    <h3>shubham Rode</h3>
                    <span>Researcher</span>
                    <p></p>
                  </div>
                  <div className="team_member">
                    <div className="member_img">
                      <img src={ContactUs} alt="our_team" />
                      <div className="social_media">
                        <div className="facebook item">
                          <i className="fab fa-facebook-f" />
                        </div>
                        <div className="twitter item">
                          <i className="fab fa-twitter" />
                        </div>
                        <div className="instagram item">
                          <i className="fab fa-instagram" />
                        </div>
                      </div>
                    </div>
                    <h3>Alina Nahdi</h3>
                    <span>Front-end Developer</span>
                    <p>
                      Lorleniti quaerat beatae dolor hic quidem voluptatibus
                      cumque.
                    </p>
                  </div>
                  <div className="team_member">
                    <div className="member_img">
                      <img src={ContactUs} alt="our_team" />
                      <div className="social_media">
                        <div className="facebook item">
                          <i className="fab fa-facebook-f" />
                        </div>
                        <div className="twitter item">
                          <i className="fab fa-twitter" />
                        </div>
                        <div className="instagram item">
                          <i className="fab fa-instagram" />
                        </div>
                      </div>
                    </div>
                    <h3>Pratiksha Suryavanshi</h3>
                    <span>Front-end Developer</span>
                    <p>
                      eleniti quaeidunt excepturi. Fugit deleniti accusantium
                      neque hic quidem voluptatibus cumque.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <footer className="footer">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <span className="copyright">
                      Copyright &copy; Team Revolt
                    </span>
                  </div>
                  <div className="col-md-4">
                    <ul className="list-inline social-buttons">
                      <li className="list-inline-item">
                        <a href="#something">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#something">
                          <i className="fa fa-facebook-f" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#something">
                          <i className="fa fa-linkedin-in" />
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
        );
}
}