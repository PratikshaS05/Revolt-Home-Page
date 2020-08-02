import React from "react";
//import { Link } from "react-router-dom";
import "./Styling/PlanTrip.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default class Vehicle extends React.Component {
  handleModalShowHide() {
    this.props.handleModalShowHideV();
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
            fontSize: "12px",
            margin: "0px",
          }}
          show={this.props.showHideV}
          className="bg-transparent  d-inline-block "
        >
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>Your Vehicle</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            Company Name
            <input
              type="text"
              placeholder="Company Name"
              className="form-control form-control-sm validate"
            />
            <br />
            Model Name
            <input
              type="text"
              placeholder="Model Name"
              className="form-control form-control-sm validate"
            />
            <br />
            Plug Type
            <input
              type="text"
              placeholder="Plug type"
              className="form-control form-control-sm validate"
            />
            <br />
           Vehicle Number 
            <input
              type="text"
              placeholder="Vehicle Number"
              className="form-control form-control-sm validate"
            />
       
           {/* <hr />*/}
            
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.handleModalShowHide()}
            >
              Close
            </Button>

            <Button
              variant="primary"
              onClick={() => this.handleModalShowHide()}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}