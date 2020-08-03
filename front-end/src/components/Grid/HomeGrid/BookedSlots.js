
import React from "react";
import { Content, Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

import slotData from "./slotData.json";

export default class MediaCard extends Component {
  state = { style: "danger" };

  render() {
    return (
      <div>
        {slotData.map((item, id) => {
          return (
            <CardDeck style={{ display: "flex", flexDirection: "row" }}>
              <Card border="success" borderWidth="50" key={id}>
                <Card.Header as="h4" textColor="Blue">
                  {item.carModel}
                  <Card.Text align="right">Booking ID:{item.id}</Card.Text>
                </Card.Header>

                <Card.Body>
                  <Card.Text>
                    <b>Car number:{item.carnumber}</b>
                  </Card.Text>
                  <Card.Text>
                    <b>Booked for:</b>
                    {item.Date}
                  </Card.Text>
                  <Card.Text>
                    <b>Time Required For Charge:</b> From-{item.StartTime} To-
                    {item.EndTime}
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
                    <b>Currenty battery:</b>
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