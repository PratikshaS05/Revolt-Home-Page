
import React from "react";
import { Content, Component, TouchableOpacity, Body } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import Weeklydata from "./graph.json";

import CurrentData from "./currentgraph.json";
import PredictedData from "./predictedData.json";

import MyStationsData from "./MyStationsData.json";

import { Bar, Line, Pie } from "react-chartjs-2";

export default class stationDetails extends Component {
  render() {
    return (
      <div>
        <CardDeck>
          <Card align="right">
            <Bar
              data={Weeklydata}
              width={500}
              height={500}
              options={{
                title: {
                  display: true,
                  text: "Last Week Consumption",
                  fontSize: 30,
                },
              }}
            />
          </Card>
          <Card align="right">
            <Line
              data={CurrentData}
              width={500}
              height={500}
              options={{
                title: {
                  display: true,
                  text: "This Month Usage",
                  fontSize: 30,
                },
              }}
            />
          </Card>
          <Card>
            <Line
              data={PredictedData}
              width={200}
              height={200}
              options={{
                title: {
                  display: true,
                  text: "Next Month",
                  fontSize: 30,
                },
              }}
            />
          </Card>
        </CardDeck>
      </div>
    );
  }
}