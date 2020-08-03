import React from "react";
//import { Link } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default class Update extends React.Component {
  handleModalShowHide() {
    this.props.handleUpdate();
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
          show={this.props.up}
          className="bg-transparent  d-inline-block "
        >
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>Update Here</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <label style={{fontSize:'25px',color:'blue'}}>Do you want to close the station temporarily:</label>
            
                  <Button variant="primary" class=".px-3 mx-3" >
                    Yes
                  </Button>
                  <Button variant="primary" class=".px-3" >
                    No
                  </Button>
           <hr/>
           <Button varient="primary" ml-3>Change no. of charging port</Button>
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