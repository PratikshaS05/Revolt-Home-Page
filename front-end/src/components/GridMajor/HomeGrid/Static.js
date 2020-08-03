import React from "react";
import { Content, Component, TouchableOpacity, Body } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import Weeklydata from "../../Grid/HomeGrid/graph.json";

import CurrentData from "../../Grid/HomeGrid/currentgraph.json";
import PredictedData from "../../Grid/HomeGrid/predictedData.json";

// import MyStationsData from "./MyStationData.json";

import { Bar, Line, Pie } from "react-chartjs-2";

export default class Static extends Component {
  render() {
    return (
      <div>
        <CardDeck>
          <Card align="right">
            <Line
              data={Weeklydata}
              width={500}
              height={500}
              options={{
                title: {
                  display: true,
                  text: "Last Month Usage",
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
                  text: "Last Month predicted",
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
                  text: "Next Month Prediction",
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