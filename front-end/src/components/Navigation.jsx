import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Interface from './FirstScreen/Interface.jsx'
function Navigation() {
  const [modalShow, setModalShow] = React.useState(false);
return(

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
          <a href="#MainPage"  className="nav-link js-scroll-trigger">Home</a> 

          </li>
          <li className="nav-item">
          <a href="#ContactUs"  className="nav-link js-scroll-trigger">Contact</a>
          </li>
          <li className="nav-item">
          <a href="#About"  className="nav-link js-scroll-trigger">About</a>
          </li>
          <li className="nav-item">
          <a href="#Portfolio"  className="nav-link js-scroll-trigger">Networks</a>
          </li>
          <li className="nav-item">
          <a href="#Services"   className="nav-link js-scroll-trigger">Services</a>
          </li>
          <li className="nav-item" >
          <Button variant="primary "  onClick={() => setModalShow(true)}>
          Login/Register
        </Button>
          </li>
          
        </ul>
      </div>
    </div>
    <Interface
 show={modalShow}
 onHide={() => setModalShow(false)}/>
  </nav>
);
}
export default Navigation;
