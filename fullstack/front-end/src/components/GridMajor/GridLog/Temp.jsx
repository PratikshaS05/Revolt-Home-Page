import React from "react";
import loginImg from "../../UI/download.jpg";


import moduleName from "../../UI/Home.css";
import { Link } from "react-router-dom";

//import "../Styling/style.scss";
//import "../Styling/App.scss";
 class Validation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
      

      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Add Your Station Information</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Station Name</label>
              <input
                type="text"
                name="username"
                placeholder="Station Name"
                className="form-control form-control-sm validate"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Station Email</label>
              <input
                type="text"
                name="email"
                placeholder="Station Email"
                className="form-control form-control-sm validate"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Station Phone Number</label>
              <input
                type="text"
                name="password"
                placeholder="Station Phone Number"
                className="form-control form-control-sm validate"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Working Time</label>
              <input
                type="text"
                name="password"
                placeholder="Working Time"
                className="form-control form-control-sm validate"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Station Address</label>
              <input
                type="text"
                name="password"
                placeholder="Station Address"
                className="form-control form-control-sm validate"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Station Number</label>
              <input
                type="text"
                name="password"
                placeholder="Station Number"
                className="form-control form-control-sm validate"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Number of Charging Points</label>
              <input
                type="text"
                name="password"
                placeholder="Number of Charging Points"
                className="form-control form-control-sm validate"
              />
            </div>
          </div>

          <div className="footer">
            <button type="button" className="btn1">
              <Link to="/loginG" style={{ color: "white" }}>
                Submit and Register
              </Link>
            </button>
          </div>
        </div>
      </div>
    
    );
  }
}

export default Validation
