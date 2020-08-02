import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
//import data from './data.json';
import BookASlot from "./BookASlot.jsx";

export default class MoreInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BookASlotShowHide: false,
    };
  }

  handleModalShowHide() {
    this.props.handleModalShowHide1();
  }
  handleModalShowHideBook = () => {
    this.setState({ BookASlotShowHide: !this.state.BookASlotShowHide });
  };
  render() {
    //const { name,description} = this.props.data;
    const { BookASlotShowHide } = this.state;
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
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>Station Info</Modal.Title>
          </Modal.Header>

          <Modal.Body style={{ fontSize: "15px", fontSpacing: "1" }}>
            <span style={{ color: "Blue", fontSize: "20px" }}>Name: </span>
            {this.props.description.Name}
            <hr />
            <span style={{ color: "Blue", fontSize: "20px" }}>Email: </span>
            {this.props.description.email}
            <hr />
            <span style={{ color: "Blue", fontSize: "20px" }}>
              Phone Number:{" "}
            </span>
            {this.props.description.phoneNumber}
            <hr />
            <span style={{ color: "Blue", fontSize: "20px" }}>
              Working Time:{" "}
            </span>
            {this.props.description.workingTime}
            <hr />

            <span style={{ color: "Blue", fontSize: "20px" }}>
              Station Number:{" "}
            </span>
            {this.props.description.stationNumber}
            <hr />
            <span style={{ color: "Blue", fontSize: "20px" }}>
              No. Of Charging Points:{" "}
            </span>
            {this.props.description.NoOfChargingPoint}
            <hr />
            <span style={{ color: "Blue", fontSize: "20px" }}>
              Charger Types:{" "}
            </span>
            <br />
            {this.props.description.chargingTypes.map((item, i) => {
              return (
                <p key={i}>
                  {item.name}={item.number}
                </p>
              );
            })}
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.handleModalShowHide()}
            >
              Close
            </Button>

            <Button variant="primary" onClick={this.handleModalShowHideBook}>
              Book A Slot
            </Button>
          </Modal.Footer>
        </Modal>
        <div id="Page">
          {BookASlotShowHide && (
            <BookASlot
              BookASlotShowHide={BookASlotShowHide}
              handleModalShowHideBook={this.handleModalShowHideBook}
              chargingTypes={this.props.description.chargingTypes}
            />
          )}
        </div>
      </div>
    );
  }
}
