import React from "react";
import { Content, Component } from "react";
import Card from "react-bootstrap/Card";

import slotData from "./slotData.json";

export default class MediaCard extends Component {
  render() {
    return (
      <div>
        {slotData.map((item, id) => {
          return (
            <Card border="">
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
                <Card.Text>Charger Used:{item.chargerType}</Card.Text>
                <Card.Text>
                  Perecntage of battery charged {item.BatteryCharged}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}
