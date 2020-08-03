import React from "react";
import loginImg from "../../UI/log.png";
import moduleName from '../../UI/Home.css'
import {Link} from 'react-router-dom';
//import "../Styling/style.scss";
//import "../Styling/App.scss";
import Button from "react-bootstrap/Button";
export class RegisterGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>

        <div className="header">Grid Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg}/>
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" className="form-control form-control-sm validate" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" className="form-control form-control-sm validate"  />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" className="form-control form-control-sm validate" />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="text" name="password" placeholder="password" className="form-control form-control-sm validate" />
          </div>
          <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="text" name="password" placeholder="password" className="form-control form-control-sm validate" />
        </div>
        <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="text" name="password" placeholder="password" className="form-control form-control-sm validate" />
      </div>
            
          </div>
        
        <div className="footer">
        <Button
              variant="primary"
            >
            <Link to='/DashNavigationGridMajor' style={{color:'white'}}>Register</Link>
            </Button>
        </div>
        </div>
      </div>
    );
  }
}
