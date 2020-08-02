import React, { Component } from "react";
import {Link} from 'react-router-dom';

//import ChargingStation from './ChargingStation'
import "./styles.css";
//import { Link } from "react-router-dom";
import PlanTrip from "./PlanTrip.jsx";
import AddNewStation from "./AddNewStation.jsx";
//import Vehicle from "./Vehicle.jsx";
//import MapContainer from './MapContainer.jsx'
import BookedSlots from './BookedSlots.js'




export class DashNavigationGrid extends Component {
  state = {
    Page: false,
    showHide: false,
    showHide1: false,
    showHideV: false,
    showHideBooked:false
  };
  PAGE = () => {
    //const {page}=this.state
    this.setState({ Page: true });
  };
  handleModalShowHide = () => {
    this.setState({ showHide: !this.state.showHide });
  };
  handleModalShowHideBooked = () => {
    this.setState({ showHideBooked: !this.state.showHideBooked });
  };
  handleModalShowHide1 = () => {
    this.setState({ showHide1: !this.state.showHide1 });
  };
  handleModalShowHideV = () => {
    this.setState({ showHideV: !this.state.showHideV });
  };
  render() {
    const { showHide, showHide1, showHideV,showHideBooked } = this.state;
    return (
      <div>
        <nav
          style={{ backgroundColor: "#fed136" }}
          class="sb-topnav navbar navbar-expand navbar-dark"
        >
          <a class="navbar-brand" style={{ color: "black" }} href="">
            REVOLT
          </a>

          <button
            class="btn btn-link btn-sm order-1 order-lg-0"
            id="sidebarToggle"
            href="#"
          >
            <i class="fas fa-bars"></i>
          </button>

          <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-4 my-0 my-md-0">
            <div class="input-group">
              <input
                class="form-control"
                type="text"
                placeholder="Search for..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
            </div>
          </form>

          <div class="input-group-append">
            <button class="btn btn-dark my-5" type="button">
              <i class="fas fa-search"></i>
            </button>
          </div>
          <ul class="navbar-nav ml-auto ml-md-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-dark"
                id="userDropdown"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-user fa-fw text-dark"></i>
              </a>
              <div
                class="dropdown-menu dropdown-menu-right "
                aria-labelledby="userDropdown"
              >
                <a class="dropdown-item" href="">
                  Settings
                </a>
                <a class="dropdown-item" href="#">
                  Activity Log
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="login.html">
                  Logout
                </a>
              </div>
            </li>
          </ul>
          {/*<button
            class="btn btn-sm align-end m-2  "
            id="Vehicle"
            href="#"
            onClick={this.handleModalShowHideV}
          >
            Vehicle
          </button>*/}
          <Link to="/LogOut">
            <button class="  btn btn-sm align-end m-2 " id="LogOut">
              Log Out
            </button>
          </Link>
        </nav>

        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <nav
              style={{ backgroundColor: "#fed136" }}
              class="sb-sidenav accordion sb-sidenav-dark "
              id="sidenavAccordion"
            >
              <div
                class="sb-sidenav-menu"
                style={{ color: "black", fontSize: "18px" }}
              >
                <div class="nav">
                  <a
                    class="nav-link"
                    href="#Page"
                    onClick={this.handleModalShowHide1}
                    style={{ color: "black" }}
                  >
                    <div class="sb-nav-link-icon">
                      <i
                        class="fas fa-map-marked-alt"
                        style={{ color: "black" }}
                      ></i>
                    </div>
                    Add Station
                  </a>

                  <a
                    class="nav-link"
                    style={{ color: "black" }}
                    href="#p"
                    onClick={this.handleModalShowHide}
                  >
                    <div class="sb-nav-link-icon" style={{ color: "black" }}>
                      <i class="fas fa-history"></i>
                    </div>
                    My Stations
                  </a>

                  {/* <a class="nav-link" style={{ color: "black" }}>
                    <div class="sb-nav-link-icon" style={{ color: "black" }}>
                      <i class="fas fa-history"></i>
                    </div>
                    Recent Activity
        </a>*/}

                  <a
                    class="nav-link"
                    href="#Booked"
                    onClick={this.handleModalShowHideBooked}
                    style={{ color: "black" }}
                  >
                    <div class="sb-nav-link-icon" style={{ color: "black" }}>
                      <i class="fas fa-bookmark"></i>
                    </div>
                    Booked Slots
                  </a>

                  <a
                    class="nav-link"
                    href="index.html"
                    style={{ color: "black" }}
                  >
                    <div class="sb-nav-link-icon" style={{ color: "black" }}>
                      <i class="fas fa-question-circle"></i>
                    </div>
                    Slots History
                  </a>

                  <a
                    class="nav-link"
                    href="index.html"
                    style={{ color: "black" }}
                  >
                    <div class="sb-nav-link-icon" style={{ color: "black" }}>
                      <i class="fas fa-comment-alt"></i>
                    </div>
                    Stats of EV Demand
                  </a>
                </div>
              </div>
              <div
                class="sb-sidenav-footer"
                style={{ backgroundColor: "#fec503", fontSize: "18px" }}
              >
                <div class="small" style={{ color: "black" }}>
                  Logged in as:
                </div>
                <div class="small" style={{ color: "black" }}>
                  User Name
                </div>
              </div>
            </nav>
          </div>
          <div id="p" style={{ backgroundSize: "cover", margin: "" }}>
            {showHide && (
              <PlanTrip
                showHide={showHide}
                handleModalShowHide={this.handleModalShowHide}
              />
            )}
          </div>
          <div id="Page">
            {showHide1 && (
              <AddNewStation
                showHide1={showHide1}
                handleModalShowHide1={this.handleModalShowHide1}
              />
            )}
          </div>
          {/*<div id="Vehicle">
            {showHideV && (
              <Vehicle
                showHideV={showHideV}
                handleModalShowHideV={this.handleModalShowHideV}
              />
            )}
            </div>*/}

          <div id="Booked">
            {showHideBooked && <BookedSlots showHideBooked={showHideBooked} />}
          </div>
          <div id="layoutSidenav_content">
            <main></main>
            <footer class="py-4 bg-light mt-auto">
              <div class="container-fluid">
                <div class="d-flex align-items-center justify-content-between small">
                  <div class="text-muted">Copyright &copy; Revolt Team</div>
                  <div>
                    <a href="#">Privacy Policy</a>
                    &middot;
                    <a href="#">Terms &amp; Conditions</a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default DashNavigationGrid;
