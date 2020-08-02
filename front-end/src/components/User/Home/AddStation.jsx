import React from "react";
//import { Link } from "react-router-dom";
import "./Styling/PlanTrip.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default class AddStation extends React.Component {
  handleModalShowHide() {
    this.props.handleModalShowHide1();
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
            marginTop: "0px",
            maxWidth:'100%'
          }}
          show={this.props.showHide1}
          className="bg-transparent  d-inline-block "
        >
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>Add Station</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            Station Name
            <input
              type="text"
              placeholder="Station Name"
              className="form-control form-control-sm validate"
            />
            Plug Type
            <input
              type="text"
              placeholder="Plug type"
              className="form-control form-control-sm validate"
            />
          
            Total Hours
            <input
              type="text"
              placeholder="Total hours"
              className="form-control form-control-sm validate"
            />
         
            {/*<Button variant="primary">Search</Button>*/}
            <hr />
            Options
            <hr />
            <div
              style={{ fontWeight: "900", color: "balck", fontSize: "20px" }}
              class="custom-control custom-checkbox"
            >
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck"
                name="example1"
              />
              <label class="custom-control-label" for="customCheck">
                Show Along Root Only
              </label>
            </div>
            <form>
              <label for="customRange">Custom range</label>
              <input
                type="range"
                class="custom-range"
                id="customRange"
                name="points1"
              />
              <p>The circle does not count for.....</p>
            </form>
            <div
              style={{ fontWeight: "900", color: "balck", fontSize: "20px" }}
              class="custom-control custom-checkbox"
            >
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck1"
                name="example2"
              />
              <label class="custom-control-label" for="customCheck1">
                Add Wait Times
              </label>
            </div>
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
              Search
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
