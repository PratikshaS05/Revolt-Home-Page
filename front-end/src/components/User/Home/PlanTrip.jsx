import React from "react";
//import { Link } from "react-router-dom";
import "./Styling/PlanTrip.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import swal from "sweetalert";
import axios from "axios";
import UserMap from '../Map/UserMap'
const token = "pk.51fdf5cc6e76763843ff2fdf75f22330"
var p1={},p2={}
export default class PlanTrip extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      start1:'',
      end1:'',
     
     
    }
  }
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  handleModalShowHide() {
    this.props.handleModalShowHide();
  }
  popupShow(){
    swal("Trip Successfully Planed!", "With your current battery,You can travel 90km!", "success");

  }
   geom = async(address)=>{
    var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://us1.locationiq.com/v1/search.php?key=YOUR_PRIVATE_TOKEN&q=Empire%20State%20Building&format=json",
    "method": "GET"
  }
  const res = await axios({
    method:"GET",
    url:`https://us1.locationiq.com/v1/search.php?key=${token}&q=${address}&format=json`
  })
  const latitude = res.data[0].lat
  const longitude = res.data[0].lon

  return {latitude,longitude}
}
onsubmit= async() =>{
  const SL = await this.geom(this.state.start1)
  const EL = await this.geom(this.state.end1)
  p1=SL
  p2=EL
  console.log(p1)
}
  
  
  render() {
    const {start1,end1}=this.state
    const val={start1,end1}
    
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
            margin: "0px",
            padding: "2px",
          }}
          show={this.props.showHide}
          className="bg-transparent  d-inline-block "
        >
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>Plan a Trip</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            Start:
            <input
              type="text"
              placeholder="Start Location"
              className="form-control form-control-sm validate"
              onChange={this.handleChange('start1')}
              defaultValue={val.start1}
            />
            <br />
            Destination:
            <input
              type="text"
              placeholder="Destination Location"
              className="form-control form-control-sm validate"
              onChange={this.handleChange('end1')}
              defaultValue={val.end1}
            />
            <br />
            Current Battery Percentage:
            <input
              type="text"
              placeholder="Current Battery Percentage"
              className="form-control form-control-sm validate"
            />
            <br />
            
            {/*<Button variant="primary">Search</Button>
            <hr />
            Options
            <hr />
            <div
              style={{ fontWeight: "900", color: "balck", fontSize: "20px" }}
              class="custom-control custom-checkbox"
            >
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck"
                name="example1"
              />
              <label class="custom-control-label" for="customCheck">
                Show Along Root Only
              </label>
            </div>
            <form>
              <label for="customRange">Custom range</label>
              <input
                type="range"
                class="custom-range"
                id="customRange"
                name="points1"
              />
              <p>The circle does not count for.....</p>
            </form>*/}
            <div
              style={{ fontWeight: "900", color: "balck", fontSize: "20px" }}
              class="custom-control custom-checkbox"
            >
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck1"
                name="example2"
              />
              <label class="custom-control-label" for="customCheck1">
                Add Wait Times
              </label>
            </div>
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
              onClick={() =>{ this.handleModalShowHide() ; this.popupShow(); this.onsubmit()}}
            >
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
        <div><UserMap p1={p1} /></div>
       
      </div>
    );
  }
}
