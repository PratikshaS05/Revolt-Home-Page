import React from "react";
import { Content, Component } from "react";
import Card from "react-bootstrap/Card";

import SlotHistory from "./SlotsHistory.json";
import CardDeck from "react-bootstrap/CardDeck";

export default class MediaCard extends Component {
  render() {
    return (
      <div>
        {SlotHistory.map((item, id) => {
          //console.log(this.state.style);

          return (
            <CardDeck style={{ display: "flex", flexDirection: "row" }}>
              <Card border="info" key={id}>
                <Card.Header as="h4" textColor="Blue">
                  {item.UserName}
                  <Card.Text align="right">Booking ID:{item.id}</Card.Text>
                </Card.Header>

                <Card.Body>
                  <Card.Text>
                    <b>Car model:{item.carModel}</b>
                  </Card.Text>
                  <Card.Text>
                    <b>Booked on:</b>
                    {item.Date}
                  </Card.Text>
                  <Card.Text>
                    <b>Time charged:</b> From-{item.StartTime} To-{item.EndTime}
                  </Card.Text>
                  <Card.Text>
                    <b>Station Name:</b>
                    {item.stationName}
                  </Card.Text>
                  <Card.Text>
                    <b>Station Id:</b>
                    {item.stationId}
                  </Card.Text>
                  <Card.Text>
                    <b>Charger Point:</b>
                    {item.chargerType}
                  </Card.Text>
                  <Card.Text>
                    <b>Battery Charged:</b>
                    {item.BatteryCharged}
                  </Card.Text>

                  <Card.Text>
                    <b>Total bill:</b>
                    {item.BillingAmount}
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          );
        })}
      </div>
    );
  }
}
