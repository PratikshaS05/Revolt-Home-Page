import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class FixedNavigation extends React.Component{
    render(){
        return(
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
                        <Link to="/HomeComponent" style={{color:'white'}} className="nav-link js-scroll-trigger">Home</Link>
                        </li>

                        <li className="nav-item">
                        <Link to="/ChargingStation" style={{color:'white'}} className="nav-link js-scroll-trigger">Charging Station</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/Trip" style={{color:'white'}} className="nav-link js-scroll-trigger">Trip</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/Network" style={{color:'white'}} className="nav-link js-scroll-trigger">Networks</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/Services" style={{color:'white'}} className="nav-link js-scroll-trigger">Services</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/About" style={{color:'white'}} className="nav-link js-scroll-trigger">About</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/LogOut" style={{color:'white'}} className="nav-link js-scroll-trigger">Log Out</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>


            
            </div>
        );
    }
}