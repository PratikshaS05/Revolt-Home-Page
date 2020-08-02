import React from "react";
import { Popup } from "react-leaflet";
import MoreInfo from './MoreInfo.jsx'
class MarkerPopup extends React.Component{
constructor(props){
  super(props)
this.state={
  showHide1:false
}
}

handleModalShowHide1 = () => {
  this.setState({ showHide1: !this.state.showHide1 });
};

render() {
  const {showHide1}=this.state;
  const { name} = this.props.data;
  return (
    <div>
      <Popup>
        <div className="poup-text">
          {name} <br />
        <hr />
          <button class="btn btn-info" type="button" href="#Page"
          onClick={this.handleModalShowHide1}
          style={{ color: "black" }}>
            More Info
          </button>
        </div>
      </Popup>
      <div id="Page">
        {showHide1 && (
          <MoreInfo
            showHide1={showHide1}
            handleModalShowHide1={this.handleModalShowHide1}
            name={name}
            description={this.props.data.description}
          />
        )}
      </div>
    </div>
  );
};
}
export default MarkerPopup;
