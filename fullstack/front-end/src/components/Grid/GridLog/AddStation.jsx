import React from "react";
import { Link } from "react-router-dom";
import "../HomeGrid/Styling/PlanTrip.css";
import loginImg from "../../UI/download.jpg";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default class AddStation extends React.Component {
  handleModalShowHide() {
    this.props.handleModalShowHide1();
  }
  handleSubmit(){
    this.handleModalShowHide1()
  }

  render() {
    return (
      <div>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          style={{
            overflow: "auto",
            maxHeight: "100%",
            fontSize: "30px",
            margin: "0px",
          }}
          show={this.props.showHide1}
          className="bg-transparent  d-inline-block "
        >
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>Add Station</Modal.Title>
          </Modal.Header>

          <Modal.Body>
                 
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

        
        
      </div>
    </div>
      

          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="secondary"
            >
            <Link to='/DashNavigationGrid' style={{color:'white'}}>Close</Link>
            </Button>

            <Button
              variant="primary"
            >
            <Link to='/DashNavigationGrid' style={{color:'white'}}>Submit</Link>
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
