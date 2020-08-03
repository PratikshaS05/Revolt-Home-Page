import React from "react";
import loginImg from "../../UI/log.png";
import {Link} from 'react-router-dom';
//import "../Styling/style.scss";
//import "../Styling/App.scss";
import 'bootstrap/dist/css/bootstrap.css'
import login from "../../Backend/user"
import AddStation from './AddStation.jsx'
import Button from "react-bootstrap/Button";
export  class LoginGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      email: "",
      password: "",
      showHide1:false

    }
  }
  handleModalShowHide1 = () => {
    this.setState({ showHide1: !this.state.showHide1 });
  };
changeEmail = e =>{
  this.setState({email:e.target.value})
}
changePassword=e=>{
  this.setState({password:e.target.value})
}
onSubmit=e=>{
  e.preventDefault()
const data={

email:this.state.email,
password:this.state.password
}
login(data) 
}
  render() {
    const {showHide1}=this.state
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <form /*onSubmit={this.onSubmit}*/>
        <div className="header">User Login</div>
        <div className="content">
        
          <div className="image">
            <img src={loginImg} />
          </div>
          
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" className="form-control form-control-sm validate" onChange={this.changeEmail} value={this.state.email}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" className="form-control form-control-sm validate" onChange={this.changePassword} value={this.state.password} />
            </div>
          </div>
          
       
        <div className="footer">
        <Button
              variant="primary"
            >
            <Link to='/DashNavigationGrid' style={{color:'white'}}>Login</Link>
            </Button>

          <p >
                    Forgot <a href="#">password?</a>
                </p>
        </div>
      </div>
    
      </form>
      </div>
    );
  }
}
