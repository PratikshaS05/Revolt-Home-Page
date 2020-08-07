import React from "react";
//import { Link } from "react-router-dom";
//import "./Styling/PlanTrip.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class BookASlot extends React.Component {
  state = {
    startDate: new Date()
  };
  
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
 
  handleModalShowHide() {
    this.props.handleModalShowHideBook();
  }

  render() {
    return (
      <div style={{Color:'black'}}>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          left-top
          style={{
            
            overflow: "auto",
            maxHeight: "100%",
            fontSize: "20px",
            marginTop: "0px",
            maxWidth: "200%",
            backdropFilter:"blur(2px)"
          }}
          show={this.props.BookASlotShowHide}
          className="bg-transparent  d-inline-block "
        >
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>Book A Slot</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          <div>
          <label
          htmlFor="password"
          style={{ color: "Blue", fontSize: "20px" }}
        >
          Enter Date:
        </label>
         <br/>
          <DatePicker
          className='New'
          style={{Color:'black'}}
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
        </div>
            <div className="form-group">
              <label
                htmlFor="password"
                style={{ color: "Blue", fontSize: "20px" }}
              >
                Starting Time
              </label>
              <input
                type="text"
                name="password"
                placeholder="Starting Time"
                className="form-control form-control-sm validate"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="password"
                style={{ color: "Blue", fontSize: "20px" }}
              >
                Ending Time
              </label>
              <input
                type="text"
                name="password"
                placeholder="Ending Time"
                className="form-control form-control-sm validate"
              />
            </div>
            <span style={{ color: "Blue", fontSize: "20px" }}>Charger type:</span><br/>
            {this.props.chargingTypes.map((item, i) => {
              return (
                <div
                
                class="custom-control custom-checkbox"
                key={i}
                >
                <input
                      key={i}             
                  type="checkbox"
                  class="custom-control-input"
                  id={i}
                />
                <label style={{ fontSize: "15px",color:'black' }} class="custom-control-label" for={i}>
                  {item.name}
                </label>
              </div>
            
                );
            })}
            
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="warning"
              onClick={() => this.handleModalShowHide()}
            >
              Book Now
            </Button>

          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
