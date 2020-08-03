
import React from "react";
import { Content, Component, TouchableOpacity } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import StationDeatils from "./StationDeatils";
import MyStationsData from "./MyStationsData.json";
import Update from './UpdateStation'

export default class MediaCard extends Component {
  state = { style: "danger", show: false,up:false };
  handleUpdate = () => {
    this.setState({ up: !this.state.up });
  };
  toStationDetails() {}
  handleShow = () => {
    this.setState({ show: true });
  };
  render() {
    const {up}=this.state
    return (
      <div>
        {MyStationsData.map((item, id) => {
          return (
            <CardDeck style={{ display: "flex", flexDirection: "row" }}>
              {/* //
              <TouchableOpacity> */}
              <Card>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.stationName}</Card.Title>
                  <Card.Text>{item.Address}</Card.Text>
                  <Card.Text>
                    Number of ports working:{item.NoofPorts}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    id="#go"
                    variant="primary"
                    onClick={() => {
                      this.toStationDetails();
                      this.handleShow();
                    }}
                  >
                    Details>>>
                  </Button>
                  <Button
                    id="#updates"
                    variant="primary"
                    onClick={
                      this.handleUpdate}
                  >
                    Update
                  </Button>
                </Card.Footer>
              </Card>

              {/* </TouchableOpacity> */}
            </CardDeck>
          );
        })}
        <div id="go">{this.state.show && <StationDeatils />}</div>
        <div id="up">{up && <Update up={up} handleUpdate={this.handleUpdate} />}</div>
      </div>
    );
  }
}