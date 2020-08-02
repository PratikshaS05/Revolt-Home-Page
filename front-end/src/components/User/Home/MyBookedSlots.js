import React from "react";
import { Content, Component } from "react";
import Card from "react-bootstrap/Card";

import slotData from "./slotData.json";
import Button from "react-bootstrap/Button";


export default class MediaCard extends Component {
                 state = { style: "danger" };
                 handleModalShowHide() {
                   this.props.handleModalShowHide();
                 }

                 render() {
                   return (
                     <div>
                       {slotData.map((item, id) => {
                         if (item.transactionSuccesfull === "true") {
                           this.setState({ style: "info" });
                         }
                         console.log(this.state.style);

                         return (
                           <Card border="info" key={id}>
                             <Card.Header as="h5">
                               {item.stationName}
                             </Card.Header>
                             <Card.Subtitle>{item.carModel}</Card.Subtitle>
                             <Card.Body>
                               <Card.Text>Booked for:{item.Date}</Card.Text>
                               <Card.Text>
                                 Time required to charged: From-{item.StartTime}{" "}
                                 To-
                                 {item.EndTime}
                               </Card.Text>
                               <Card.Text>
                                 Station Name:{item.stationName} Staion Id=
                                 {item.stationId}
                               </Card.Text>
                               <Card.Text>
                                 Charger Used:{item.chargerType}
                               </Card.Text>
                               <Button
                                 variant="primary"
                                 onClick={() => this.handleModalShowHide()}
                               >
                                 Cancel
                               </Button>
                             </Card.Body>
                           </Card>
                         );
                       })}
                     </div>
                   );
                 }
               }
