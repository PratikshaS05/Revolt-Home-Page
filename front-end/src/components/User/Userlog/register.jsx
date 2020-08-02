import React from "react";
import loginImg from "../../UI/log.png";
import moduleName from '../../UI/Home.css'
//import "../Styling/style.scss";
//import "../Styling/App.scss";
import {register} from "../../Backend/user" 
export class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      firstName: "",
      lastName: "",
      password :"",
      confirmPassword:"",
      phoneNumber:"",
      email:""
  }
}
onSubmit= async e =>{
      e.preventDefault()
      

      
      const Data={
        firstName:this.state.firstName,
        lastName:this.state.lastName,
        password:this.state.password*1,
        email:this.state.email,

        phoneNumber:this.state.phoneNumber*1
      }
      console.log(this.state.password,this.state.confirmPassword)
      
      register(Data)

    }
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>

        <div className="header">User Register</div>
        <div className="content">
          
          <div className="image">
            <img src={loginImg}/>
          </div>
          <form onSubmit={this.onSubmit}>
          <div className="form">
            <div className="form-group">
            <label htmlFor="username">FirstName</label>
              <input type="text"  placeholder="firstName" value={this.state.firstName} onChange={e=>{this.setState({firstName:e.target.value})}} />
            </div>
            <div className="form-group">
            <label htmlFor="username">Lastname</label>
              <input type="text"  placeholder="Lastname" value={this.state.lastName} onChange={e=>{this.setState({lastName:e.target.value})}} />
            </div>
            <div className="form-group">
            <label htmlFor="email">Email</label>
              <input type="text" value={this.state.email} placeholder="email" onChange={e=>{this.setState({email:e.target.value})}} />
            </div>
            <div className="form-group">
            <label >phoneNumber</label>
              <input type="text"  placeholder="PhoneNumber" value={this.state.phoneNumber} onChange={e=>{this.setState({phoneNumber:e.target.value})}} />
          </div>
          <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="text"  placeholder="password" value={this.state.password} onChange={e=>{this.setState({password:e.target.value})}} />
        </div>
        <div className="form-group">
        <label htmlFor="password">confirm Password</label>
        <input type="text"  placeholder="confirm password" value={this.state.conformPassword} onChange={e=>{this.setState({conformPassword:e.target.value})}} />
      </div>
            
          </div>
          
        
        <div className="footer">
          <button type="submit" className="btn1">
            Register
          </button>
        </div>
        </form>
        </div>
        
      </div>
    );
  }
}
