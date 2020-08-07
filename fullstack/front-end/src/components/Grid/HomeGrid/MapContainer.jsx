import React,{Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
export  class MapContainer extends Component {
  render() {
    var points = [
        { lat: 42.02, lng: -77.01 },
        { lat: 42.03, lng: -77.02 },
        { lat: 41.03, lng: -77.04 },
        { lat: 42.05, lng: -77.02 }
    ]
    var bounds = new this.props.google.maps.LatLngBounds();
    for (var i = 0; i < points.length; i++) {
      bounds.extend(points[i]);
    }
    return (
        <div>
        
        <Map
        google={this.props.google}
        initialCenter={{
            lat: 42.39,
            lng: -72.52
        }}
        bounds={bounds}>
    </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDSWvmkfGUZlG-unezCY1q07Ynj2WXH-7w')
})(MapContainer)