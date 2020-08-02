import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";

class Routing extends MapLayer {
    
  createLeafletElement() {
    
    const { map } = this.props;
    let leafletElement = L.Routing.control({
      waypoints: [L.latLng(18.520430, 73.856743), L.latLng(28.704060, 77.102493)]
    }).addTo(map.leafletElement);
    
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);