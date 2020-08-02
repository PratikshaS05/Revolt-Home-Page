import React from "react";
import "./Styling/PlanTrip.css"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import NewStation from "./NewStation.jsx";

export default class AddNewStation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHide1: false,
      name:''
    };
  }
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  handleModalShowHide() {
    this.props.handleModalShowHide1();
  }
  handleModalShowHide1 = () => {
    this.setState({ showHide1: !this.state.showHide1 });
  };

  render() {
    const { showHide1 } = this.state;
    const {name}=this.state
    const val={name}
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
            maxWidth: "100%",
          }}
          show={this.props.showHide1}
          className="bg-transparent  d-inline-block "
        >
          <Modal.Title>
            <Button
              type="button"
              href="#Page"
              onClick={this.handleModalShowHide1}
            >
              Add Station
            </Button>
          </Modal.Title>
          <Modal.Body>

          {name && <a name="btn" id="#" class="btn btn-primary" href="#" role="button"> {name}</a>} 
          
  
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
        <div id="Page">
          {showHide1 && (
            <NewStation
              showHide1={showHide1}
              handleModalShowHide1={this.handleModalShowHide1}
              val={val} handleChange={this.handleChange}
            />
          )}
        </div>
      
      </div>
    );
  }
}
