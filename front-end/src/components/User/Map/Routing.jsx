import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";

class Routing extends MapLayer {
    
  createLeafletElement() {
    
    const { map } = this.props;
    let leafletElement = L.Routing.control({
      waypoints: [L.latLng(18.52043, 73.856743), L.latLng(19.13825, 77.320953)],
    }).addTo(map.leafletElement);
    
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);