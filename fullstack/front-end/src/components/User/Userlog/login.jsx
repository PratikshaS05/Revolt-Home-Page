import React from "react";
import loginImg from "../../UI/log.png";
import {Link} from 'react-router-dom';
//import "../Styling/style.scss";
//import "../Styling/App.scss";
import 'bootstrap/dist/css/bootstrap.css'
import login from "../../Backend/user"
export  class Login extends React.Component {
  userData;
  constructor(props) {
    super(props);

    this.state={
      email: "",
      password: "",

    }
  }
  change=()=>{
    this.props.check();
}
changeEmail = e =>{
  this.setState({email:e.target.value})
}
changePassword=e=>{
  this.setState({password:e.target.value})
}

//This is new ,for keeping previous data
componentDidMount() {
  this.userData = JSON.parse(localStorage.getItem('user'));

  if (localStorage.getItem('user')) {
      this.setState({
          email: this.userData.email,
          password: this.userData.password
      })
  } else {
      this.setState({
          
          email: '',
          password: ''
      })
  }
}

componentWillUpdate(nextProps, nextState) {
  localStorage.setItem('user', JSON.stringify(nextState));
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
         
          <Link to="/DashNavigation" style={{color:'white'}}>
           <button type="button" onClick={this.change} className="btn1" > Login</button></Link>
          
         <br/><br/>
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
