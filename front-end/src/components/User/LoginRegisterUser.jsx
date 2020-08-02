import React from "react";
import "../UI/App.scss";
import '../UI/nav.css';
import "../UI/style.scss";
import { Login } from "./Userlog/login.jsx";
import { Register } from "./Userlog/register.jsx";
//import {BrowserRouter,Route} from 'react-router-dom'
//import LoginNavigation from './LoginNavigation.jsx'
class LoginRegisterUser extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }
  check=()=>{
    this.setState({a:true})
  }
 

  render() {
    
  
    const { isLogginActive,a } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div className="App">
  
        <div className="login">
        
         
          
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} check={this.check}   />
            ) }
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this) }
          />
        </div>
      </div>
    );
  
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
  
};

export default LoginRegisterUser;
