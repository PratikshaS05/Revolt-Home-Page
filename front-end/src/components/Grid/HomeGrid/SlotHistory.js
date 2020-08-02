import React from "react";
import { Content, Component } from "react";
import Card from "react-bootstrap/Card";

import SlotHistory from './SlotsHistory.json'

export default class MediaCard extends Component {
  state = { style: "danger" };

  render() {
    return (
      <div>
        {SlotHistory.map((item, id) => {
          if (item.transactionSuccesfull === "true") {
            this.setState({ style: "info" });
          }
          console.log(this.state.style);

          return (
            <Card border={this.state.style} key={id}>
              <Card.Header as="h5">{item.UserName}</Card.Header>
              <Card.Subtitle>{item.carModel}</Card.Subtitle>
              <Card.Body>
                <Card.Text>Booked on:{item.Date}</Card.Text>
                <Card.Text>
                  Time charged: From-{item.StartTime} To-{item.EndTime}
                </Card.Text>
                <Card.Text>
                  Station Name:{item.stationName} Staion Id={item.stationId}
                </Card.Text>
                <Card.Text>Charger Point:{item.chargerType}</Card.Text>
                <Card.Text>Current {item.BatteryCharged}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}
